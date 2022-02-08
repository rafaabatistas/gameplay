import styled, { css } from 'styled-components/native';
import { GuildIconProps } from './GuildIcon';

type WrapperProps = Pick<GuildIconProps, 'marginRight'>;

export const Wrapper = styled.Image<WrapperProps>`
  ${({ theme, marginRight }) => css`
    width: 64px;
    height: 64px;
    border-radius: ${theme.border.radius};
    margin-right: ${marginRight ? theme.spacings.small : 0};
  `}
`;
