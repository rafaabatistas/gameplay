import * as S from './LoadingSpinner.styles';

import React from 'react';
import LottieView from 'lottie-react-native';

import LoadingAnimation from '../../../../../assets/json/loading.json';

export const LoadingSpinner = () => (
  <S.Wrapper>
    <LottieView source={LoadingAnimation} autoPlay loop resizeMode="contain" />
  </S.Wrapper>
);
