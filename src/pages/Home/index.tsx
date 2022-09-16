import * as React from 'react';
import {Text, View} from 'react-native';
import {styles} from './style';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParamList} from '../App/type';

interface Props extends StackScreenProps<RootStackParamList, 'Home'> {}

const Home = ({}: Props) => {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
    </View>
  );
};

export default Home;
