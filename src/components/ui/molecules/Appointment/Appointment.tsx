import * as S from './Appointment.styles';

import React from 'react';
import { TouchableHighlight, TouchableHighlightProps } from 'react-native';

import { DataGuildProps } from '../../atoms/Guild/Guild';
import { GuildIcon } from '../../atoms/GuildIcon/GuildIcon';

import { categories } from '../CategorySelect/categories.mock';

import PlayerSvg from '../../../../../assets/svg/player.svg';
import CalendarSvg from '../../../../../assets/svg/calendar.svg';

import theme from '../../.././../styles/theme';

const { CDN_IMAGE } = process.env;

export type AppointmentData = TouchableHighlightProps & {
  id: string;
  guild: DataGuildProps;
  category: string;
  date: string;
  description: string;
};

export type AppointmentProps = {
  data: AppointmentData;
  editMode?: boolean;
  isSelected?: boolean;
  onPress?: () => void;
  onLongPress?: () => void;
};

export const Appointment = ({ data, editMode = false, isSelected = false, ...rest }: AppointmentProps) => {
  const category = categories.find((item) => item.id === data.category);
  const uri = data.guild.icon !== null ? `${CDN_IMAGE}/icons/${data.guild.id}/${data.guild.icon}.png` : null;
  return (
    <TouchableHighlight {...rest} underlayColor="transparent">
      <S.Wrapper
        from={{ opacity: editMode ? 0.5 : 1 }}
        animate={{ opacity: editMode ? (isSelected ? 1 : 0.5) : 1 }}
        exit={{ opacity: 0 }}
        transition={{ type: 'timing', duration: 100 }}
      >
        <GuildIcon uri={uri} isSelected={isSelected} />
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
    </TouchableHighlight>
  );
};
