import {StyleSheet} from 'react-native';
import {colors} from '../../constants/colors';
import {borderRadius, spacings} from '../../constants/spacings';

export const styles = StyleSheet.create({
  container: {},
  boxTitle: {
    flexDirection: 'row',
  },
  value: {
    // backgroundColor: 'red',
    textAlign: 'center',
    marginBottom: spacings.s4,
    color: colors.primary,
  },
  title: {
    marginRight: spacings.s1m,
    marginBottom: spacings.s2,
  },
  subtitle: {
    padding: spacings.s0,
    borderWidth: 1,
    borderRadius: borderRadius.r1,
    marginBottom: spacings.s1,
  },
});
