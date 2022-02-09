import * as S from './ModalView.styles';

import React from 'react';
import { ModalProps } from 'react-native';

export type ModalViewProps = ModalProps & {
  children: React.ReactNode;
};

export const ModalView = ({ children, ...rest }: ModalViewProps) => (
  <S.Wrapper transparent animationType="slide" {...rest}>
    <S.Overlay>
      <S.Container>
        <S.Bar />
        {children}
      </S.Container>
    </S.Overlay>
  </S.Wrapper>
);
