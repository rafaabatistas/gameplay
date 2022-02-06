import styled, { css } from 'styled-components/native';

export const Wrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Content = styled.View`
  margin-top: -100px;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.extra};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.lightGray};
    margin-bottom: ${theme.spacings.xsmall};
    font-family: ${theme.font.family.primaryBold};
    line-height: ${theme.spacings.large};
    text-align: center;
  `}
`;

export const Description = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.lightGray};
    font-weight: ${theme.font.light};
    margin-bottom: ${theme.spacings.small};
    font-family: ${theme.font.family.secundaryRegular};
    line-height: ${theme.spacings.small};
    text-align: center;
  `}
`;

export const Image = styled.Image`
  width: 100%;
`;
