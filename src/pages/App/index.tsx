import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {RootStackParamList} from './type';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../Home';

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            header: () => null,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
