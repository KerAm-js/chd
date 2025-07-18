import {useSafeAreaInsets} from 'react-native-safe-area-context';

export const useSafeAreaPaddings = () => {
  const {top, bottom} = useSafeAreaInsets();
  const paddingTop = top < 25 ? 25 : top;
  const paddingBottom = bottom < 15 ? 15 : bottom;

  return {
    paddingTop,
    paddingBottom,
  };
};
