import styled, { css } from 'styled-components/native';

export const Wrapper = styled.View`
  ${({ theme }) => css`
    align-items: center;
    padding-top: ${theme.spacings.small};
  `}
`;

export const ListGuilds = styled.FlatList`
  width: 100%;
  margin-bottom: 24px;
`;
