import styled, { css } from 'styled-components/native';
import { Container } from '../../components/ui/atoms/Container/Container.styles';
import { Dimensions } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

const { height } = Dimensions.get('window');

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
    margin-top: ${`${getStatusBarHeight() + 32}px`};
    margin-bottom: ${theme.spacings.large};
  `}
`;

export const Content = styled.View`
  margin-top: 32px;
`;

export const Matches = styled.FlatList`
  ${({ theme }) => css`
    height: ${height - 348}px;
    margin-top: ${theme.spacings.small};
    margin-left: ${theme.spacings.small};
  `}
`;
