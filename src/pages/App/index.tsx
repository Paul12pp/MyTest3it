import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {RootStackParamList} from './type';
// import {createStackNavigator} from '@react-navigation/stack';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../Home';
import {Provider} from 'react-redux';
import configureStore from '../../redux';

const Stack = createNativeStackNavigator<RootStackParamList>();
const store = configureStore();

export default function App() {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}
