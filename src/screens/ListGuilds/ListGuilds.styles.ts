import styled, { css } from 'styled-components/native';

export const Wrapper = styled.View`
  ${({ theme }) => css`
    flex: 1;
    align-items: center;
    padding-top: ${theme.spacings.small};
  `}
`;

export const ListGuilds = styled.FlatList`
  width: 100%;
  margin-bottom: 24px;
`;

export const BoxAnimation = styled.View`
  flex: 1;
  width: 180px;
  height: 180px;
  align-items: center;
  justify-content: center;
`;
