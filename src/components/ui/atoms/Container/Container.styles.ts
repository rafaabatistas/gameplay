import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

export const Container = styled(LinearGradient).attrs({
  colors: ['#0E1647', '#0A1033'],
  start: { x: 0, y: 0 },
  end: { x: 0, y: 1 }
})`
  flex: 1;
`;
