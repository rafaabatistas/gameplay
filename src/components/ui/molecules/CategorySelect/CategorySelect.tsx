import * as S from './CategorySelect.styles';

import React from 'react';

import { Category } from '../../atoms/Category/Category';

import { categories } from './categories.mock';

export type CategorySelectProps = {
  categorySelected: string;
  setCategory: (id: string) => void;
  hasCheckBox?: boolean;
};

export const CategorySelect = ({ categorySelected, setCategory, hasCheckBox = false }: CategorySelectProps) => (
  <S.Wrapper horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingRight: 40 }}>
    {categories.map(({ id, title, icon }) => (
      <Category
        key={id}
        icon={icon}
        title={title}
        hasCheckBox={hasCheckBox}
        onPress={() => setCategory(id)}
        checked={id === categorySelected}
      />
    ))}
  </S.Wrapper>
);
