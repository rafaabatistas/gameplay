import React, { createContext, useContext, useState } from 'react';

export type User = {
  id: string;
  username: string;
  firstName: string;
  avatar: string;
  email: string;
  token: string;
};

export type AuthContextData = {
  user: User;
  setUser: (user: User) => void;
};

const AuthContext = createContext({} as AuthContextData);

export const AuthProvider = (props: { children: JSX.Element }) => {
  const [user, setUser] = useState<User>({} as User);
  return <AuthContext.Provider value={{ user, setUser }}>{props.children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};
