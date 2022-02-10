import styled, { css } from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

export const Wrapper = styled.Modal``;

export const Overlay = styled.View`
  ${({ theme }) => css`
    flex: 1;
    background-color: ${theme.colors.overlay};
  `}
`;

export const Container = styled(LinearGradient).attrs({
  colors: ['#0E1647', '#0A1033'],
  start: { x: 0, y: 0 },
  end: { x: 0, y: 1 }
})`
  flex: 1;
  margin-top: 110px;
`;

export const Bar = styled.View`
  ${({ theme }) => css`
    width: 39px;
    height: 2px;
    border-radius: 2px;
    background-color: ${theme.colors.secondary};
    align-self: center;
    margin-top: 13px;
  `}
`;
