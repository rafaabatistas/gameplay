import * as S from './ButtonAdd.styles';

import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export type ButtonAddProps = {
  handlePress?: () => void;
};

export const ButtonAdd = ({ handlePress }: ButtonAddProps) => (
  <S.Button onPress={handlePress}>
    <MaterialCommunityIcons name="plus" color="#DDE3F0" size={24} />
  </S.Button>
);
