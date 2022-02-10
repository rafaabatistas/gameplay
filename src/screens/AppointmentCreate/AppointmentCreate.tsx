import * as S from './AppointmentCreate.styles';

import React, { useState } from 'react';
import { View, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';

import { ListGuilds } from '../ListGuilds/ListGuilds';
import { Button } from '../../components/ui/atoms/Button/Button';
import { Header } from '../../components/ui/molecules/Header/Header';
import { TextArea } from '../../components/ui/atoms/TextArea/TextArea';
import { DataGuildProps } from '../../components/ui/atoms/Guild/Guild';
import { GuildIcon } from '../../components/ui/atoms/GuildIcon/GuildIcon';
import { ModalView } from '../../components/ui/atoms/ModalView/ModalView';
import { SmallInput } from '../../components/ui/atoms/SmallInput/SmallInput';
import { Container } from '../../components/ui/atoms/Container/Container.styles';
import { CategorySelect } from '../../components/ui/molecules/CategorySelect/CategorySelect';

import theme from '../../styles/theme';

export const AppointmentCreate = () => {
  const [category, setCategory] = useState('');
  const [openGuildModal, setOpenGuildModal] = useState(false);
  const [guild, setGuild] = useState<DataGuildProps>({ icon: '' } as DataGuildProps);

  const handleOpenGuildModal = (status: boolean) => {
    setOpenGuildModal(status);
  };

  const handleGuildSelect = (guild: DataGuildProps) => {
    setGuild(guild);
    handleOpenGuildModal(false);
  };

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1 }}>
      <Container>
        <ScrollView>
          <View>
            <Header title="Agendar partida" />
            <S.Label marginBottom marginLeft marginTop="medium">
              Categoria
            </S.Label>
            <CategorySelect hasCheckBox categorySelected={category} setCategory={setCategory} />
            <S.Form>
              <RectButton onPress={() => handleOpenGuildModal(true)}>
                <S.Select>
                  {guild.icon === '' ? <S.Image /> : <GuildIcon marginRight={false} uri={guild.icon} />}
                  <S.SelectBody>
                    <S.Label>{guild.name ? guild.name : 'Selecione um servidor'}</S.Label>
                    <Feather name="chevron-right" color={theme.colors.lightGray} size={18} />
                  </S.SelectBody>
                </S.Select>
              </RectButton>
              <S.BoxLabel>
                <View>
                  <S.Label marginBottom marginTop="small">
                    Dia e mês
                  </S.Label>
                  <S.BoxFields>
                    <SmallInput maxLength={2} />
                    <S.Divider>/</S.Divider>
                    <SmallInput maxLength={2} />
                  </S.BoxFields>
                </View>
                <View>
                  <S.Label marginBottom marginTop="small">
                    Horário
                  </S.Label>
                  <S.BoxFields>
                    <SmallInput maxLength={2} />
                    <S.Divider>:</S.Divider>
                    <SmallInput maxLength={2} />
                  </S.BoxFields>
                </View>
              </S.BoxLabel>
              <S.BoxLabel>
                <S.Label marginBottom marginTop="small">
                  Descrição
                </S.Label>
                <S.CaracteresLimit>Max 100 caracteres</S.CaracteresLimit>
              </S.BoxLabel>
              <TextArea maxLength={100} multiline numberOfLines={5} autoCorrect={false} />
              <S.ButtonBox>
                <Button size="large">Agendar</Button>
              </S.ButtonBox>
            </S.Form>
          </View>
        </ScrollView>
        <ModalView visible={openGuildModal} closeModal={() => setOpenGuildModal(false)}>
          <ListGuilds handleGuildSelect={handleGuildSelect} />
        </ModalView>
      </Container>
    </KeyboardAvoidingView>
  );
};
