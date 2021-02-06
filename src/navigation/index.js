import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import * as Screens from '~/screens';
import theme from '~/assets/theme';

const Stack = createStackNavigator();

const AppStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: theme.colors.background,
      },
      headerTintColor: theme.colors.accent,
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}
  >
    <Stack.Screen
      name="Home"
      component={Screens.Home}
      options={({ route }) => ({ title: route?.params?.name || 'Home' })}
    />
    <Stack.Screen
      name="Details"
      component={Screens.Details}
      options={({ route }) => ({ title: route?.params?.name || 'Details' })}
    />
  </Stack.Navigator>
);

export default AppStack;
