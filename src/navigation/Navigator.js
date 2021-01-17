import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {MainScreen, ControlScreen} from '../screens';
import {DeviceProvider} from '../provider/DeviceProvider';

const Stack = createStackNavigator();

export default function Navigator() {
  return (
    <DeviceProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="MainScreen"
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="MainScreen" component={MainScreen} />
          <Stack.Screen name="ControlScreen" component={ControlScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </DeviceProvider>
  );
}
