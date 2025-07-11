import axios from 'axios';
import Config from 'react-native-config';
import {getAuthToken} from '../token';
import {prepareApiError} from '../errors/prepareApiError';

export const securedApiClient = axios.create({
  baseURL: `${Config.API_URL}/secured`,
  headers: {
    'Content-Type': 'application/json',
  },
});

securedApiClient.interceptors.request.use(
  async config => {
    const token = await getAuthToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => prepareApiError(error),
);

securedApiClient.interceptors.response.use(
  response => response.data,
  error => prepareApiError(error),
);
