import { RootNavigation, RootNavigationList } from '@/shared/navigation';
import { NavigationContainer } from '@react-navigation/native';
// import { TabNavigator } from './tab-navigator';
// import { LoginPage } from '@/pages/login';
import { RegistrPage } from '@/pages/registr';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FilterPage } from '@/pages/filter';
import { LoginPage } from '@/pages/login';
import { SignupPage } from '@/pages/signup';

const Stack = createNativeStackNavigator<RootNavigationList>();

export const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={RootNavigation.TABS}>
        <Stack.Screen
          component={RegistrPage}
          name={RootNavigation.REGISTR}
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
          component={SignupPage}
          name={RootNavigation.SINGUP}
          options={{ title: 'Регистрация' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
