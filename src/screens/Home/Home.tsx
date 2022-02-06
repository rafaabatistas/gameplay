import * as S from './Home.styles';

import React, { useState } from 'react';
import { View } from 'react-native';

import { Profile } from '../../components/ui/molecules/Profile/Profile';
import { ButtonAdd } from '../../components/ui/atoms/ButtonAdd/ButtonAdd';
import { CategorySelect } from '../../components/ui/molecules/CategorySelect/CategorySelect';
import { ListHeader } from '../../components/ui/molecules/ListHeader/ListHeader';
import { Appointment, Data } from '../../components/ui/molecules/Appointment/Appointment';
import { ListDivider } from '../../components/ui/atoms/ListDivider/ListDivider';

import appointments from './home.mock';

export const Home = () => {
  const [category, setCategory] = useState('');

  const handleCategorySelected = (id: string) => {
    id === category ? setCategory('') : setCategory(id);
  };

  return (
    <S.Wrapper>
      <S.Header>
        <Profile />
        <ButtonAdd />
      </S.Header>
      <View>
        <CategorySelect categorySelected={category} setCategory={handleCategorySelected} />
        <S.Content>
          <ListHeader title="Partidas agendadas " totalNumberOfItems={2} />
          <S.Matches<React.ElementType>
            data={appointments}
            keyExtractor={(item: Data) => item.id}
            renderItem={({ item }: { item: Data }) => <Appointment data={item} />}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={() => <ListDivider />}
          />
        </S.Content>
      </View>
    </S.Wrapper>
  );
};
