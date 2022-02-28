import styled, { css, DefaultTheme } from 'styled-components/native';
import { DataMemberProps } from './Member';

const bulletModifiers = {
  online: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.green};
  `,
  offline: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.primary};
  `,
  idle: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.brown};
  `,
  dnd: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.line};
  `
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

export const BulletStatus = styled.View<Pick<DataMemberProps, 'status'>>`
  ${({ theme, status }) => css`
    width: 8px;
    height: 8px;
    border-radius: ${theme.border.radius};

    ${!!status && bulletModifiers[status](theme)}
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
