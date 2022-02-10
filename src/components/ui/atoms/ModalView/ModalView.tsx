import * as S from './ModalView.styles';

import React from 'react';
import { ModalProps, TouchableWithoutFeedback } from 'react-native';

export type ModalViewProps = ModalProps & {
  children: React.ReactNode;
  closeModal: () => void;
};

export const ModalView = ({ children, closeModal, ...rest }: ModalViewProps) => (
  <S.Wrapper transparent animationType="slide" {...rest}>
    <TouchableWithoutFeedback onPress={closeModal}>
      <S.Overlay>
        <S.Container>
          <S.Bar />
          {children}
        </S.Container>
      </S.Overlay>
    </TouchableWithoutFeedback>
  </S.Wrapper>
);
