import {ApiError} from './types';

type Key = 'UNKNOWN' | 'SERVER' | 'NETWORK' | 'NETWORK_UNKNOWN' | 'NO_RESPONSE';
type TApiErrorsObj = {[key in Key]: ApiError};

export const API_ERRORS: TApiErrorsObj = {
  SERVER: {
    status: 500,
    type: 'SERVER_ERROR',
    title: 'Ошибка системы',
    message: 'Попробуйте перезапустить приложение и повторить попытку или обратитесь в поддержку',
  },
  NETWORK: {
    type: 'NETWORK_ERROR',
    title: 'Ошибка сети',
    message: 'Проверьте соединение с интернетом',
  },
  NETWORK_UNKNOWN: {
    type: 'NETWORK_UNKNOWN_ERROR',
    title: 'Ошибка сети',
    message: 'Неизвестная ошибка',
  },
  NO_RESPONSE: {
    type: 'NO_RESPONSE_ERROR',
    title: 'Нет ответа',
    message: 'Возможно, ведутся технические работы',
  },
  UNKNOWN: {
    type: 'UNKNOWN_ERROR',
    title: 'Неизвестная ошибка',
    message: 'Попробуйте перезапустить приложение и повторить попытку или обратитесь в поддержку',
  },
};
