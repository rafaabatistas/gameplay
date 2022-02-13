import * as S from './SignIn.styles';

import React from 'react';
import { ActivityIndicator } from 'react-native';

import { useAuth } from '../../hooks/auth';

import { Button } from '../../components/ui/atoms/Button/Button';
import { Container } from '../../components/ui/atoms/Container/Container';

import theme from '../../styles/theme';

import Illustration from '../../../assets/img/illustration.png';

export const SignIn = () => {
  const { loading, signIn } = useAuth();

  const handleSignIn = async () => {
    try {
      await signIn();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container>
      <S.Wrapper>
        <S.Image source={Illustration} resizeMode="stretch" />
        <S.Content>
          <S.Title>
            Conecte-se {'\n'} e organize suas {'\n'} jogatinas
          </S.Title>
          <S.Description>Crie grupos para jogar seus games {'\n'} favoritos com seus amigos</S.Description>
          {loading ? (
            <ActivityIndicator color={theme.colors.primary} size={36} />
          ) : (
            <Button withIcon size="medium" handle={() => handleSignIn()}>
              Entrar com Discord
            </Button>
          )}
        </S.Content>
      </S.Wrapper>
    </Container>
  );
};
