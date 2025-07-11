import { ApiError } from "../errors/types";

declare module '@tanstack/react-query' {
  interface Register {
    defaultError: ApiError;
  }
}