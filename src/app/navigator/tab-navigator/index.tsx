import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabNavigation, TabNavigationList } from '@/shared/navigation';
import { HomePage } from '@/pages/tabs/home';
import { ProfilePage } from '@/pages/tabs/profile';

const Tab = createBottomTabNavigator<TabNavigationList>();

export const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        component={HomePage}
        name={TabNavigation.HOME}
        options={{
          title: 'Главная',
        }}
      />
      <Tab.Screen
        name={TabNavigation.PROFILE}
        component={ProfilePage}
        options={{
          title: 'Профиль',
        }}
      />
    </Tab.Navigator>
  );
};
