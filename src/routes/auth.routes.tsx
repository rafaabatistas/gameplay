import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '../screens/Home/Home';
import { SignIn } from '../screens/SignIn/SignIn';

const { Navigator, Screen } = createNativeStackNavigator();

export const AuthRoutes = () => (
  <Navigator
    initialRouteName="SignIn"
    screenOptions={{
      headerShown: false,
      contentStyle: {
        backgroundColor: 'transparent'
      }
    }}
  >
    <Screen name="SignIn" component={SignIn} />
    <Screen name="Home" component={Home} />
  </Navigator>
);
