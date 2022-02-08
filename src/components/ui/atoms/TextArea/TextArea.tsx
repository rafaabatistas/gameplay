import * as S from './TextArea.styles';

import React from 'react';

export const TextArea = ({ ...rest }) => (
  <S.BackgroundInput>
    <S.ContentInput>
      <S.TextArea {...rest} />
    </S.ContentInput>
  </S.BackgroundInput>
);
