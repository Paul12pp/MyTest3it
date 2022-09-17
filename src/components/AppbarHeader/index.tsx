import React from 'react';
import {styles} from './style';
import {AppbarHeaderProps} from './type';
import {Appbar} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as RootNavigation from '../../utils/navigationref/RootNavigation';
import {colors} from '../../constants/colors';

const AppbarHeader = ({title, type = 'default'}: AppbarHeaderProps) => {
  const _handleBack = () => {
    if (type === 'back') {
      RootNavigation.goBack();
    }
  };
  return (
    <Appbar.Header>
      <Icon
        style={styles.iconBack}
        color={colors.primary}
        size={24}
        testID={'icon-id'}
        name={type === 'back' ? 'arrow-back' : 'menu'}
        onPress={_handleBack}
      />
      <Appbar.Content
        testID={'content-id'}
        titleStyle={styles.title}
        title={title}
      />
    </Appbar.Header>
  );
};

export default AppbarHeader;
