import styled, { css } from 'styled-components/native';
import { MotiView } from 'moti';

export const Wrapper = styled(MotiView)`
  flex: 1;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const BoxButtons = styled.View`
  width: 58px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const NumberAppointmentsSelected = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.font.family.primaryMedium};
    font-size: ${theme.font.sizes.big};
    color: ${theme.colors.lightGray};
  `}
`;
