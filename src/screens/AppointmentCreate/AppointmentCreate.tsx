import * as S from './AppointmentCreate.styles';

import React, { useState } from 'react';
import { View, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';

import { Button } from '../../components/ui/atoms/Button/Button';
import { Header } from '../../components/ui/molecules/Header/Header';
import { TextArea } from '../../components/ui/atoms/TextArea/TextArea';
import { GuildIcon } from '../../components/ui/atoms/GuildIcon/GuildIcon';
import { SmallInput } from '../../components/ui/atoms/SmallInput/SmallInput';
import { Container } from '../../components/ui/atoms/Container/Container.styles';
import { CategorySelect } from '../../components/ui/molecules/CategorySelect/CategorySelect';

import theme from '../../styles/theme';

export const AppointmentCreate = () => {
  const [category, setCategory] = useState('');
  const uri =
    'https://w7.pngwing.com/pngs/942/98/png-transparent-discord-computer-icons-teamspeak-computer-servers-others-miscellaneous-blue-smiley.png';

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
              <RectButton>
                <S.Select>
                  {/* <S.Image /> */}
                  <GuildIcon marginRight={false} uri={uri} />
                  <S.SelectBody>
                    <S.Label>Selecione um servidor</S.Label>
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
      </Container>
    </KeyboardAvoidingView>
  );
};
