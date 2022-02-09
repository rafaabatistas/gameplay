import styled, { css } from 'styled-components/native';

export const ListDivider = styled.View`
  ${({ theme }) => css`
    width: 74%;
    height: 1px;
    background-color: ${theme.colors.box1};
    margin-top: 2px;
    margin-vertical: 31px;
    align-self: flex-end;
  `}
`;
