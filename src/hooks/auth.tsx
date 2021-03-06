import React, { createContext, useContext, useEffect, useState } from 'react';
import * as AuthSession from 'expo-auth-session';
import AsyncStorage from '@react-native-async-storage/async-storage';

import type User from '../@types/user';

import api from '../services/api';
import { userInfoFormatting, generateExpirationDate } from '../utils/functions';
import { checkTokenValidity } from '../utils/validate';
import { COLLECTION_USERS } from '../configs/database';

const { SCOPE } = process.env;
const { CLIENT_ID } = process.env;
const { REDIRECT_URI } = process.env;
const { RESPONSE_TYPE } = process.env;

export type AuthContextData = {
  user: User;
  loading: boolean;
  signIn: () => Promise<void>;
  signOut: () => Promise<void>;
};

export type AuthorizationResponse = AuthSession.AuthSessionResult & {
  params: {
    access_token?: string;
    error?: string;
    expires_in?: string;
  };
};

const AuthContext = createContext({} as AuthContextData);

export const AuthProvider = (props: { children: JSX.Element }) => {
  const [user, setUser] = useState<User>({} as User);
  const [loading, setLoading] = useState(false);

  const signIn = async () => {
    try {
      setLoading(true);
      const authUrl = `${api.defaults.baseURL}/oauth2/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;
      const { type, params } = (await AuthSession.startAsync({ authUrl })) as AuthorizationResponse;

      if (type === 'success' && !params.error) {
        const userInfo = await api.get('/users/@me', { headers: { authorization: `Bearer ${params.access_token}` } });
        api.defaults.headers.common['authorization'] = `Bearer ${params.access_token}`;

        const user = userInfoFormatting(userInfo);
        const secondsLimit = '604800';
        const tokenExpirationDate = new Date(generateExpirationDate(params.expires_in ?? secondsLimit));
        const userData = { ...user, token: params.access_token, expires_token_in: tokenExpirationDate };

        await AsyncStorage.setItem(COLLECTION_USERS, JSON.stringify(userData));
        setUser(userData);
      }
    } catch (err) {
      console.log('erro', err);
      throw new Error('N??o foi poss??vel autenticar');
    } finally {
      setLoading(false);
    }
  };

  const signOut = async () => {
    setUser({} as User);
    await AsyncStorage.removeItem(COLLECTION_USERS);
  };

  const loadUserStorageData = async () => {
    const storage = await AsyncStorage.getItem(COLLECTION_USERS);

    if (storage) {
      const userLogged = JSON.parse(storage) as User;
      const tokenIsValid = checkTokenValidity(userLogged.expires_token_in);
      api.defaults.headers.common['authorization'] = `Bearer ${userLogged.token}`;

      if (tokenIsValid) {
        signOut();
        return;
      }

      setUser(userLogged);
    }
  };

  useEffect(() => {
    loadUserStorageData();
  }, []);

  return <AuthContext.Provider value={{ user, signIn, loading, signOut }}>{props.children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};
