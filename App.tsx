import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import theme from './src/styles/theme';
import { StatusBar } from 'react-native';

import { SignIn } from './src/screens/SignIn/SignIn';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
      <SignIn />
    </ThemeProvider>
  );
}
