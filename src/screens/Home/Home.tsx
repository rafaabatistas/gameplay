import * as S from './Home.styles';

import React, { useState, useCallback } from 'react';
import { FlatListProps } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CommonActions, useNavigation, useFocusEffect } from '@react-navigation/native';

import { Profile } from '../../components/ui/molecules/Profile/Profile';
import { ButtonAdd } from '../../components/ui/atoms/ButtonAdd/ButtonAdd';
import { CategorySelect } from '../../components/ui/molecules/CategorySelect/CategorySelect';
import { ListHeader } from '../../components/ui/molecules/ListHeader/ListHeader';
import { Appointment, AppointmentData } from '../../components/ui/molecules/Appointment/Appointment';
import { ListDivider } from '../../components/ui/atoms/ListDivider/ListDivider';

import { COLLECTION_APPOINTMENTS } from '../../configs/database';
import { LoadingSpinner } from '../../components/ui/atoms/LoadingSpinner/LoadingSpinner';

export const Home = () => {
  const [category, setCategory] = useState('');
  const [appointments, setAppointments] = useState<AppointmentData[]>([] as AppointmentData[]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  const handleCategorySelected = (id: string) => {
    id === category ? setCategory('') : setCategory(id);
  };

  const handleAppointmentDetails = (guildSelected: AppointmentData) => {
    navigation.dispatch(CommonActions.navigate({ name: 'AppointmentDetails', params: { guildSelected } }));
  };

  const handleAppointmentCreate = () => {
    navigation.dispatch(CommonActions.navigate({ name: 'AppointmentCreate' }));
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

  return (
    <S.Wrapper>
      <S.Header>
        <Profile />
        <ButtonAdd handlePress={handleAppointmentCreate} />
      </S.Header>
      <CategorySelect categorySelected={category} setCategory={handleCategorySelected} />
      {loading ? (
        <S.BoxLoading>
          <S.LoadingContent>
            <LoadingSpinner />
          </S.LoadingContent>
        </S.BoxLoading>
      ) : (
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
      )}
    </S.Wrapper>
  );
};
