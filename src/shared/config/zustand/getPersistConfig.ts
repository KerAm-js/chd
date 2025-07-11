import AsyncStorage from '@react-native-async-storage/async-storage';
import {PersistOptions} from 'zustand/middleware';

type GetPeristConfig = (name: string) => PersistOptions<any, any>;

const store = {};

export const getZustandPersistConfig: GetPeristConfig = name => ({
  name,
  storage: {
    getItem: async key => {
      const value = await AsyncStorage.getItem(key);
      return value ? JSON.parse(value) : null;
    },
    setItem: async (key, value) => {
      return await AsyncStorage.setItem(key, JSON.stringify(value));
    },
    removeItem: async key => {
      return await AsyncStorage.removeItem(key);
    },
  },
});
