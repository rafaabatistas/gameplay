import * as S from './Button.styles';

import React from 'react';

export type ButtonProps = {
  children: React.ReactNode;
  buttonStyle?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large' | 'overallWidth';
  withIcon?: boolean;
  enabled?: boolean;
  handle?: () => void;
};

export const Button = ({
  children,
  size = 'medium',
  withIcon = false,
  enabled = true,
  buttonStyle = 'primary',
  handle
}: ButtonProps) => (
  <S.Wrapper border={buttonStyle === 'secondary'} size={size}>
    <S.Button size={size} onPress={handle} enabled={enabled} buttonStyle={buttonStyle}>
      {withIcon && (
        <S.BoxIcon>
          <S.IconDiscord />
        </S.BoxIcon>
      )}
      <S.Text>{children}</S.Text>
    </S.Button>
  </S.Wrapper>
);
