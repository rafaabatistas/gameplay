import * as S from './SignIn.styles';

import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';

import { Button } from '../../components/ui/atoms/Button/Button';

import Illustration from '../../../assets/img/illustration.png';

export const SignIn = () => (
  <S.Container>
    <LinearGradient colors={['#0E1647', '#0A1033']} style={{ height: '100%', width: '100%', position: 'absolute' }} />
    <S.Image source={Illustration} resizeMode="stretch" />
    <S.Content>
      <S.Title>
        Conecte-se {`\n`} e organize suas {`\n`} jogatinas
      </S.Title>
      <S.Description>Crie grupos para jogar seus games {`\n`} favoritos com seus amigos</S.Description>
      <Button withIcon size="medium">
        Entrar com Discord
      </Button>
    </S.Content>
  </S.Container>
);
