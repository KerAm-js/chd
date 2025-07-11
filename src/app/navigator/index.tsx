import { RootNavigation, RootNavigationList } from '@/shared/navigation';
import { NavigationContainer } from '@react-navigation/native';
import { TabNavigator } from './tab-navigator';
import { RegistrPage } from '@/pages/registr';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FilterPage } from '@/pages/filter';
import { LoginPage } from '@/pages/login';

const Stack = createNativeStackNavigator<RootNavigationList>();

export const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={RootNavigation.TABS}>
        <Stack.Screen
          component={TabNavigator}
          name={RootNavigation.TABS}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          component={LoginPage}
          name={RootNavigation.LOGIN}
          options={{ title: 'Вход' }}
        />
        <Stack.Screen
          component={FilterPage}
          name={RootNavigation.FILTER}
          options={{ title: 'Фильтр' }}
        />
        <Stack.Screen
          component={RegistrPage}
          name={RootNavigation.REGISTR}
          options={{ title: 'Регистрация' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
