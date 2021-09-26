import * as S from './SignIn.styles';

import React from 'react';
import { CommonActions, useNavigation } from '@react-navigation/native';

import { Button } from '../../components/ui/atoms/Button/Button';

import Illustration from '../../../assets/img/illustration.png';

export const SignIn = () => {
  const navigation = useNavigation();

  const handleSignIn = () => {
    navigation.dispatch(CommonActions.navigate({ name: 'Home' }));
  };

  return (
    <S.Container>
      <S.Image source={Illustration} resizeMode="stretch" />
      <S.Content>
        <S.Title>
          Conecte-se {'\n'} e organize suas {'\n'} jogatinas
        </S.Title>
        <S.Description>Crie grupos para jogar seus games {'\n'} favoritos com seus amigos</S.Description>
        <Button withIcon size="medium" handle={() => handleSignIn()}>
          Entrar com Discord
        </Button>
      </S.Content>
    </S.Container>
  );
};
