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
    max-width: 100%;
    height: 50px;
    padding: 0 ${theme.spacings.small};
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: ${`${Platform.OS === 'ios' ? getStatusBarHeight() + 36 : 56}px`};
    margin-bottom: 20px;
  `}
`;

export const BoxHeader = styled.View<{ editMode: boolean }>`
  ${({ theme, editMode }) => css`
    background-color: ${editMode ? theme.colors.gradientBg2 : 'transparent'};
    margin-bottom: 20px;
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

export const BoxContent = styled.View`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: flex-start;
`;

export const LoadingContent = styled.View`
  width: 100%;
  height: 200px;
`;

export const BoxAnimation = styled.View`
  flex: 1;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
`;

export const Description = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.font.family.secundaryRegular};
    font-weight: ${theme.font.regular};
    font-size: ${theme.font.sizes.medium};
    font-style: normal;
    text-align: center;
    padding: 0 ${theme.spacings.xsmall};
    color: ${theme.colors.gray};
    margin-top: ${theme.spacings.xsmall};
  `}
`;

export const AnimationContent = styled.View`
  width: 100%;
  height: 210px;
  overflow: hidden;
  align-items: center;
  justify-content: center;
`;
