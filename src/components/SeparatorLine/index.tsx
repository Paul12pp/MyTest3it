import React from 'react';
import {View} from 'react-native';
import {colors} from '../../constants/colors';
import {styles} from './style';
import {Props} from './type';

export const SeparatorLine = ({
  color = colors.neutral.neutral100,
  testID,
  customStyle = {},
}: Props) => {
  return (
    <View
      style={{
        ...styles.line,
        borderColor: color,
        ...customStyle,
      }}
      testID={testID}
    />
  );
};
