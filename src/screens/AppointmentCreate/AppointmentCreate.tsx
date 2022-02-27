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

import {
  validateDays,
  validateMonth,
  validateHours,
  validateMinute,
  validateDescription,
  validateDayAndMonth
} from '../../utils/validate';

const { CDN_IMAGE } = process.env;

type InputNameProps = 'day' | 'month' | 'hour' | 'minute' | 'description';

type FormInputsProps = {
  day: string;
  month: string;
  hour: string;
  minute: string;
  description: string;
};

type ArrayUpdateStateProps = {
  day: (value: string, name: InputNameProps) => void;
  month: (value: string, name: InputNameProps) => void;
  hour: (value: string, name: InputNameProps) => void;
  minute: (value: string, name: InputNameProps) => void;
  description: (value: string, name: InputNameProps) => void;
};

type ArrayValidateProps = {
  day: (value: string) => boolean;
  month: (value: string) => boolean;
  hour: (value: string) => boolean;
  minute: (value: string) => boolean;
  description: (value: string) => boolean;
};

type ValidateProps = {
  dayIsValid: boolean;
  monthIsValid: boolean;
  hourIsValid: boolean;
  minuteIsValid: boolean;
  descriptionIsValid: boolean;
};

export const AppointmentCreate = () => {
  const [category, setCategory] = useState('');
  const [openGuildModal, setOpenGuildModal] = useState(false);
  const [guild, setGuild] = useState<DataGuildProps>({ icon: '' } as DataGuildProps);
  const [buttonEnabled, setButtonEnabled] = useState(false);
  const [validate, setValidate] = useState<ValidateProps>({
    dayIsValid: false,
    monthIsValid: false,
    hourIsValid: false,
    minuteIsValid: false,
    descriptionIsValid: false
  });
  const [formInputs, setFormInputs] = useState<FormInputsProps>({
    day: '',
    month: '',
    hour: '',
    minute: '',
    description: ''
  });

  const handleGuildSelect = (guild: DataGuildProps) => {
    setGuild(guild);
    setOpenGuildModal(false);
  };

  const handleFormInputs = (value: string, name: InputNameProps) => {
    const valuesInput = { ...formInputs, [name]: value };

    setFormInputs(valuesInput);

    const unfilledInputs = checkFilledInputs(valuesInput);
    const checkingFillingDayAndMonth = checkFilledInputs({ day: valuesInput.day, month: valuesInput.month });

    const arrayUpdateState: ArrayUpdateStateProps = {
      day: validateFields,
      month: validateFields,
      hour: validateFields,
      minute: validateFields,
      description: validateFields
    };

    if (arrayUpdateState[name]) {
      arrayUpdateState[name](value, name);
    }

    if (checkingFillingDayAndMonth.length === 0) {
      checkingDayAndMonth(valuesInput.day, valuesInput.month);
    }

    if (unfilledInputs.length === 0) {
      validationOfRequiredFields();
    }
  };

  const validateFields = (value: string, name: InputNameProps) => {
    const arrayValidate: ArrayValidateProps = {
      day: validateDays,
      month: validateMonth,
      hour: validateHours,
      minute: validateMinute,
      description: validateDescription
    };

    const validateValue = arrayValidate[name];

    if (validateValue) {
      const isValid = validateValue(value);

      setValidate({
        ...validate,
        [`${name}IsValid`]: !isValid
      });
    }
  };

  const checkFilledInputs = (valuesInputs: any) => {
    const valuesInputsFormValidated = Object.keys(valuesInputs).filter((k) => valuesInputs[k] === '');
    return valuesInputsFormValidated;
  };

  const checkingDayAndMonth = (day: string, month: string) => {
    const isValid = validateDayAndMonth(day, month);

    setValidate({
      ...validate,
      dayIsValid: !isValid
    });
  };

  const validationOfRequiredFields = () => {
    const validationOfRequiredFields = checkFilledInputs({ ...formInputs, ...guild, category: category });

    if (validationOfRequiredFields.length === 0) {
      setButtonEnabled(true);
    }
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
              <RectButton onPress={() => setOpenGuildModal(true)}>
                <S.Select>
                  {guild.icon === '' ? (
                    <S.Image />
                  ) : (
                    <GuildIcon
                      withBorder={false}
                      marginRight={false}
                      uri={`${CDN_IMAGE}/icons/${guild.id}/${guild.icon}.png`}
                    />
                  )}
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
                    <SmallInput
                      maxLength={2}
                      value={formInputs.day}
                      error={validate.dayIsValid}
                      onChangeText={(value: string) => handleFormInputs(value, 'day')}
                    />
                    <S.Divider>/</S.Divider>
                    <SmallInput
                      maxLength={2}
                      value={formInputs.month}
                      error={validate.monthIsValid}
                      onChangeText={(value: string) => handleFormInputs(value, 'month')}
                    />
                  </S.BoxFields>
                </View>
                <View>
                  <S.Label marginBottom marginTop="small">
                    Horário
                  </S.Label>
                  <S.BoxFields>
                    <SmallInput
                      maxLength={2}
                      value={formInputs.hour}
                      error={validate.hourIsValid}
                      onChangeText={(value: string) => handleFormInputs(value, 'hour')}
                    />
                    <S.Divider>:</S.Divider>
                    <SmallInput
                      maxLength={2}
                      value={formInputs.minute}
                      error={validate.minuteIsValid}
                      onChangeText={(value: string) => handleFormInputs(value, 'minute')}
                    />
                  </S.BoxFields>
                </View>
              </S.BoxLabel>
              <S.BoxLabel>
                <S.Label marginBottom marginTop="small">
                  Descrição
                </S.Label>
                <S.CaracteresLimit>Max 100 caracteres</S.CaracteresLimit>
              </S.BoxLabel>
              <TextArea
                multiline
                maxLength={100}
                numberOfLines={5}
                name="description"
                autoCorrect={false}
                value={formInputs.description}
                onChangeText={(value: string) => handleFormInputs(value, 'description')}
              />
              <S.ButtonBox>
                <Button enabled={buttonEnabled} size="large">
                  Agendar
                </Button>
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
