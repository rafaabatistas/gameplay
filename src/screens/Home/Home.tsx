import * as S from './Home.styles';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { FlatListProps } from 'react-native';
import * as Analytics from 'expo-firebase-analytics';
import * as Notifications from 'expo-notifications';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LottieView from 'lottie-react-native';
import { CommonActions, useNavigation, useFocusEffect } from '@react-navigation/native';

import { Profile } from '../../components/ui/molecules/Profile/Profile';
import { ButtonAdd } from '../../components/ui/atoms/ButtonAdd/ButtonAdd';
import { ListDivider } from '../../components/ui/atoms/ListDivider/ListDivider';
import { ListHeader } from '../../components/ui/molecules/ListHeader/ListHeader';
import { LoadingSpinner } from '../../components/ui/atoms/LoadingSpinner/LoadingSpinner';
import { CategorySelect } from '../../components/ui/molecules/CategorySelect/CategorySelect';
import { Appointment, AppointmentData } from '../../components/ui/molecules/Appointment/Appointment';

import { COLLECTION_APPOINTMENTS } from '../../configs/database';

import Animation from '../../../assets/json/rocket.json';
import { registerForPushNotificationsAsync } from '../../utils/functions';
import { useAuth } from '../../hooks/auth';

export const Home = () => {
  const [category, setCategory] = useState('');
  const [appointments, setAppointments] = useState<AppointmentData[]>([] as AppointmentData[]);
  const [loading, setLoading] = useState(true);
  const notificationListener = useRef<any>();
  const responseListener = useRef<any>();
  const navigation = useNavigation();
  const { user } = useAuth();

  const handleCategorySelected = (id: string) => {
    id === category ? setCategory('') : setCategory(id);
  };

  const handleAppointmentDetails = (guildSelected: AppointmentData | any) => {
    navigation.dispatch(CommonActions.navigate({ name: 'AppointmentDetails', params: { guildSelected } }));
  };

  const handleAppointmentCreate = () => {
    navigation.dispatch(CommonActions.navigate({ name: 'AppointmentCreate' }));
  };

  const onPressAppointmentCreateButton = () => {
    Analytics.logEvent('AppointmentCreate', {
      sender: 'button',
      user: user.id,
      screen: 'AppointmentCreate',
      purpose: 'O usuário está agendando uma nova partida'
    });
  };

  const loadingAppointments = async () => {
    try {
      const res = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS);
      const storage: AppointmentData[] = res ? JSON.parse(res) : [];

      if (category) {
        setAppointments(storage.filter((item) => item.category === category));
      } else {
        setAppointments(storage);
      }
    } catch (error) {
      console.log(error);
      throw new Error('Erro ao carregar os agendamentos');
    } finally {
      setLoading(false);
    }
  };

  useFocusEffect(
    useCallback(() => {
      loadingAppointments();
    }, [category])
  );

  useEffect(() => {
    registerForPushNotificationsAsync().then((token) => console.log('token', token));

    notificationListener.current = Notifications.addNotificationReceivedListener((notification) => {
      console.log(notification);
      navigation.dispatch(CommonActions.navigate({ name: 'Home' }));
    });

    responseListener.current = Notifications.addNotificationResponseReceivedListener((res) => {
      handleAppointmentDetails(res.notification.request.content.data);
    });

    return () => {
      Notifications.removeNotificationSubscription(notificationListener.current);
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  return (
    <S.Wrapper>
      <S.Header>
        <Profile />
        <ButtonAdd
          handlePress={() => {
            handleAppointmentCreate();
            onPressAppointmentCreateButton();
          }}
        />
      </S.Header>
      <CategorySelect categorySelected={category} setCategory={handleCategorySelected} />
      {loading ? (
        <S.BoxContent>
          <S.LoadingContent>
            <LoadingSpinner />
          </S.LoadingContent>
        </S.BoxContent>
      ) : appointments.length > 0 ? (
        <>
          <ListHeader title="Partidas agendadas " totalNumberOfItems={appointments.length} />
          <S.Matches<React.ElementType<FlatListProps<any>>>
            data={appointments}
            keyExtractor={(item: AppointmentData) => item.id}
            renderItem={({ item }: { item: AppointmentData }) => (
              <Appointment data={item} onPress={() => handleAppointmentDetails(item)} />
            )}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={() => <ListDivider />}
          />
        </>
      ) : (
        <S.BoxContent>
          <S.AnimationContent>
            <LottieView source={Animation} style={{ height: 260 }} autoPlay resizeMode="contain" loop />
          </S.AnimationContent>
          <S.Description>Agende uma partida agora e dê um ganho no seu estresse.</S.Description>
        </S.BoxContent>
      )}
    </S.Wrapper>
  );
};
