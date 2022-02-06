import * as S from './Member.styles';

import React from 'react';

import { View } from 'react-native';
import { Avatar } from '../../atoms/Avatar/Avatar';

export type DataMemberProps = {
  id: string;
  username: string;
  avatar_url: string;
  status: string;
};

export type MemberProps = {
  data: DataMemberProps;
};

export const Member = ({ data }: MemberProps) => {
  const isOnline = data.status === 'online';

  return (
    <S.Wrapper>
      <Avatar image={data.avatar_url} />
      <View>
        <S.Title>{data.username}</S.Title>
        <S.StatusBox>
          <S.BulletStatus isOnline={isOnline} />
          <S.Status>{isOnline ? 'Disponível' : 'Indisponível'}</S.Status>
        </S.StatusBox>
      </View>
    </S.Wrapper>
  );
};
