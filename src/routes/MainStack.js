import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import {MainTab} from './MainTab'
import {Home} from '../screens/HomeScreen';

const Stack = createStackNavigator();

export function MainStack() {
  return (
    <NavigationContainer style={{backgroundColor: '#010D14'}}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="MainTab" component={MainTab} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
