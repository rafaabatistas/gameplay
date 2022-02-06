import styled, { css } from 'styled-components/native';

export const Wrapper = styled.Image`
  ${({ theme }) => css`
    width: 64px;
    height: 64px;
    border-radius: ${theme.border.radius};
    margin-right: ${theme.spacings.small};
  `}
`;
