import * as S from './GuildIcon.styles';

import React from 'react';

import DiscordSvg from '../../../../../assets/svg/discord.svg';

export type GuildIconProps = {
  uri: string | null;
  marginRight?: boolean;
  withBorder?: boolean;
};

export const GuildIcon = ({ uri, withBorder = true, marginRight = true }: GuildIconProps) => (
  <S.Wrapper marginRight={marginRight}>
    {uri !== null ? (
      <S.Image withBorder={withBorder} source={{ uri }} resizeMode="cover" />
    ) : (
      <S.BackgroundDiscord>
        <DiscordSvg width={40} height={40} />
      </S.BackgroundDiscord>
    )}
  </S.Wrapper>
);
