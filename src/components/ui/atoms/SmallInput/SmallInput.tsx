import * as S from './SmallInput.styles';

import React from 'react';

export const SmallInput = ({ ...rest }) => (
  <S.BackgroundInput>
    <S.ContentInput>
      <S.Input keyboardType="numeric" {...rest} />
    </S.ContentInput>
  </S.BackgroundInput>
);
