import styled, { css } from 'styled-components/native';

export const Wrapper = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 24px;
  margin-top: 24px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.font.family.primaryBold};
    color: ${theme.colors.lightGray};
    font-size: ${theme.font.sizes.xmedium};
  `}
`;

export const Description = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.font.family.secundaryRegular};
    color: ${theme.colors.lightGray};
    font-size: ${theme.font.sizes.small};
  `}
`;
