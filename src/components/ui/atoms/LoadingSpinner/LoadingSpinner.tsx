import * as S from './LoadingSpinner.styles';

import React from 'react';

import { ActivityIndicator } from 'react-native';

import theme from '../../../../styles/theme';

export const LoadingSpinner = () => (
  <S.Wrapper>
    <ActivityIndicator size="large" color={theme.colors.primary} />
  </S.Wrapper>
);
