import styled, { css } from 'styled-components/native';
import { ButtonProps } from './Button';
import { RectButton } from 'react-native-gesture-handler';
import Icon from '../../../../../assets/svg/discord.svg';

type ButtonStylesProps = Pick<ButtonProps, 'size' | 'buttonStyle'>;

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
  `,
  overallWidth: () => css`
    width: 100%;
    height: 56px;
  `
};

export const Wrapper = styled.View<{ border: boolean } & Pick<ButtonProps, 'size'>>`
  ${({ theme, border, size }) => css`
    border: ${border ? `1px solid ${theme.colors.secondary}` : 'none'};
    border-radius: ${theme.border.radius};

    ${!!size && wrapperModifiers[size]}
  `}
`;

export const Button = styled(RectButton)<ButtonStylesProps>`
  ${({ theme, size, enabled, buttonStyle }) => css`
    background-color: ${buttonStyle === 'primary' ? theme.colors.primary : 'transparent'};
    border-radius: ${theme.border.radius};
    align-items: center;
    flex-direction: row;
    opacity: ${enabled ? 1 : 0.5};

    ${!!size && wrapperModifiers[size]}
  `}
`;

export const Text = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.lightGray};
    text-shadow: ${`0 0 8px ${theme.colors.lightGray}`};
    font-family: ${theme.font.family.secundaryRegular};
    font-weight: ${theme.font.regular};
    font-style: normal;
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

export const IconDiscord = styled(Icon)`
  ${({ theme }) => css`
    width: 24px;
    height: 18px;
    color: ${theme.colors.white};
    text-shadow: ${`0 0 8px ${theme.colors.white}`};
  `}
`;
