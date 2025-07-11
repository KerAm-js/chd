import { RootNavigationList } from '../root-navigation';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export const useRootNavigation = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootNavigationList>>();
  return navigation;
};
