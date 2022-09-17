import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {RootStackParamList} from './type';
// import {createStackNavigator} from '@react-navigation/stack';
import {
  createNativeStackNavigator,
  NativeStackHeaderProps,
} from '@react-navigation/native-stack';
import Home from '../Home';
import {Provider} from 'react-redux';
import configureStore from '../../redux';
import AppbarHeader from '../../components/AppbarHeader';
import {navigationRef} from '../../utils/navigationref/RootNavigation';
import Indicator from '../Indicator';
import IndicatorDetail from '../IndicatorDetail';

const Stack = createNativeStackNavigator<RootStackParamList>();
const store = configureStore();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              header: () => <AppbarHeader title="Indicadores" />,
            }}
          />
          <Stack.Screen
            name="Indicator"
            component={Indicator}
            options={{
              header: (props: NativeStackHeaderProps) => (
                <AppbarHeader type={'back'} title={props.route.params.name} />
              ),
            }}
          />
          <Stack.Screen
            name="IndicatorDetail"
            component={IndicatorDetail}
            options={{
              header: (props: NativeStackHeaderProps) => (
                <AppbarHeader type={'back'} title={props.route.params.name} />
              ),
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
