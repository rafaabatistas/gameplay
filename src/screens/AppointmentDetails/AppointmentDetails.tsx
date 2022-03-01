import * as S from './AppointmentDetails.styles';

import React from 'react';
import { Fontisto } from '@expo/vector-icons';
import { FlatListProps, Platform, Share } from 'react-native';
import { useRoute } from '@react-navigation/native';
import * as Linking from 'expo-linking';
import { BorderlessButton } from 'react-native-gesture-handler';

import LottieView from 'lottie-react-native';
import { Button } from '../../components/ui/atoms/Button/Button';
import { Header } from '../../components/ui/molecules/Header/Header';
import { Member, DataMemberProps } from '../../components/ui/molecules/Member/Member';
import { ListHeader } from '../../components/ui/molecules/ListHeader/ListHeader';
import { ListDivider } from '../../components/ui/atoms/ListDivider/ListDivider';
import { Container } from '../../components/ui/atoms/Container/Container.styles';
import { AppointmentData } from '../../components/ui/molecules/Appointment/Appointment';
import { LoadingSpinner } from '../../components/ui/atoms/LoadingSpinner/LoadingSpinner';

import theme from '../../styles/theme';

import { useFetch } from '../../hooks/useFetch';

import BannerImg from '../.../../../../assets/img/banner.png';
import Animation from '../../../assets/json/error-401.json';

type ParamsProps = {
  guildSelected: AppointmentData;
};

type WidgetProps = {
  id: string;
  name: string;
  instant_invite: string;
  members: DataMemberProps[];
};

export const AppointmentDetails = () => {
  const route = useRoute();
  const { guildSelected } = route.params as ParamsProps;
  const { data: widget, error, isLoading } = useFetch<WidgetProps>(`/guilds/${guildSelected.guild.id}/widget.json`);

  const shareTheInvitation = async () => {
    try {
      const message = Platform.OS === 'ios' ? `Junte-se a ${guildSelected.guild.name}` : widget?.instant_invite;
      await Share.share({
        message,
        url: widget?.instant_invite ?? ''
      });
    } catch (error) {
      console.log(error);
      throw new Error('Erro ao compartilhar');
    }
  };

  const handleOpenGuild = () => {
    Linking.openURL(widget?.instant_invite ?? '');
  };

  return (
    <Container>
      <Header
        title="Detalhes"
        action={
          !!widget?.instant_invite && (
            <BorderlessButton onPress={() => shareTheInvitation()}>
              <Fontisto name="share" size={24} color={theme.colors.primary} />
            </BorderlessButton>
          )
        }
      />
      <S.Banner source={BannerImg}>
        <S.BannerContent>
          <S.Title>{guildSelected.guild.name}</S.Title>
          <S.Subtitle>{guildSelected.description}</S.Subtitle>
        </S.BannerContent>
      </S.Banner>
      {isLoading ? (
        <LoadingSpinner />
      ) : error ? (
        <S.BoxAnimation>
          <S.Animation>
            <LottieView
              source={Animation}
              autoPlay
              loop
              style={{ overflow: 'hidden', width: 220 }}
              resizeMode="contain"
            />
          </S.Animation>
          <S.Description>
            Os detalhes desse servidor não estão disponíveis. Verifique com o dono do servidor se o Widget está ativado.
          </S.Description>
        </S.BoxAnimation>
      ) : (
        <>
          <ListHeader title="Jogadores" totalNumberOfItems={widget?.members.length ?? 2} />
          <S.ListMembers<React.ElementType<FlatListProps<any>>>
            data={widget?.members}
            keyExtractor={(item: DataMemberProps) => item.id}
            renderItem={({ item }: { item: DataMemberProps }) => <Member data={item} />}
            ItemSeparatorComponent={() => <ListDivider />}
          />
        </>
      )}
      <S.ButtonBox>
        <Button withIcon size="overallWidth" enabled={!!widget?.instant_invite} handle={() => handleOpenGuild()}>
          Entrar no servidor do Discord
        </Button>
      </S.ButtonBox>
    </Container>
  );
};
