import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const Content = styled.View`
  margin-top: -100px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.extra};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.lightGray};
    margin-bottom: ${theme.spacings.xsmall};
    text-align: center;
  `}
`;

export const Description = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.lightGray};
    font-weight: ${theme.font.light};
    margin-bottom: ${theme.spacings.small};
    text-align: center;
  `}
`;

export const Image = styled.Image`
  width: 100%;
  height: 360px;
`;
