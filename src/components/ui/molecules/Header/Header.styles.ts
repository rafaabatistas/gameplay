import styled, { css } from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Wrapper = styled(LinearGradient).attrs({
  colors: ['#171F52', '#1D2766'],
  start: { x: 0, y: 0 },
  end: { x: 0, y: 1 }
})`
  ${({ theme }) => css`
    width: 100%;
    height: 104px;
    padding-top: ${`${getStatusBarHeight() + 16}px`};
    padding-horizontal: ${theme.spacings.small};
    flex-direction: row;
    align-items: center;
    justify-content: center;
  `}
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    flex: 1;
    text-align: center;
    font-family: ${theme.font.family.primaryBold};
    font-size: ${theme.font.sizes.xxmedium};
    font-weight: ${theme.font.bold};
    font-style: normal;
    color: ${theme.colors.lightGray};
  `}
`;
