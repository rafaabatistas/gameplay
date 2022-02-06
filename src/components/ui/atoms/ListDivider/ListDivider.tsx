import styled, { css } from 'styled-components/native';

export const ListDivider = styled.View`
  ${({ theme }) => css`
    width: 80%;
    height: 1px;
    background-color: ${theme.colors.box1};
    margin-vertical: 21px;
    align-self: flex-end;
  `}
`;
