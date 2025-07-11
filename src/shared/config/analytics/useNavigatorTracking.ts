import {RootNavigationList, TabNavigationList} from '@/shared/navigation';
import {NavigationContainerRef} from '@react-navigation/native';
import {useRef} from 'react';
import {analytics} from './instance';

export const useNavigatorTracking = () => {
  const routeNameRef = useRef<string | undefined>(undefined);
  const navigationRef = useRef<NavigationContainerRef<
    RootNavigationList & TabNavigationList
  > | null>(null);

  const onReady = () => {
    if (navigationRef.current) {
      routeNameRef.current = navigationRef.current.getCurrentRoute()?.name;
    }
  };

  const onStateChange = async () => {
    if (navigationRef.current) {
      const previousRouteName = routeNameRef.current;
      const currentRouteName = navigationRef.current.getCurrentRoute()?.name;

      if (previousRouteName !== currentRouteName) {
        await analytics.logScreenView({
          screen_name: currentRouteName,
          screen_class: currentRouteName,
        });
      }
      routeNameRef.current = currentRouteName;
    }
  };

  return {navigationRef, onStateChange, onReady};
};
