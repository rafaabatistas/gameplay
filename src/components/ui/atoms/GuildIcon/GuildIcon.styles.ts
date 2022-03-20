import styled, { css } from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';
import { MotiView } from 'moti';

import { GuildIconProps } from './GuildIcon';

type WrapperProps = Pick<GuildIconProps, 'marginRight'>;
type ImageProps = Pick<GuildIconProps, 'withBorder'>;

export const Wrapper = styled(LinearGradient).attrs({
  colors: ['#243189', '#1B2565'],
  start: { x: 0, y: 0 },
  end: { x: 0, y: 1 }
})<WrapperProps>`
  ${({ theme, marginRight }) => css`
    width: 64px;
    height: 64px;
    align-items: center;
    justify-content: center;
    border-radius: ${theme.border.radius};
    margin-right: ${marginRight ? theme.spacings.small : 0};
    position: relative;
  `}
`;

export const Image = styled.Image<ImageProps>`
  ${({ theme, withBorder }) => css`
    width: ${withBorder ? '61px' : '64px'};
    height: ${withBorder ? '61px' : '64px'};
    border-radius: ${theme.border.radius};
  `}
`;

export const BackgroundDiscord = styled.View`
  ${({ theme }) => css`
    width: 64px;
    height: 64px;
    align-items: center;
    justify-content: center;
    border-radius: ${theme.border.radius};
    background-color: ${theme.colors.discord};
  `}
`;

export const IconSelected = styled(MotiView)`
  ${({ theme }) => css`
    width: 25px;
    height: 25px;
    position: absolute;
    bottom: -3px;
    right: -3px;
    align-items: center;
    justify-content: center;
    border-radius: 22px;
    background-color: ${theme.colors.gradientBg2};
  `}
`;
