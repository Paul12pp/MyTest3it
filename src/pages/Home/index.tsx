import React, {useEffect} from 'react';
import {
  ActivityIndicator,
  Platform,
  SafeAreaView,
  ScrollView,
  View,
} from 'react-native';
// import {styles} from './style';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../App/type';
import {styles as common} from '../../styles/common';
import CardIndicator from '../../components/CardIndicator';
import useIndicator from '../../hooks/dispatch/useIndicator';
import {Typography} from '../../components/Typography';
import {Indicator} from '../../redux/types/indicator';
import {usePermissions} from '../../hooks/Permission/usePermissions';
import Geolocation from 'react-native-geolocation-service';

interface Props extends NativeStackScreenProps<RootStackParamList, 'Home'> {}

const Home = ({navigation}: Props) => {
  const {getAll, indicatorData} = useIndicator();
  const {requestAndroidPermission} = usePermissions();
  const navigateToInfo = (item: [string, Indicator]) => {
    navigation.navigate('Indicator', {
      name: item[1].nombre,
      codigo: item[1].codigo,
    });
  };
  const navigateToDetail = (item: [string, Indicator]) => {
    navigation.navigate('IndicatorDetail', {
      name: item[1].nombre,
      codigo: item[1].codigo,
    });
  };
  const handleRequestAndroidPermission = async () => {
    if (Platform.OS === 'ios') {
      await Geolocation.requestAuthorization('whenInUse');
    } else {
      await requestAndroidPermission('android.permission.ACCESS_FINE_LOCATION');
    }
  };
  useEffect(() => {
    getAll();
    (async () => {
      await handleRequestAndroidPermission();
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <SafeAreaView style={common.container}>
      <ScrollView
        contentContainerStyle={common.scrollWrapper}
        showsVerticalScrollIndicator={false}>
        <ActivityIndicator
          testID={'loading-test'}
          animating={indicatorData.loading}
        />
        {indicatorData.error && <Typography>Ha ocurrido un error</Typography>}
        {indicatorData.data.length > 0 && (
          <View>
            {indicatorData.data.map((item, index) => {
              return (
                <CardIndicator
                  key={index}
                  item={item}
                  onPressInfo={() => navigateToDetail(item)}
                  onPress={() => navigateToInfo(item)}
                />
              );
            })}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
