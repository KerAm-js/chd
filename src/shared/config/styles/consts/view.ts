import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('screen');

export const SCREEN_WIDTH = width;
export const SCREEN_HEIGHT = height;
export const SCREEN_PADDING_HORIZONTAL = width > 390 ? 18 : 15;
export const SCREEN_PADDING_TOP = 25;