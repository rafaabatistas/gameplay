import styled, { css } from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

type TitleProps = {
  weight?: 'regular' | 'bold';
  color?: 'lightGray' | 'primary';
};

const flexCenter = css`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled(LinearGradient).attrs({
  colors: ['#0A1033', '#0E1647'],
  start: { x: 0, y: 0 },
  end: { x: 0, y: 1 }
})`
  width: 100%;
  height: 174px;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  justify-content: center;
`;

export const BoxTitle = styled.View`
  ${flexCenter}
  margin-bottom: 24px;
`;

export const Title = styled.Text<TitleProps>`
  ${({ theme, weight = 'regular', color = 'lightGray' }) => css`
    font-family: ${theme.font.family.primaryRegular};
    font-size: ${theme.font.sizes.big};
    font-weight: ${theme.font[weight!]};
    line-height: ${theme.spacings.medium};
    font-style: normal;
    text-align: center;
    color: ${theme.colors[color!]};
  `}
`;

export const BoxButtons = styled.View`
  ${flexCenter}
  justify-content: space-evenly;
`;
