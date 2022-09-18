import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import {ActivityIndicator, SafeAreaView, ScrollView, View} from 'react-native';
import {RootStackParamList} from '../App/type';
// import {styles} from './style';
import {styles as common} from '../../styles/common';
// import {Typography} from '../../components/Typography';
import CardValue from '../../components/CardValue';
import useIndicatorType from '../../hooks/dispatch/useIndicatorType';
import {Typography} from '../../components/Typography';

interface Props
  extends NativeStackScreenProps<RootStackParamList, 'Indicator'> {}

const Indicator = ({route}: Props) => {
  const {codigo} = route.params;
  const {get, indicatorTypeData} = useIndicatorType();
  useEffect(() => {
    get(codigo);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <SafeAreaView style={common.container}>
      <ScrollView
        contentContainerStyle={common.scrollWrapper}
        showsVerticalScrollIndicator={false}>
        {indicatorTypeData.loading && (
          <ActivityIndicator
            testID={'loading-test'}
            animating={indicatorTypeData.loading}
          />
        )}
        {indicatorTypeData.error && (
          <Typography>Ha ocurrido un error</Typography>
        )}
        {indicatorTypeData.serie.length > 0 && (
          <View testID={'list-data'}>
            {indicatorTypeData.serie.map((item, index) => {
              return <CardValue key={index} item={item} />;
            })}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Indicator;
