import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {Home} from '../screens/HomeScreen';
import {Account} from '../screens/AccountScreen';
import {Maps} from '../screens/Maps';
import {Favorites} from '../screens/Favorites';
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

<Tab.Screen
      name="Mapa"
      component={Maps}
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

<Tab.Screen
      name="Favoritos"
      component={Favorites}
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

<Tab.Screen
      name="Perfil"
      component={Account}
      options={{
        headerShown: false,
        tabBarIcon: ({size, color}) => (
          <MaterialCommunityIcons
            name="account"
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
