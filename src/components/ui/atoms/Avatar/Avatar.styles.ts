import styled, { css } from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

export const Container = styled(LinearGradient).attrs({
  colors: ['#243189', '#1B2565'],
  start: { x: 0, y: 0 },
  end: { x: 0, y: 1 }
})`
  ${({ theme }) => css`
    width: 49px;
    height: 49px;
    border-radius: ${theme.border.radius};
    align-items: center;
    justify-content: center;
    margin-right: ${theme.spacings.xsmall};
  `}
`;

export const Image = styled.Image`
  ${({ theme }) => css`
    width: 46px;
    height: 46px;
    border-radius: ${theme.border.radius};
  `}
`;
