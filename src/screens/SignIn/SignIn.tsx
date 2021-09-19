import React from 'react';
import { StatusBar } from 'expo-status-bar';
import * as S from './SignIn.styles';

export const SignIn = () => {
  const bla = 'foo';
  return (
    <S.Container>
      <S.Title>Hello World</S.Title>
      <StatusBar style="auto" />
    </S.Container>
  );
};
