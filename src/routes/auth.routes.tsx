import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '../screens/Home/Home';
import { SignIn } from '../screens/SignIn/SignIn';
import { AppointmentDetails } from '../screens/AppointmentDetails/AppointmentDetails';
import { AppointmentCreate } from '../screens/AppointmentCreate/AppointmentCreate';
import { Storybook } from '../screens/Storybook/Storybook';

import theme from '../styles/theme';

const { Navigator, Screen } = createNativeStackNavigator();

export const AuthRoutes = () => (
  <Navigator
    initialRouteName="SignIn"
    screenOptions={{
      headerShown: false,
      contentStyle: {
        backgroundColor: theme.colors.gradientBg2
      }
    }}
  >
    <Screen name="SignIn" component={SignIn} />
    <Screen name="Home" component={Home} />
    <Screen name="Storybook" component={Storybook} />
    <Screen name="AppointmentDetails" component={AppointmentDetails} />
    <Screen name="AppointmentCreate" component={AppointmentCreate} />
  </Navigator>
);
