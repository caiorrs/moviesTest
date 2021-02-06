import React from 'react'
import {createStackNavigator} from '@react-navigation/stack';
import * as Screens from '~/screens';

const Stack = createStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Screens.Home} />
    </Stack.Navigator>
  );
};

export default AppStack;
