import * as S from './Home.styles';

import React, { useState } from 'react';
import { FlatListProps } from 'react-native';
import { CommonActions, useNavigation } from '@react-navigation/native';

import { Profile } from '../../components/ui/molecules/Profile/Profile';
import { ButtonAdd } from '../../components/ui/atoms/ButtonAdd/ButtonAdd';
import { CategorySelect } from '../../components/ui/molecules/CategorySelect/CategorySelect';
import { ListHeader } from '../../components/ui/molecules/ListHeader/ListHeader';
import { Appointment, Data } from '../../components/ui/molecules/Appointment/Appointment';
import { ListDivider } from '../../components/ui/atoms/ListDivider/ListDivider';

import appointments from './home.mock';

export const Home = () => {
  const [category, setCategory] = useState('');
  const navigation = useNavigation();

  const handleCategorySelected = (id: string) => {
    id === category ? setCategory('') : setCategory(id);
  };

  const handleAppointmentDetails = () => {
    navigation.dispatch(CommonActions.navigate({ name: 'AppointmentDetails' }));
  };

  const handleAppointmentCreate = () => {
    navigation.dispatch(CommonActions.navigate({ name: 'AppointmentCreate' }));
  };

  return (
    <S.Wrapper>
      <S.Header>
        <Profile />
        <ButtonAdd handlePress={handleAppointmentCreate} />
      </S.Header>
      <CategorySelect categorySelected={category} setCategory={handleCategorySelected} />
      <ListHeader title="Partidas agendadas " totalNumberOfItems={2} />
      <S.Matches<React.ElementType<FlatListProps<any>>>
        data={appointments}
        keyExtractor={(item: Data) => item.id}
        renderItem={({ item }: { item: Data }) => <Appointment data={item} onPress={handleAppointmentDetails} />}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <ListDivider />}
      />
    </S.Wrapper>
  );
};
