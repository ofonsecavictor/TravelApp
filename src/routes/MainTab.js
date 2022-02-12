import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {Home} from '../screens/HomeScreen';

const Tab = createBottomTabNavigator();

export function MainTab() {
  return (
    <Tab.Navigator
    screenOptions={{
      tabBarStyle: {
        paddinTop: 5,
        paddingBottom: 5,
      },
      tabBarActiveTintColor: '#021e2e',
    }}>
    <Tab.Screen
      name="Home"
      component={Home}
      options={{
        headerShown: false,
        tabBarIcon: ({size, color}) => (
          <MaterialCommunityIcons
            name="home"
            type="ionicon"
            size={size}
            color={color}
          />
        ),
      }}
    />
    </Tab.Navigator>
  );
}
