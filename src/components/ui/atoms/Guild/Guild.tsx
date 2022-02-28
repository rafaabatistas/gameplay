import * as S from './Guild.styles';

import React from 'react';
import { Feather } from '@expo/vector-icons';
import { View, TouchableOpacityProps } from 'react-native';

import { GuildIcon } from '../GuildIcon/GuildIcon';

import theme from '../../../../styles/theme';

const { CDN_IMAGE } = process.env;

export type DataGuildProps = {
  id: string;
  name: string;
  subtitle?: string;
  icon: string | null;
  owner: boolean;
  numberMembers: number;
};

export type GuildProps = TouchableOpacityProps & {
  data: DataGuildProps;
  handleGuildSelect: (guild: DataGuildProps) => void;
};

export const Guild = ({ data, handleGuildSelect, ...rest }: GuildProps) => {
  const uri = data.icon !== null ? `${CDN_IMAGE}/icons/${data.id}/${data.icon}.png` : null;

  return (
    <S.Wrapper {...rest} activeOpacity={0.7} onPress={() => handleGuildSelect(data)}>
      <GuildIcon uri={uri} withBorder={false} />
      <S.Content>
        <View>
          <S.Title>{data.name}</S.Title>
          <S.Subtitle>{data.subtitle}</S.Subtitle>
        </View>
        <Feather name="chevron-right" color={theme.colors.lightGray} size={24} />
      </S.Content>
    </S.Wrapper>
  );
};
