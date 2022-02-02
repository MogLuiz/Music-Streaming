// Hooks
import { useEffect, useReducer, useRef } from "react";

// Services
import axios, { AxiosRequestConfig } from "axios";

export enum RequestType {
  request = "request",
  success = "success",
  failure = "failure",
}

export enum RequestStatus {
  init = "init",
  error = "error",
  fetched = "fetched",
  fetching = "fetching",
}

interface State<T> {
  status: RequestStatus;
  data?: T;
  error?: string;
}

interface Cache<T> {
  [url: string]: T;
}

type Action<T> =
  | { type: RequestType.request }
  | { type: RequestType.success; payload: T }
  | { type: RequestType.failure; payload: string };


function useFetch<T = unknown>(
    url: string,
    options?: AxiosRequestConfig
): State<T> {
    
}