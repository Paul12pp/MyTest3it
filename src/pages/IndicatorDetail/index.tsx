import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import {ActivityIndicator, SafeAreaView, ScrollView, View} from 'react-native';
import {RootStackParamList} from '../App/type';
import {styles} from './style';
import {styles as common} from '../../styles/common';
// import {Typography} from '../../components/Typography';
import useIndicatorType from '../../hooks/dispatch/useIndicatorType';
import {Typography} from '../../components/Typography';
import moment from 'moment';

interface Props
  extends NativeStackScreenProps<RootStackParamList, 'IndicatorDetail'> {}

const IndicatorDetail = ({route}: Props) => {
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
        {/* <Typography>{JSON.stringify(indicatorTypeData.serie)}</Typography> */}
        {indicatorTypeData.loading && (
          <ActivityIndicator animating={indicatorTypeData.loading} />
        )}
        {indicatorTypeData.error && (
          <Typography>Ha ocurrido un error</Typography>
        )}
        {!indicatorTypeData.loading && (
          <>
            <Typography variant={{type: 'large'}} style={styles.value}>
              $ {indicatorTypeData.serie[0].valor}
            </Typography>
            <View style={styles.boxTitle}>
              <View>
                <Typography variant={{type: 'body1'}} style={styles.title}>
                  Nombre
                </Typography>
                <Typography variant={{type: 'body1'}} style={styles.title}>
                  Fecha
                </Typography>
                <Typography variant={{type: 'body1'}} style={styles.title}>
                  Unidad de medida
                </Typography>
              </View>
              <View>
                <Typography style={styles.subtitle} variant={{type: 'body2'}}>
                  {indicatorTypeData.nombre}
                </Typography>
                <Typography style={styles.subtitle} variant={{type: 'body2'}}>
                  {moment(indicatorTypeData.serie[0].fecha).format(
                    'YYYY-MM-DD',
                  )}
                </Typography>
                <Typography style={styles.subtitle} variant={{type: 'body2'}}>
                  {indicatorTypeData.unidad_medida}
                </Typography>
              </View>
            </View>
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default IndicatorDetail;
