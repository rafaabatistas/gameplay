import * as S from './SmallInput.styles';

import React from 'react';

import { TextInputProps } from 'react-native';

export type SmallInputProps = TextInputProps & {
  error?: boolean;
};

export const SmallInput = ({ error, ...rest }: SmallInputProps) => (
  <S.BackgroundInput>
    <S.BackgroundError error={error}>
      <S.ContentInput>
        <S.Input<React.ElementType<TextInputProps>> keyboardType="numeric" {...rest} />
      </S.ContentInput>
    </S.BackgroundError>
  </S.BackgroundInput>
);
