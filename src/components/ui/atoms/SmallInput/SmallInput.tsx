import * as S from './SmallInput.styles';

import React from 'react';

import { TextInputProps } from 'react-native';

import { MotiView } from 'moti';

export type SmallInputProps = TextInputProps & {
  error?: boolean;
};

export const SmallInput = ({ error, ...rest }: SmallInputProps) => (
  <MotiView
    from={{ translateX: 0 }}
    animate={{ translateX: error ? [2, 0, -2, 0] : 0 }}
    exit={{ translateX: 0 }}
    transition={{ type: 'timing', duration: 50 }}
  >
    <S.BackgroundInput>
      <S.BackgroundError error={error}>
        <S.ContentInput>
          <S.Input<React.ElementType<TextInputProps>> keyboardType="numeric" {...rest} />
        </S.ContentInput>
      </S.BackgroundError>
    </S.BackgroundInput>
  </MotiView>
);
