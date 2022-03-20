import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  max-width: 85%;
  overflow: hidden;
`;

export const Box = styled.View`
  flex-direction: column;
`;

export const User = styled.View`
  flex-direction: row;
`;

export const Greeting = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.font.family.primaryMedium};
    font-size: ${theme.font.sizes.big};
    color: ${theme.colors.white};
  `}
`;

export const UserName = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.font.family.primaryBold};
    font-size: ${theme.font.sizes.big};
    color: ${theme.colors.white};
  `}
`;

export const Message = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.font.family.secundaryRegular};
    color: ${theme.colors.gray};
  `}
`;
