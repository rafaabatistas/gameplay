import styled, { css } from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';
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
  `}
`;

export const Image = styled.Image<ImageProps>`
  ${({ theme, withBorder }) => css`
    width: ${withBorder ? '61px' : '64px'};
    height: ${withBorder ? '61px' : '64px'};
    border-radius: ${theme.border.radius};
  `}
`;
