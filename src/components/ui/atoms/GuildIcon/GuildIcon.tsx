import * as S from './GuildIcon.styles';

import React from 'react';

import DiscodChild from '../../../../../assets/img/discord-child.png';

export type GuildIconProps = {
  uri: string | null;
  marginRight?: boolean;
  withBorder?: boolean;
};

export const GuildIcon = ({ uri, withBorder = true, marginRight = true }: GuildIconProps) => (
  <S.Wrapper marginRight={marginRight}>
    <S.Image withBorder={withBorder} source={uri !== null ? { uri } : DiscodChild} resizeMode="cover" />
  </S.Wrapper>
);
