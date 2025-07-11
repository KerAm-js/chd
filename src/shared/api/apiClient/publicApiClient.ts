import axios from 'axios';
import Config from 'react-native-config';
import {prepareApiError} from '../errors/prepareApiError';

export const publicApiClient = axios.create({
  baseURL: Config.API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

publicApiClient.interceptors.request.use(
  config => config,
  error => prepareApiError(error),
);

publicApiClient.interceptors.response.use(
  response => {
    const responseURL = response.request.responseURL as string;
    if (
      responseURL?.startsWith('http://188.0.167.98:9637/food-item/get-by-ids')
    ) {
      console.log(response.request);
    }
    return response.data;
  },
  error => prepareApiError(error),
);
