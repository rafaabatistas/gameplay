import styled, { css } from 'styled-components/native';

export type BulletStatusProps = {
  isOnline: boolean;
};

export const Wrapper = styled.View`
  ${({ theme }) => css`
    width: 100%;
    flex-direction: row;
    align-items: center;
    margin-bottom: ${theme.spacings.xxsmall};
  `}
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.font.family.primaryBold};
    font-size: ${theme.font.sizes.xmedium};
    color: ${theme.colors.lightGray};
  `}
`;

export const StatusBox = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const BulletStatus = styled.View<BulletStatusProps>`
  ${({ theme, isOnline }) => css`
    width: 8px;
    height: 8px;
    border-radius: ${theme.border.radius};
    background-color: ${isOnline ? theme.colors.green : theme.colors.primary};
  `}
`;

export const Status = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.font.family.secundaryRegular};
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.gray};
    margin-left: ${theme.spacings.xxsmall};
  `}
`;
