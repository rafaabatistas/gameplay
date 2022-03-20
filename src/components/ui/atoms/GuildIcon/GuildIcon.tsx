import * as S from './GuildIcon.styles';

import React from 'react';
import { Ionicons } from '@expo/vector-icons';

import DiscordSvg from '../../../../../assets/svg/discord.svg';
import theme from '../../../../styles/theme';

export type GuildIconProps = {
  uri: string | null;
  marginRight?: boolean;
  withBorder?: boolean;
  isSelected?: boolean;
};

export const GuildIcon = ({ uri, withBorder = true, marginRight = true, isSelected = false }: GuildIconProps) => (
  <S.Wrapper marginRight={marginRight}>
    {uri !== null ? (
      <S.Image withBorder={withBorder} source={{ uri }} resizeMode="cover" />
    ) : (
      <S.BackgroundDiscord>
        <DiscordSvg width={40} height={40} />
      </S.BackgroundDiscord>
    )}
    {isSelected && (
      <S.IconSelected
        from={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0 }}
        transition={{ type: 'timing', duration: 100 }}
      >
        <Ionicons name="checkmark-circle" size={26} color={theme.colors.primary} />
      </S.IconSelected>
    )}
  </S.Wrapper>
);
