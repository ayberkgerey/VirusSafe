import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MainScreen from '../screens/MainScreen';
import ControlScreen from '../screens/ControlScreen';
const Stack = createStackNavigator();

export default function Navigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MainScreen" component={MainScreen} />
      <Stack.Screen name="ControlScreen" component={ControlScreen} />
    </Stack.Navigator>
  );
}
