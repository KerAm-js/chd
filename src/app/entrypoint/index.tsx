import { SafeAreaProvider } from 'react-native-safe-area-context';
import { RootNavigator } from '../navigator';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@/shared/api';
// import {KeyboardProvider} from 'react-native-keyboard-controller';

export const EntryPoint = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider>
        <RootNavigator />
      </SafeAreaProvider>
    </QueryClientProvider>
  );
};
