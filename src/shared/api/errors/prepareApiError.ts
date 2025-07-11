import { isAxiosError } from 'axios';
import { queryClient } from '../queryClient';
import { ApiError } from './types';
import { API_ERRORS } from './apiErrors';

export const prepareApiError = async (error: Error) => {
  let errorObj: ApiError = API_ERRORS.UNKNOWN;
  if (isAxiosError(error)) {
    console.log(error.response);
    console.log(error.request);
    console.log(error.response?.data);
    if (error.response) {
      const { status, data } = error.response;
      if (status === 401 || status === 403) {
        errorObj = API_ERRORS.SERVER;
      } else if (status === 500) {
        errorObj = API_ERRORS.SERVER;
      } else if (data.message) {
        errorObj = {
          status,
          type: 'SERVER_ERROR',
          title: error.response.data.message,
        };
      }
    } else if (error.request) {
      if (error.code === 'ECONNABORTED') {
        errorObj = API_ERRORS.NO_RESPONSE;
      } else if (error.code === 'ERR_NETWORK') {
        errorObj = API_ERRORS.NETWORK;
      } else {
        errorObj = API_ERRORS.NETWORK_UNKNOWN;
      }
    }
  }
  return Promise.reject(errorObj);
};
