import styled, { css } from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

export const BackgroundInput = styled(LinearGradient).attrs({
  colors: ['#171F52', '#1D2766'],
  start: { x: 0, y: 0 },
  end: { x: 0, y: 0.5 }
})`
  ${({ theme }) => css`
    width: 100%;
    height: 95px;
    align-items: center;
    justify-content: center;
    border-radius: ${theme.border.radius};
    margin-bottom: auto;
  `}
`;

export const ContentInput = styled(LinearGradient).attrs({
  colors: ['#243189', '#1B2565'],
  start: { x: 0, y: 0 },
  end: { x: 0, y: 0.5 }
})`
  ${({ theme }) => css`
    width: 99%;
    height: 92px;
    align-items: center;
    justify-content: center;
    border-radius: ${theme.border.radius};
  `}
`;

export const TextArea = styled.TextInput`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    background-color: transparent;
    border-radius: ${theme.border.radius};
    font-family: ${theme.font.family.secundaryRegular};
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.regular};
    color: ${theme.colors.lightGray};
    padding-horizontal: ${theme.spacings.xsmall};
    padding-vertical: 20px;
    text-align-vertical: top;
  `}
`;
