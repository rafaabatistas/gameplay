import styled, { css } from 'styled-components/native';

export const Wrapper = styled.TouchableOpacity`
  ${({ theme }) => css`
    width: 100%;
    flex-direction: row;
    align-items: center;
    padding-horizontal: ${theme.spacings.small};
    margin-bottom: 16px;
  `}
`;

export const Content = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.font.family.primaryBold};
    font-weight: ${theme.font.bold};
    font-size: ${theme.font.sizes.xmedium};
    font-style: normal;
    color: ${theme.colors.lightGray};
    margin-bottom: 4px;
  `}
`;

export const Subtitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.font.family.primaryRegular};
    font-weight: ${theme.font.medium};
    font-size: ${theme.font.sizes.small};
    font-style: normal;
    color: ${theme.colors.gray};
  `}
`;
