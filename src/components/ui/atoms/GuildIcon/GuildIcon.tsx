import * as S from './GuildIcon.styles';

import React from 'react';

export type GuildIconProps = {
  uri: string;
  marginRight?: boolean;
};

export const GuildIcon = ({ uri, marginRight = true }: GuildIconProps) => (
  <S.Wrapper marginRight={marginRight} source={{ uri }} resizeMode="cover" />
);
