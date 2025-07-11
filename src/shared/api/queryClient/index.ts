import {QueryClient} from '@tanstack/react-query';
import {Alert} from 'react-native';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 2, // Данные считаются актуальными 2 минуты
      gcTime: 1000 * 60 * 10, // Данные удаляются из кеша через 10 минут
      retry: false,
      refetchOnWindowFocus: false,
    },
    mutations: {
      retry: false,
      onError: error => {
        Alert.alert(error.title, error.message);
      },
    },
  },
});
