import * as S from './Profile.styles';

import React from 'react';

import { Avatar } from '../../atoms/Avatar/Avatar';

export const Profile = () => (
  <S.Container>
    <Avatar image="https://github.com/rafaabatistas.png" />
    <S.Box>
      <S.User>
        <S.Greeting>Olá, </S.Greeting>
        <S.UserName>Rafael</S.UserName>
      </S.User>
      <S.Message>Hoje é dia de vitória</S.Message>
    </S.Box>
  </S.Container>
);
