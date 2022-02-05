import React from 'react';
import styled from 'styled-components/native';
import { ThemeProvider } from 'styled-components';

import theme from '../src/styles/theme';

const Container = styled.View`
  margin: 50px 5px;
`;

export const ThemeDecorator = (getStory) => (
  <ThemeProvider theme={theme}>
    <Container>{getStory()}</Container>
  </ThemeProvider>
);
