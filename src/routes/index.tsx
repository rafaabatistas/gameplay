import React, { useRef } from 'react';
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';
import * as Analytics from 'expo-firebase-analytics';

import { useAuth } from '../hooks/auth';
import { AppRoutes } from './app.routes';

import { SignIn } from '../screens/SignIn/SignIn';

export const Routes = () => {
  const { user } = useAuth();
  const navigationRef = useNavigationContainerRef();
  const routeNameRef = useRef<any>();

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        routeNameRef.current = navigationRef.current?.getCurrentRoute()?.name;
      }}
      onStateChange={async () => {
        const previousRouteName = routeNameRef.current;
        const currentRouteName = navigationRef.current?.getCurrentRoute()?.name;
        console.log(previousRouteName, currentRouteName, 'bla');
        if (previousRouteName !== currentRouteName) {
          await Analytics.logEvent(`${currentRouteName}`, {
            screen: `${currentRouteName}`,
            user: user.id ?? 'Ainda não está logado',
            purpose: `Navegando entre as rotas, de ${previousRouteName} para ${currentRouteName}`
          });
        }

        routeNameRef.current = currentRouteName;
      }}
    >
      {user.id ? <AppRoutes /> : <SignIn />}
    </NavigationContainer>
  );
};
