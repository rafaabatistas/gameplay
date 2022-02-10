import styled, { css } from 'styled-components/native';

export const Wrapper = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  margin-bottom: 16px;
`;

export const Content = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 12px;
`;

export const Footer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

export const DateInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Date = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.font.family.secundaryRegular};
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.lightGray};
    margin-left: ${theme.spacings.xxsmall};
  `}
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.font.family.primaryBold};
    font-size: ${theme.font.sizes.xmedium};
    color: ${theme.colors.white};
  `}
`;

export const Category = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.font.family.secundaryRegular};
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.gray};
    margin-right: ${theme.spacings.small};
  `}
`;

export const PlayersInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Player = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.font.family.secundaryRegular};
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.lightGray};
    margin-right: ${theme.spacings.small};
    margin-left: ${theme.spacings.xxsmall};
  `}
`;
