import * as S from './Appointment.styles';

import React from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import { GuildIcon } from '../../atoms/GuildIcon/GuildIcon';

import { categories } from '../CategorySelect/categories.mock';

import theme from '../../.././../styles/theme';
import PlayerSvg from '../../../../../assets/svg/player.svg';
import CalendarSvg from '../../../../../assets/svg/calendar.svg';

export type GuildProps = {
  id: string;
  name: string;
  icon: string | null;
  owner: boolean;
};

export type Data = RectButtonProps & {
  id: string;
  guild: GuildProps;
  category: string;
  date: string;
  description: string;
};

export type AppointmentProps = {
  data: Data;
  onPress: () => void;
};

const uri =
  'https://w7.pngwing.com/pngs/942/98/png-transparent-discord-computer-icons-teamspeak-computer-servers-others-miscellaneous-blue-smiley.png';

export const Appointment = ({ data, ...rest }: AppointmentProps) => {
  const category = categories.find((item) => item.id === data.category);
  const { owner } = data.guild;
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
              <PlayerSvg fill={owner ? theme.colors.primary : theme.colors.green} />
              <S.Player owner={owner}>{owner ? 'Anfitrião' : 'Visitante'}</S.Player>
            </S.PlayersInfo>
          </S.Footer>
        </S.Content>
      </S.Wrapper>
    </RectButton>
  );
};
