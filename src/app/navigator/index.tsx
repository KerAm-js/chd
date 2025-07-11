import { RootNavigation, RootNavigationList } from '@/shared/navigation';
import { NavigationContainer } from '@react-navigation/native';
import { TabNavigator } from './tab-navigator';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator<RootNavigationList>();

export const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          component={TabNavigator}
          name={RootNavigation.TABS}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
