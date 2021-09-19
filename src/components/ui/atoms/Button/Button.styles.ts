import styled, { css } from 'styled-components/native';
import { ButtonProps } from './Button';

type WrapperProps = Pick<ButtonProps, 'size'>;

const wrapperModifiers = {
  small: () => css`
    width: 160px;
    height: 56px;
  `,
  medium: () => css`
    width: 274px;
    height: 56px;
  `,
  large: () => css`
    width: 327px;
    height: 56px;
  `
};

export const Button = styled.TouchableOpacity<WrapperProps>`
  ${({ theme, size }) => css`
    background-color: ${theme.colors.primary};
    border-radius: ${theme.border.radius};
    align-items: center;
    flex-direction: row;

    ${!!size && wrapperModifiers[size]}
  `}
`;

export const Text = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.lightGray};
    font-size: ${theme.font.sizes.medium};
    text-align: center;
    flex: 1;
  `}
`;

export const BoxIcon = styled.View`
  ${({ theme }) => css`
    width: 56px;
    height: 56px;
    justify-content: center;
    align-items: center;
    border-right-width: 1px;
    border-color: ${theme.colors.line};
  `}
`;

export const Icon = styled.Image``;
