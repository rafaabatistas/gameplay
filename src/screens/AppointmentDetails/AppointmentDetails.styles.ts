import styled, { css } from 'styled-components/native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

export const Banner = styled.ImageBackground`
  width: 100%;
  height: 160px;
`;

export const BannerContent = styled.View`
  ${({ theme }) => css`
    flex: 1;
    justify-content: flex-end;
    padding: ${theme.spacings.small};
  `}
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.font.family.primaryBold};
    font-weight: ${theme.font.bold};
    font-size: ${theme.font.sizes.large};
    font-style: normal;
    color: ${theme.colors.lightGray};
  `}
`;

export const Subtitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.font.family.secundaryRegular};
    font-weight: ${theme.font.regular};
    font-size: ${theme.font.sizes.medium};
    font-style: normal;
    color: ${theme.colors.lightGray};
    line-height: 21px;
    text-align: left;
  `}
`;

export const ListMembers = styled.FlatList`
  ${({ theme }) => css`
    margin-left: ${theme.spacings.small};
    margin-top: ${theme.spacings.small};
  `}
`;

export const ButtonBox = styled.View`
  ${({ theme }) => css`
    width: 100%;
    flex-direction: row;
    justify-content: center;
    padding: ${theme.spacings.xsmall} ${theme.spacings.small};
    margin-bottom: ${getBottomSpace()};
  `}
`;

export const BoxAnimation = styled.View`
  ${({ theme }) => css`
    flex: 1;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: ${theme.spacings.small};
  `}
`;

export const Animation = styled.View`
  width: 380px;
  height: 120px;
  align-items: center;
  justify-content: center;
`;

export const Description = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.font.family.secundaryRegular};
    font-weight: ${theme.font.regular};
    font-size: ${theme.font.sizes.medium};
    font-style: normal;
    text-align: center;
    color: ${theme.colors.gray};
    margin-top: ${theme.spacings.xsmall};
  `}
`;
