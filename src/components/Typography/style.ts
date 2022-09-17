import {StyleSheet} from 'react-native';
import {fontSizes} from '../../constants/fontSizes';
import {letterSpacing} from '../../constants/letterSpacing';
import {lineHeight} from '../../constants/lineHeight';

export default StyleSheet.create({
  default: {
    fontSize: fontSizes.default,
  },
  small: {
    fontSize: fontSizes.small,
  },
  vlarge: {
    fontSize: fontSizes.vlarge,
  },
  vextralarge: {
    fontSize: fontSizes.vextralarge,
  },
  vmextralarge: {
    fontSize: fontSizes.vmextralarge,
  },
  extralarge: {
    fontSize: fontSizes.extralarge,
  },
  large: {
    fontSize: fontSizes.large,
  },
  regular: {
    fontSize: fontSizes.regular,
  },
  medium: {
    fontSize: fontSizes.medium,
  },
  vsmall: {
    fontSize: fontSizes.vsmall,
  },
  vmsmall: {
    fontSize: fontSizes.vmsmall,
  },
  vmmsmall: {
    fontSize: fontSizes.vmmsmall,
  },
  vvsmall: {
    fontSize: fontSizes.vvsmall,
  },
  bold: {
    fontWeight: '700',
  },
  h6: {
    fontSize: fontSizes.regular,
    fontWeight: '700',
    lineHeight: lineHeight.h6,
    letterSpacing: letterSpacing.h6,
  },
  h5: {
    fontSize: fontSizes.default,
    fontWeight: '700',
    lineHeight: lineHeight.h5,
    letterSpacing: letterSpacing.h5,
  },
  h4: {
    fontSize: fontSizes.medium,
    fontWeight: '700',
    lineHeight: lineHeight.h4,
    letterSpacing: letterSpacing.h4,
  },
  body1: {
    fontSize: fontSizes.small,
    lineHeight: lineHeight.body.body1,
    letterSpacing: letterSpacing.body.body1,
  },
  body2: {
    fontSize: fontSizes.vsmall,
    lineHeight: lineHeight.body.body2,
    letterSpacing: letterSpacing.body.body2,
  },
  bodyP1: {
    fontSize: fontSizes.small,
    lineHeight: lineHeight.linkTextBig,
    letterSpacing: letterSpacing.linkTextSmall,
  },
  bodyP2: {
    fontSize: fontSizes.vsmall,
    lineHeight: lineHeight.body.p2,
    letterSpacing: letterSpacing.linkTextSmall,
  },
  subtitleS1: {
    lineHeight: lineHeight.subtitle.subtitle1,
    fontSize: fontSizes.small,
    fontWeight: '700',
    letterSpacing: letterSpacing.linkTextSmall,
  },
  subtitleS2: {
    lineHeight: lineHeight.subtitle.subtitle2,
    fontSize: fontSizes.vsmall,
    fontWeight: '700',
    letterSpacing: letterSpacing.subtitle.subtitle2,
  },
  bodyLinkMedium: {
    fontSize: fontSizes.vsmall,
    lineHeight: lineHeight.bodyLinkMedium,
    letterSpacing: letterSpacing.bodyLinkMedium,
  },
  overline: {
    letterSpacing: letterSpacing.overline,
    fontSize: fontSizes.vmmsmall,
    fontWeight: '700',
  },
  caption: {
    fontSize: fontSizes.vmsmall,
    lineHeight: lineHeight.caption,
    letterSpacing: letterSpacing.caption,
  },
  subcaption: {
    fontSize: fontSizes.vmmsmall,
    lineHeight: lineHeight.caption,
    letterSpacing: letterSpacing.caption,
  },
  subpcaption: {
    fontSize: fontSizes.vvmmsmall,
    lineHeight: lineHeight.subcaption,
    letterSpacing: letterSpacing.subcaption,
  },
});
