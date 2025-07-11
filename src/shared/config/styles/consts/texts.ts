import {TextStyle} from 'react-native';

type TKey =
  | 'titleBig'
  | 'title'
  | 'standart'
  | 'standartSemibold'
  | 'standartBold'
  | 'small'
  | 'smallSemibold'
  | 'smallBold'
  | 'ultraSmall'
  | 'ultraSmallBold';

export const TEXT_STYLES: {
  [key in TKey]: Required<
    Pick<
      TextStyle,
      'fontSize' | 'fontFamily' | 'lineHeight' | 'letterSpacing'
    >
  >;
} = {
  titleBig: {
    fontSize: 25,
    fontFamily: 'Gilroy-Bold',
    lineHeight: 31,
    letterSpacing: 0.3,
  },
  title: {
    fontSize: 21,
    fontFamily: 'Gilroy-Bold',
    lineHeight: 26,
    letterSpacing: 0.3,
  },
  standart: {
    fontSize: 17,
    fontFamily: 'Gilroy-Medium',
    lineHeight: 21,
    letterSpacing: 0.4,
  },
  standartSemibold: {
    fontSize: 17,
    fontFamily: 'Gilroy-Semibold',
    lineHeight: 21,
    letterSpacing: 0.4,
  },
  standartBold: {
    fontSize: 17,
    fontFamily: 'Gilroy-Bold',
    lineHeight: 21,
    letterSpacing: 0.3,
  },
  small: {
    fontSize: 15,
    fontFamily: 'Gilroy-Medium',
    lineHeight: 19,
    letterSpacing: 0.3,
  },
  smallSemibold: {
    fontSize: 15,
    fontFamily: 'Gilroy-Semibold',
    lineHeight: 19,
    letterSpacing: 0.3,
  },
  smallBold: {
    fontSize: 15,
    fontFamily: 'Gilroy-Bold',
    lineHeight: 19,
    letterSpacing: 0.3,
  },
  ultraSmall: {
    fontSize: 13,
    fontFamily: 'Gilroy-Medium',
    lineHeight: 15,
    letterSpacing: 0.3,
  },
  ultraSmallBold: {
    fontSize: 13,
    fontFamily: 'Gilroy-Bold',
    lineHeight: 15,
    letterSpacing: 0.3,
  }
};
