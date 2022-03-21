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
import { EditPanelAppointment } from '../../components/ui/molecules/EditPanelAppointment/EditPanelAppointment';
import { LoadingSpinner } from '../../components/ui/atoms/LoadingSpinner/LoadingSpinner';
import { CategorySelect } from '../../components/ui/molecules/CategorySelect/CategorySelect';
import { Appointment, AppointmentData } from '../../components/ui/molecules/Appointment/Appointment';

import { COLLECTION_APPOINTMENTS } from '../../configs/database';

import { registerForPushNotificationsAsync, getCollectionAppointments } from '../../utils/functions';
import { useAuth } from '../../hooks/auth';

import Animation from '../../../assets/json/rocket.json';

export const Home = () => {
  const [category, setCategory] = useState('');
  const [appointments, setAppointments] = useState<AppointmentData[]>([] as AppointmentData[]);
  const [editAppointment, setEditAppointment] = useState<string[]>([]);
  const [editMode, setEditMode] = useState<boolean>(false);
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

  const enableEditModeAppointment = (id: string) => {
    if (editAppointment.find((i) => i === id) === undefined) {
      !editMode && setEditMode(true);
      setEditAppointment([...editAppointment, id]);
      return;
    }

    const removeItemListSchedule = editAppointment.filter((i) => i !== id);
    setEditAppointment(removeItemListSchedule);
    removeItemListSchedule.length === 0 && setEditMode(false);
  };

  const disableEditModeAppointment = () => {
    setEditMode(false);
    setEditAppointment([]);
  };

  const deleteAppointment = async () => {
    try {
      const appointments: AppointmentData[] = await getCollectionAppointments();
      const currentAppointments: AppointmentData[] = appointments.filter((item) => !editAppointment.includes(item.id));
      editAppointment.forEach(async (id) => await Notifications.cancelScheduledNotificationAsync(id));
      await AsyncStorage.setItem(COLLECTION_APPOINTMENTS, JSON.stringify(currentAppointments));
      setAppointments(currentAppointments);
      disableEditModeAppointment();
    } catch (error) {
      console.log(error);
      alert('Erro ao excluir o agendamento');
      throw new Error('Erro ao excluir o agendamento');
    }
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
      const storage: AppointmentData[] = await getCollectionAppointments();

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
      <S.BoxHeader editMode={editMode}>
        <S.Header>
          {editMode ? (
            <EditPanelAppointment
              deleteAppointment={() => deleteAppointment()}
              exitEditMode={() => disableEditModeAppointment()}
              numberAppointmentsSelected={editAppointment.length}
            />
          ) : (
            <>
              <Profile />
              <ButtonAdd
                handlePress={() => {
                  handleAppointmentCreate();
                  onPressAppointmentCreateButton();
                }}
              />
            </>
          )}
        </S.Header>
      </S.BoxHeader>
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
              <Appointment
                data={item}
                editMode={editMode}
                isSelected={!!editAppointment.find((i) => i === item.id)}
                onLongPress={() => enableEditModeAppointment(item.id)}
                onPress={() => (editMode ? enableEditModeAppointment(item.id) : handleAppointmentDetails(item))}
              />
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
