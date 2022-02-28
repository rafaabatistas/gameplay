import * as S from './Appointment.styles';

import React from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import { DataGuildProps } from '../../atoms/Guild/Guild';
import { GuildIcon } from '../../atoms/GuildIcon/GuildIcon';

import { categories } from '../CategorySelect/categories.mock';

import PlayerSvg from '../../../../../assets/svg/player.svg';
import CalendarSvg from '../../../../../assets/svg/calendar.svg';

import theme from '../../.././../styles/theme';

const { CDN_IMAGE } = process.env;

export type AppointmentData = RectButtonProps & {
  id: string;
  guild: DataGuildProps;
  category: string;
  date: string;
  description: string;
};

export type AppointmentProps = {
  data: AppointmentData;
  onPress?: () => void;
};

export const Appointment = ({ data, ...rest }: AppointmentProps) => {
  const category = categories.find((item) => item.id === data.category);
  const uri = data.guild.icon !== null ? `${CDN_IMAGE}/icons/${data.guild.id}/${data.guild.icon}.png` : null;
  return (
    <RectButton {...rest}>
      <S.Wrapper>
        <GuildIcon uri={uri} />
        <S.Content>
          <S.Header>
            <S.Title>{data.guild.name}</S.Title>
            <S.Category>{category?.title}</S.Category>
          </S.Header>
          <S.Footer>
            <S.DateInfo>
              <CalendarSvg />
              <S.Date>{data.date}</S.Date>
            </S.DateInfo>
            <S.PlayersInfo>
              <PlayerSvg fill={theme.colors.primary} />
              <S.Player>3</S.Player>
            </S.PlayersInfo>
          </S.Footer>
        </S.Content>
      </S.Wrapper>
    </RectButton>
  );
};
