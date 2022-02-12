import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import {MainTab} from './MainTab'
import {Details} from '../screens/Details';

const Stack = createStackNavigator();

export function MainStack() {
  return (
    <NavigationContainer style={{backgroundColor: '#010D14'}}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="MainTab" component={MainTab} />
          <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
