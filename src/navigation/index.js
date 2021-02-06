import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import * as Screens from '~/screens';

const Stack = createStackNavigator();

const AppStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={Screens.Home} />
    <Stack.Screen name="Details" component={Screens.Details} />
  </Stack.Navigator>
);

export default AppStack;
