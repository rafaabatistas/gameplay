import * as S from './CategorySelect.styles';

import React from 'react';

import { Category } from '../../atoms/Category/Category';

import { categories } from './categories.mock';

export type CategorySelectProps = {
  categorySelected: string;
  setCategory: (id: string) => void;
};

export const CategorySelect = ({ categorySelected, setCategory }: CategorySelectProps) => (
  <S.Wrapper horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingRight: 40 }}>
    {categories.map(({ id, title, icon }) => (
      <Category key={id} title={title} icon={icon} checked={id === categorySelected} onPress={() => setCategory(id)} />
    ))}
  </S.Wrapper>
);
