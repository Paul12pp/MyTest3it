import React from 'react';
import {View} from 'react-native';
import {SeparatorLine} from '../SeparatorLine';
import {Typography} from '../Typography';
import {styles} from './style';
import {CardValueProps} from './type';
import moment from 'moment';

const CardValue = ({item}: CardValueProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Typography style={styles.date} variant={{type: 'body1'}}>
          {moment(item.fecha).format('YYYY-MM-DD')}
        </Typography>
        <Typography style={styles.value} variant={{type: 'body2'}}>
          $ {item.valor}
        </Typography>
      </View>
      <SeparatorLine />
    </View>
  );
};

export default CardValue;
