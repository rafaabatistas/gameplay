import * as S from './ListHeader.styles';

import React from 'react';

export type ListHeader = {
  title: string;
  totalNumberOfItems: number;
};

export const ListHeader = ({ title, totalNumberOfItems }: ListHeader) => (
  <S.Wrapper>
    <S.Title>{title}</S.Title>
    <S.Description>Total {totalNumberOfItems}</S.Description>
  </S.Wrapper>
);
