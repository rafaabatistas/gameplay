import * as S from './Home.styles';

import React, { useState } from 'react';

import { Profile } from '../../components/ui/molecules/Profile/Profile';
import { ButtonAdd } from '../../components/ui/atoms/ButtonAdd/ButtonAdd';
import { CategorySelect } from '../../components/ui/molecules/CategorySelect/CategorySelect';

export const Home = () => {
  const [category, setCategory] = useState('');

  const handleCategorySelected = (id: string) => {
    id === category ? setCategory('') : setCategory(id);
  };
  return (
    <S.Container>
      <S.Header>
        <Profile />
        <ButtonAdd />
      </S.Header>
      <CategorySelect categorySelected={category} setCategory={handleCategorySelected} />
    </S.Container>
  );
};
