import * as S from './ListGuilds.styles';

import React, { useEffect, useState } from 'react';
import { FlatListProps } from 'react-native';
import LottieView from 'lottie-react-native';

import { ListDivider } from '../../components/ui/atoms/ListDivider/ListDivider';
import { LoadingSpinner } from '../../components/ui/atoms/LoadingSpinner/LoadingSpinner';
import { Guild, DataGuildProps, GuildProps } from '../../components/ui/atoms/Guild/Guild';

import api from '../../services/api';

import Animation from '../../../assets/json/error.json';

export type ListGuildsProps = Pick<GuildProps, 'handleGuildSelect'>;

export const ListGuilds = ({ handleGuildSelect }: ListGuildsProps) => {
  const [guilds, setGuilds] = useState<GuildProps[]>([]);
  const [animationError, setAnimationError] = useState(false);
  const [loading, setLoading] = useState(true);

  const fetchGuilds = async () => {
    try {
      const res = await api.get('/users/@me/guilds');
      setGuilds(res.data);
    } catch (err) {
      setAnimationError(true);
      throw new Error('Erro ao buscar os servidores');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGuilds();
  }, []);

  return (
    <S.Wrapper>
      {loading ? (
        <LoadingSpinner />
      ) : animationError ? (
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
  );
};
