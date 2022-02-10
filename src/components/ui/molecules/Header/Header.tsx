import * as S from './Header.styles';

import React, { ReactNode } from 'react';
import { View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { BorderlessButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import theme from '../../../../styles/theme';

export type HeaderProps = {
  title: string;
  action?: ReactNode;
};

export const Header = ({ title, action }: HeaderProps) => {
  const navigation = useNavigation();

  const handleGoback = () => {
    navigation.goBack();
  };

  return (
    <S.Wrapper>
      <BorderlessButton onPress={() => handleGoback()}>
        <Feather name="arrow-left" size={24} color={theme.colors.lightGray} />
      </BorderlessButton>
      <S.Title>{title}</S.Title>
      {action ? <View>{action}</View> : <S.Block />}
    </S.Wrapper>
  );
};
