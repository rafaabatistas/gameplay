import styled, { css } from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';
import { getBottomSpace } from 'react-native-iphone-x-helper';

export type LabelProps = {
  marginTop?: 'small' | 'medium' | 'reset';
  marginLeft?: boolean;
  marginBottom?: boolean;
};

export const BoxLabel = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Label = styled.Text<LabelProps>`
  ${({ theme, marginTop = 'reset', marginLeft = false, marginBottom = false }) => css`
    font-family: ${theme.font.family.primaryBold};
    font-weight: ${theme.font.bold};
    font-size: ${theme.font.sizes.xmedium};
    font-style: normal;
    color: ${theme.colors.lightGray};
    margin-top: ${theme.spacings[marginTop!]};
    margin-left: ${marginLeft ? theme.spacings.small : 0};
    margin-bottom: ${marginBottom ? '12px' : 0};
  `}
`;

export const Form = styled.View`
  ${({ theme }) => css`
    padding-left: ${theme.spacings.small};
    padding-right: ${theme.spacings.small};
    margin-top: ${theme.spacings.medium};
    align-items: center;
  `}
`;

export const Select = styled.View`
  ${({ theme }) => css`
    width: 100%;
    height: 68px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border: 2px solid ${theme.colors.stroke2};
    border-radius: ${theme.border.radius};
    padding-right: ${theme.spacings.xsmall};
    overflow: hidden;
  `}
`;

export const Image = styled(LinearGradient).attrs({
  colors: ['#1D2766', '#171F52'],
  start: { x: 0, y: 0 },
  end: { x: 0, y: 1 }
})`
  ${({ theme }) => css`
    width: 64px;
    height: 100%;
    border-top-right-radius: ${theme.border.radius};
    border-bottom-right-radius: ${theme.border.radius};
  `}
`;

export const SelectBody = styled.View`
  ${({ theme }) => css`
    flex: 1;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-left: ${theme.spacings.xsmall};
  `}
`;

export const BoxFields = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Divider = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.font.family.secundaryRegular};
    font-weight: ${theme.font.regular};
    font-style: normal;
    font-size: ${theme.font.sizes.medium};
    color: ${theme.colors.lightGray};
    padding-horizontal: 6px;
  `}
`;

export const ButtonBox = styled.View`
  ${({ theme }) => css`
    width: 100%;
    flex-direction: row;
    justify-content: center;
    align-self: flex-end;
    padding: ${theme.spacings.xsmall};
    margin-bottom: ${getBottomSpace()};
  `}
`;

export const CaracteresLimit = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.font.family.secundaryRegular};
    font-weight: ${theme.font.regular};
    font-size: ${theme.font.sizes.medium};
    font-style: normal;
    color: ${theme.colors.gray};
    margin-top: ${theme.spacings.xsmall};
  `}
`;
