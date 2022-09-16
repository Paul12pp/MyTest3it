import * as React from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import {styles} from './style';
// import {StackScreenProps} from '@react-navigation/stack';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../App/type';
import {styles as common} from '../../styles/common';

interface Props extends NativeStackScreenProps<RootStackParamList, 'Home'> {}

const Home = ({}: Props) => {
  return (
    <SafeAreaView style={common.container}>
      <ScrollView
        contentContainerStyle={common.scrollWrapper}
        showsVerticalScrollIndicator={false}>
        <Text>Home</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
