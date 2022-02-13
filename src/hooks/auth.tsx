import React, { createContext, useContext, useState } from 'react';
import * as AuthSession from 'expo-auth-session';

import type User from '../@types/user';

import api from '../services/api';
import { userInfoFormatting } from '../utils/functions';

const { SCOPE } = process.env;
const { CLIENT_ID } = process.env;
const { REDIRECT_URI } = process.env;
const { RESPONSE_TYPE } = process.env;

export type AuthContextData = {
  user: User;
  setUser: (user: User) => void;
  loading: boolean;
  signIn: () => Promise<void>;
};

export type AuthorizationResponse = AuthSession.AuthSessionResult & {
  params: {
    access_token: string;
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

      if (type === 'success') {
        const userInfo = await api.get('/users/@me', { headers: { authorization: `Bearer ${params.access_token}` } });
        const user = userInfoFormatting(userInfo);
        setLoading(false);
        setUser({ ...user, token: params.access_token });
      } else {
        setLoading(false);
      }
    } catch (err) {
      console.log('erro', err);
      setLoading(false);
      throw new Error('Não foi possível autenticar');
    }
  };

  return <AuthContext.Provider value={{ user, signIn, loading, setUser }}>{props.children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};
