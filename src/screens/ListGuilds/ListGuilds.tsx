import * as S from './ListGuilds.styles';

import React from 'react';
import { FlatListProps } from 'react-native';
import LottieView from 'lottie-react-native';

import { ListDivider } from '../../components/ui/atoms/ListDivider/ListDivider';
import { LoadingSpinner } from '../../components/ui/atoms/LoadingSpinner/LoadingSpinner';
import { Guild, DataGuildProps, GuildProps } from '../../components/ui/atoms/Guild/Guild';

import Animation from '../../../assets/json/error.json';
import { useFetch } from '../../hooks/useFetch';

export type ListGuildsProps = Pick<GuildProps, 'handleGuildSelect'>;

export const ListGuilds = ({ handleGuildSelect }: ListGuildsProps) => {
  const { data: guilds, error, isLoading } = useFetch<GuildProps[]>('/users/@me/guilds');

  return (
    <S.Container>
      <S.Bar />
      <S.Wrapper>
        {isLoading ? (
          <LoadingSpinner />
        ) : error ? (
          <S.BoxAnimation>
            <S.Animation>
              <LottieView source={Animation} autoPlay loop={false} resizeMode="contain" />
            </S.Animation>
            <S.Description>Erro ao listar os servidores. Tente novamente mais tarde.</S.Description>
          </S.BoxAnimation>
        ) : (
          <S.ListGuilds<React.ElementType<FlatListProps<any>>>
            data={guilds}
            keyExtractor={(item: DataGuildProps) => item.id}
            renderItem={({ item }: { item: DataGuildProps }) => (
              <Guild data={item} handleGuildSelect={handleGuildSelect} />
            )}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={() => <ListDivider />}
          />
        )}
      </S.Wrapper>
    </S.Container>
  );
};
