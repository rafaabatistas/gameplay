import * as S from './EditPanelAppointment.styles';

import React from 'react';
import { View } from 'react-native';
import { Feather, FontAwesome, Ionicons } from '@expo/vector-icons';
import { BorderlessButton } from 'react-native-gesture-handler';

import theme from '../../../../styles/theme';

export type EditPanelScheduleProps = {
  numberAppointmentsSelected: number;
  exitEditMode?: () => void;
  deleteAppointment?: () => void;
};

export const EditPanelAppointment = ({
  exitEditMode,
  numberAppointmentsSelected,
  deleteAppointment
}: EditPanelScheduleProps) => (
  <S.Wrapper
    from={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ type: 'timing', duration: 300 }}
  >
    <S.BoxButtons>
      <BorderlessButton onPress={exitEditMode}>
        <Feather name="arrow-left" size={24} color={theme.colors.lightGray} />
      </BorderlessButton>
      <S.NumberAppointmentsSelected>{numberAppointmentsSelected}</S.NumberAppointmentsSelected>
    </S.BoxButtons>
    <S.BoxButtons>
      {numberAppointmentsSelected === 1 ? (
        <BorderlessButton>
          <FontAwesome name="pencil" size={24} color={theme.colors.lightGray} />
        </BorderlessButton>
      ) : (
        <View />
      )}
      <BorderlessButton onPress={deleteAppointment}>
        <Ionicons name="trash" size={24} color={theme.colors.lightGray} />
      </BorderlessButton>
    </S.BoxButtons>
  </S.Wrapper>
);
