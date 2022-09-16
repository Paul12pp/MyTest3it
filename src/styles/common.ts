import {StyleSheet} from 'react-native';
import {colors} from '../constants/colors';
import {spacings} from '../constants/spacings';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  scrollWrapper: {
    flexGrow: 1,
    padding: spacings.s2,
  },
});
