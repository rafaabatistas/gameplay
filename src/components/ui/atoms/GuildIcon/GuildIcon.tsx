import * as S from './GuildIcon.styles';

import React from 'react';

export type GuildIconProps = {
  uri: string;
};

export const GuildIcon = ({ uri }: GuildIconProps) => <S.Wrapper source={{ uri }} resizeMode="cover" />;
