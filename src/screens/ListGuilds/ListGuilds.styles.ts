import styled, { css } from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

export const Wrapper = styled.View`
  ${({ theme }) => css`
    flex: 1;
    align-items: center;
    padding-top: ${theme.spacings.small};
  `}
`;

export const Container = styled(LinearGradient).attrs({
  colors: ['#0E1647', '#0A1033'],
  start: { x: 0, y: 0 },
  end: { x: 0, y: 1 }
})`
  flex: 1;
  margin-top: 110px;
`;

export const Bar = styled.View`
  ${({ theme }) => css`
    width: 39px;
    height: 2px;
    border-radius: 2px;
    background-color: ${theme.colors.secondary};
    align-self: center;
    margin-top: 13px;
  `}
`;

export const ListGuilds = styled.FlatList`
  width: 100%;
  margin-bottom: 24px;
`;

export const BoxAnimation = styled.View`
  ${({ theme }) => css`
    flex: 1;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: ${theme.spacings.small};
  `}
`;

export const Animation = styled.View`
  width: 120px;
  height: 120px;
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
