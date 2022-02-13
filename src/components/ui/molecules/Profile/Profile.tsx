import * as S from './Profile.styles';

import React from 'react';

import { useAuth } from '../../../../hooks/auth';

import { Avatar } from '../../atoms/Avatar/Avatar';

export const Profile = () => {
  const { user } = useAuth();

  return (
    <S.Container>
      <Avatar image={user.avatar} />
      <S.Box>
        <S.User>
          <S.Greeting>Olá, </S.Greeting>
          <S.UserName>{user.firstName}</S.UserName>
        </S.User>
        <S.Message>Hoje é dia de vitória</S.Message>
      </S.Box>
    </S.Container>
  );
};
