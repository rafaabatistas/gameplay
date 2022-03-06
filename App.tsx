import React from 'react';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import * as Notifications from 'expo-notifications';
import { ThemeProvider } from 'styled-components/native';
import theme from './src/styles/theme';

import { StatusBar } from 'react-native';
import { Routes } from './src/routes';
import { AuthProvider } from './src/hooks/auth';
import { Container } from './src/components/ui/atoms/Container/Container';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false
  })
});

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_500: require('./assets/fonts/inter-v3-latin-500.ttf'),
    Inter_Regular: require('./assets/fonts/inter-v3-latin-regular.ttf'),
    Rajdhani_500: require('./assets/fonts/rajdhani-v10-latin-500.ttf'),
    Rajdhani_700: require('./assets/fonts/rajdhani-v10-latin-700.ttf'),
    Rajdhani_Regular: require('./assets/fonts/rajdhani-v10-latin-regular.ttf')
  });

  return fontsLoaded ? (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
        <Container>
          <Routes />
        </Container>
      </ThemeProvider>
    </AuthProvider>
  ) : (
    <AppLoading />
  );
}
