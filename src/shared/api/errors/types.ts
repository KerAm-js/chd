export type ApiError = {
  message?: string;
  title: string;
  status?: number;
  type: 'SERVER_ERROR' | 'NETWORK_ERROR' | 'NETWORK_UNKNOWN_ERROR' | 'UNKNOWN_ERROR' | 'NO_RESPONSE_ERROR'
}