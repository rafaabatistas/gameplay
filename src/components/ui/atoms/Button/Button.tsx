import * as S from './Button.styles';

import React from 'react';

export type ButtonProps = {
  children: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
  withIcon?: boolean;
  handle?: () => void;
};

export const Button = ({ children, size = 'medium', withIcon = false, handle }: ButtonProps) => (
  <S.Button size={size} onPress={handle}>
    {withIcon && (
      <S.BoxIcon>
        <S.IconDiscord />
      </S.BoxIcon>
    )}
    <S.Text>{children}</S.Text>
  </S.Button>
);
