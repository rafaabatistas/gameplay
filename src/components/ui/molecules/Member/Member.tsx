import * as S from './Member.styles';

import React from 'react';

import { View } from 'react-native';
import { Avatar } from '../../atoms/Avatar/Avatar';

export type DataMemberProps = {
  id: string;
  username: string;
  avatar_url: string;
  status: 'online' | 'offline' | 'idle' | 'dnd';
};

export type MemberProps = {
  data: DataMemberProps;
};

export const Member = ({ data }: MemberProps) => {
  const arrayStatus = {
    online: 'Online',
    offline: 'Offline',
    idle: 'Ausente',
    dnd: 'Não pertube'
  };

  return (
    <S.Wrapper>
      <Avatar image={data.avatar_url} />
      <View>
        <S.Title>{data.username}</S.Title>
        <S.StatusBox>
          <S.BulletStatus status={data.status} />
          <S.Status>{arrayStatus[data.status]}</S.Status>
        </S.StatusBox>
      </View>
    </S.Wrapper>
  );
};
