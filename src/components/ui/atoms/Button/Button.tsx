import * as S from './Button.styles';

import React from 'react';

export type ButtonProps = {
  children: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
  withIcon?: boolean;
};

import Icon from '../../../../../assets/img/discord.png';

export const Button = ({ children, size = 'medium', withIcon = false }: ButtonProps) => (
  <S.Button size={size} activeOpacity={0.7}>
    {withIcon && (
      <S.BoxIcon>
        <S.Icon source={Icon} />
      </S.BoxIcon>
    )}
    <S.Text>{children}</S.Text>
  </S.Button>
);
