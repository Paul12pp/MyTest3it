import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {colors} from '../../constants/colors';
import {SeparatorLine} from '../SeparatorLine';
import {Typography} from '../Typography';
import {styles} from './style';
import {CardIndicatorProps} from './type';

const CardIndicator = ({item, onPress, onPressInfo}: CardIndicatorProps) => {
  // console.log(item);
  return (
    <TouchableOpacity
      testID={'card-test'}
      style={styles.container}
      onPress={onPress}>
      <View style={styles.subContainer}>
        <View>
          <Typography style={styles.title} variant={{type: 'body1'}}>
            {item[1].nombre}
          </Typography>
          <Typography style={styles.subtitle} variant={{type: 'body2'}}>
            {item[1].unidad_medida}
          </Typography>
        </View>
        <View style={styles.boxIcons}>
          <Icon
            name={'information-circle-outline'}
            size={24}
            testID={'info-icon'}
            color={colors.primary}
            onPress={onPressInfo}
          />
          <Icon
            name={'chevron-forward-outline'}
            size={24}
            testID={'arrow-icon'}
            color={colors.neutral.neutral400}
          />
        </View>
      </View>
      <SeparatorLine testID={'separator-line'} />
    </TouchableOpacity>
  );
};

export default CardIndicator;
