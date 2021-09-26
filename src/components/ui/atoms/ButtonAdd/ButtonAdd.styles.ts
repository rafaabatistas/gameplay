import styled, { css } from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Button = styled(RectButton)`
  ${({ theme }) => css`
    width: 46px;
    height: 46px;
    background-color: ${theme.colors.primary};
    align-items: center;
    justify-content: center;
    border-radius: ${theme.border.radius};
  `}
`;
