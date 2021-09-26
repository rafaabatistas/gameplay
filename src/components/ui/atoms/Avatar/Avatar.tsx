import * as S from './Avatar.styles';

import React from 'react';

export type AvatarProps = {
  image: string;
};

export const Avatar = ({ image }: AvatarProps) => (
  <S.Container>
    <S.Image source={{ uri: image }} />
  </S.Container>
);
