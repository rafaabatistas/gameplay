import * as S from './AppointmentCreate.styles';

import React, { useEffect, useState } from 'react';
import { View, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { CommonActions, useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { ListGuilds } from '../ListGuilds/ListGuilds';
import { RectButton } from 'react-native-gesture-handler';
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

import { schedulePushNotification } from '../../utils/functions';
import { validateWhichYearTheDateRefers } from '../../utils/validate';

import { COLLECTION_APPOINTMENTS } from '../../configs/database';

import {
  validateDays,
  validateMonth,
  validateHours,
  validateMinute,
  validateDescription,
  validateDayOfTheWeek,
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
  const navigation = useNavigation();
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
    setFormInputs({ ...formInputs, [name]: value });

    validateFields(value, name);
  };

  const validateFields = (value: string, name: InputNameProps) => {
    const arrayValidate: ArrayValidateProps = {
      day: validateDays,
      month: validateMonth,
      hour: validateHours,
      minute: validateMinute,
      description: validateDescription
    };

    if (arrayValidate[name]) {
      const isValid = arrayValidate[name](value);

      setValidate({ ...validate, [`${name}IsValid`]: !isValid });
    }
  };

  const checkFilledInputs = (valuesInputs: any) => {
    const valuesInputsFormValidated = Object.keys(valuesInputs).filter((k) => valuesInputs[k] === '');
    return valuesInputsFormValidated;
  };

  const checkingDayAndMonth = (day: string, month: string) => {
    if (Number(day) !== 0 && Number(month) !== 0) {
      const isValid = validateDayAndMonth(day, month);

      setValidate({
        ...validate,
        dayIsValid: !isValid
      });
    }
  };

  const validationOfRequiredFields = () => {
    const arrayValidate: any = validate;
    const validationOfRequiredFields = checkFilledInputs({ ...formInputs, ...guild, category: category });
    const checkingFieldsForErrors = Object.keys(arrayValidate).filter((k) => arrayValidate[k] === true);

    if (validationOfRequiredFields.length === 0 && checkingFieldsForErrors.length === 0) {
      setButtonEnabled(true);
      return;
    }

    setButtonEnabled(false);
  };

  const handleSubmit = async () => {
    try {
      const { day, month, hour, minute, description } = formInputs;
      const year = validateWhichYearTheDateRefers(month);

      const dayOfTheWeek = validateDayOfTheWeek(day, month);
      const dayAndMonth = `${day.padStart(2, '0')}/${month.padStart(2, '0')}`;
      const hourAndMinute = `${hour.padStart(2, '0')}:${minute.padStart(2, '0')}h`;
      const date_format = new Date(year, +month - 1, +day, +hour, +minute);

      const newAppointment = {
        guild,
        category,
        date: `${dayOfTheWeek} ${dayAndMonth} às ${hourAndMinute}`,
        date_create: new Date(),
        date_update: new Date(),
        date_format,
        description
      };

      const storage = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS);
      const appointments = storage ? JSON.parse(storage) : [];

      const scheduleIdentifier = await schedulePushNotification(
        'O tão aguardado momento chegou!!! 🎮',
        `Nós estamos te aguardando, entre no servidor do ${guild.name}`,
        newAppointment,
        date_format
      );

      await AsyncStorage.setItem(
        COLLECTION_APPOINTMENTS,
        JSON.stringify([...appointments, { ...newAppointment, id: scheduleIdentifier }])
      );

      navigation.dispatch(CommonActions.navigate({ name: 'Home' }));
    } catch (err) {
      console.log(err);
      throw new Error('Erro ao agendar uma nova jogatina');
    }
  };

  useEffect(() => {
    const { day, month } = formInputs;
    const { dayIsValid, monthIsValid } = validate;

    if (day !== '' && month !== '' && !dayIsValid && !monthIsValid) {
      checkingDayAndMonth(day, month);
    }

    validationOfRequiredFields();
  }, [formInputs, guild, category]);

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
                      uri={guild.icon ? `${CDN_IMAGE}/icons/${guild.id}/${guild.icon}.png` : null}
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
                <Button enabled={buttonEnabled} size="overallWidth" handle={() => handleSubmit()}>
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
