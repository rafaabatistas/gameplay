import * as S from './AppointmentDetails.styles';

import React from 'react';
import { Fontisto } from '@expo/vector-icons';
import { BorderlessButton } from 'react-native-gesture-handler';

import { Button } from '../../components/ui/atoms/Button/Button';
import { Header } from '../../components/ui/molecules/Header/Header';
import { Member } from '../../components/ui/molecules/Member/Member';
import { ListHeader } from '../../components/ui/molecules/ListHeader/ListHeader';
import { ListDivider } from '../../components/ui/atoms/ListDivider/ListDivider';
import { Container } from '../../components/ui/atoms/Container/Container.styles';

import { DataMemberProps } from '../../components/ui/molecules/Member/Member';
import members from './appointmentDetails.mock';
import theme from '../../styles/theme';

import BannerImg from '../.../../../../assets/img/banner.png';

export const AppointmentDetails = () => (
  <Container>
    <Header
      title="Detalhes"
      action={
        <BorderlessButton>
          <Fontisto name="share" size={24} color={theme.colors.primary} />
        </BorderlessButton>
      }
    />
    <S.Banner source={BannerImg}>
      <S.BannerContent>
        <S.Title>Lendários</S.Title>
        <S.Subtitle>É hoje que vamos chegar ao challenger sem perder uma partida da md10</S.Subtitle>
      </S.BannerContent>
    </S.Banner>
    <ListHeader title="Jogadores" totalNumberOfItems={3} />
    <S.ListMembers<React.ElementType>
      data={members}
      keyExtractor={(item: DataMemberProps) => item.id}
      renderItem={({ item }: { item: DataMemberProps }) => <Member data={item} />}
      ItemSeparatorComponent={() => <ListDivider />}
    />
    <S.ButtonBox>
      <Button withIcon size="large">
        Entrar no servidor do Discord
      </Button>
    </S.ButtonBox>
  </Container>
);
