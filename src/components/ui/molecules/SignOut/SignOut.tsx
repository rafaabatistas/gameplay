import * as S from './SignOut.styles';

import React from 'react';

import { TouchableOpacity } from 'react-native';
import { Button } from '../../atoms/Button/Button';

type SignOutProps = {
  handleCancel: (close: boolean) => void;
  handleSignOut: () => void;
};

export const SignOut = ({ handleCancel, handleSignOut }: SignOutProps) => (
  <S.Wrapper>
    <S.BoxTitle>
      <S.Title>Deseja sair do </S.Title>
      <S.Title weight="bold">Game</S.Title>
      <S.Title weight="bold" color="primary">
        Play
      </S.Title>
      <S.Title weight="bold">?</S.Title>
    </S.BoxTitle>
    <S.BoxButtons>
      <TouchableOpacity onPress={() => handleCancel(false)}>
        <Button size="small" buttonStyle="secondary">
          Não
        </Button>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleSignOut()}>
        <Button size="small">Sim</Button>
      </TouchableOpacity>
    </S.BoxButtons>
  </S.Wrapper>
);
