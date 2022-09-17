// import {StackScreenProps} from '@react-navigation/stack';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {IndicatorProps} from '../Indicator/type';
import {IndicatorDetailProps} from '../IndicatorDetail/type';

export type ScreenNavigationProp = NativeStackScreenProps<RootStackParamList>;

export type RootStackParamList = {
  Home: undefined;
  Indicator: IndicatorProps;
  IndicatorDetail: IndicatorDetailProps;
};
