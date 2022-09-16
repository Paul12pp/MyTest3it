// import {StackScreenProps} from '@react-navigation/stack';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type ScreenNavigationProp = NativeStackScreenProps<RootStackParamList>;

export type RootStackParamList = {
  Home: undefined;
};
