import {AxiosRequestConfig} from 'axios';

declare module 'axios' {
  interface AxiosInstance {
    get<T = any>(url: string, config?: AxiosRequestConfig): Promise<T>;
    post<B = any, T = any>(
      url: string,
      data?: B,
      config?: AxiosRequestConfig,
    ): Promise<T>;
    patch<B = any, T = any>(
      url: string,
      data?: B,
      config?: AxiosRequestConfig,
    ): Promise<T>;
  }
}
