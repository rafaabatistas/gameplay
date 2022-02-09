import * as S from './GuildIcon.styles';

import React from 'react';

import DiscodChild from '../../../../../assets/img/discord-child.png';

export type GuildIconProps = {
  uri: string | null;
  marginRight?: boolean;
};

export const GuildIcon = ({ uri, marginRight = true }: GuildIconProps) => (
  <S.Wrapper marginRight={marginRight} source={uri !== null ? { uri } : DiscodChild} resizeMode="cover" />
);
