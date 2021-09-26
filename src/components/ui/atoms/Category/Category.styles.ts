import styled, { css } from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import { CategoryProps } from './Category';

type ContentProps = Pick<CategoryProps, 'checked'>;

export const Wrapper = styled(RectButton)<ContentProps>`
  ${({ theme, checked }) => css`
    width: 104px;
    height: 120px;
    align-items: center;
    justify-content: center;
    opacity: ${checked ? 1 : 1};
    border-radius: ${theme.border.radius};
    margin-right: ${theme.spacings.xxsmall};
  `}
`;

export const Background = styled(LinearGradient).attrs({
  colors: ['#243189', '#1B2565'],
  start: { x: 0, y: 0 },
  end: { x: 0, y: 0.5 }
})`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    border-radius: ${theme.border.radius};
  `}
`;

export const Content = styled(LinearGradient).attrs({
  colors: ['#1D2766', '#1B2565'],
  start: { x: 0, y: 0 },
  end: { x: 0, y: 0.5 }
})`
  ${({ theme }) => css`
    width: 102px;
    height: 118px;
    position: relative;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border-radius: ${theme.border.radius};
  `}
`;

export const CheckedBox = styled.View<ContentProps>`
  ${({ theme, checked }) => css`
    width: 10px;
    height: 10px;
    top: 8px;
    right: 8px;
    position: absolute;
    align-items: center;
    justify-content: center;
    border-radius: 2px;
    background-color: ${checked ? theme.colors.primary : theme.colors.stroke1};
  `}
`;

export const Checked = styled(LinearGradient).attrs({
  colors: ['#0E1647', '#0A1033'],
  start: { x: 0, y: 0 },
  end: { x: 0, y: 0.5 }
})<ContentProps>`
  ${({ checked }) => css`
    width: 8px};
    height: 8px;
    opacity: ${checked ? 0 : 1};
    border-radius: 2px;
  `}
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-weight: ${theme.font.bold};
    font-family: ${theme.font.family.primaryBold};
    color: ${theme.colors.lightGray};
    margin-top: ${theme.spacings.xsmall};
    text-shadow: ${`0 0 2px ${theme.colors.lightGray}`};
  `}
`;
