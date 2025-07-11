import {useNavigation} from '@react-navigation/native';
import {TabNavigationList} from '../tab-navigation';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';

export const useTabNavigation = () => {
  const navigation =
    useNavigation<BottomTabNavigationProp<TabNavigationList>>();
  return navigation;
};
