import React from 'react';
import {Pressable, Text} from 'react-native';
import styles from './style';
import {Props} from './types';

export const Typography = ({
  children = '',
  style = {},
  variant = {type: 'default'},
  bold = false,
  numberOfLines = 0,
  onPress,
  testID = 'typography-test',
}: Props) => {
  const typographyStyle = {
    ...styles[variant.type],
    ...(bold && styles.bold),
    ...style,
  };
  return onPress ? (
    <Pressable onPress={onPress}>
      <Text
        testID={testID}
        style={typographyStyle}
        numberOfLines={numberOfLines}>
        {children}
      </Text>
    </Pressable>
  ) : (
    <Text testID={testID} style={typographyStyle} numberOfLines={numberOfLines}>
      {children}
    </Text>
  );
};
