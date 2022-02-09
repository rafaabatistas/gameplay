import * as S from './ListGuilds.styles';

import React from 'react';
import { FlatListProps } from 'react-native';

import { Guild, DataGuildProps, GuildProps } from '../../components/ui/atoms/Guild/Guild';
import { ListDivider } from '../../components/ui/atoms/ListDivider/ListDivider';

import guilds from './listGuilds.mock';

export type ListGuildsProps = Pick<GuildProps, 'handleGuildSelect'>;

export const ListGuilds = ({ handleGuildSelect }: ListGuildsProps) => (
  <S.Wrapper>
    <S.ListGuilds<React.ElementType<FlatListProps<any>>>
      data={guilds}
      keyExtractor={(item: DataGuildProps) => item.id}
      renderItem={({ item }: { item: DataGuildProps }) => <Guild data={item} handleGuildSelect={handleGuildSelect} />}
      showsVerticalScrollIndicator={false}
      ItemSeparatorComponent={() => <ListDivider />}
    />
  </S.Wrapper>
);
