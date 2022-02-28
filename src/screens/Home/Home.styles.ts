import styled, { css } from 'styled-components/native';
import { Platform } from 'react-native';
import { Container } from '../../components/ui/atoms/Container/Container.styles';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Wrapper = styled(Container)`
  flex: 1;
`;

export const Header = styled.View`
  ${({ theme }) => css`
    width: 100%;
    height: 50px;
    padding: ${`0 ${theme.spacings.small}`};
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: ${`${Platform.OS === 'ios' ? getStatusBarHeight() + 36 : 56}px`};
    margin-bottom: ${theme.spacings.large};
  `}
`;

export const Content = styled.View`
  margin-top: 32px;
`;

export const Matches = styled.FlatList`
  ${({ theme }) => css`
    height: 100%;
    margin-top: ${theme.spacings.small};
    margin-left: ${theme.spacings.small};
  `}
`;

export const BoxLoading = styled.View`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: flex-start;
`;

export const LoadingContent = styled.View`
  width: 100%;
  height: 200px;
`;
