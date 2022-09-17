import {StyleSheet} from 'react-native';
import {colors} from '../../constants/colors';
import {spacings} from '../../constants/spacings';

export const styles = StyleSheet.create({
  container: {},
  subContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacings.s1,
  },
  title: {
    color: colors.neutral.neutral900,
    marginBottom: spacings.s1,
  },
  subtitle: {
    color: colors.primary,
  },
  boxIcons: {
    flexDirection: 'row',
  },
});
