import styled, { css } from 'styled-components/native';

export const Container = styled.View`
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
    margin-top: ${theme.spacings.xxlarge};
    margin-bottom: ${theme.spacings.large};
  `}
`;

export const Content = styled.View`
  margin-top: 42px;
`;

export const Matches = styled.FlatList`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.small};
    margin-left: ${theme.spacings.small};
  `}
`;
