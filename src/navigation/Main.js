import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../screens/Home';
import { Card } from '../screens/Card';
import { Settings } from '../screens/Settings';

const MainStack = createStackNavigator();

export const Main = () => (
  <MainStack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <MainStack.Screen name="Home" component={Home} />
    <MainStack.Screen name="Card" component={Card} />
    <MainStack.Screen name="Settings" component={Settings} />
  </MainStack.Navigator>
);
