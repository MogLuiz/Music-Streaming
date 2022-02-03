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

interface IState<T> {
  status: RequestStatus;
  data?: T;
  error?: string;
}

interface ICache<T> {
  [url: string]: T;
}

type Action<T> =
  | { type: RequestType.request }
  | { type: RequestType.success; payload: T }
  | { type: RequestType.failure; payload: string };

function useFetch<T = unknown>(
  url: string,
  options?: AxiosRequestConfig
): IState<T> {
  const cache = useRef<ICache<T>>({});
  const cancelRequest = useRef<boolean>(false);

  const initialState: IState<T> = {
    status: RequestStatus.init,
    data: undefined,
    error: undefined,
  };

  const fetchReducer = (state: IState<T>, action: Action<T>): IState<T> => {
    switch (action.type) {
      case RequestType.request:
        return {
          ...initialState,
          status: RequestStatus.fetching,
        };

      case RequestType.success:
        return {
          ...initialState,
          data: action.payload,
          status: RequestStatus.fetched,
        };

      case RequestType.failure:
        return {
          ...initialState,
          error: action.payload,
          status: RequestStatus.error,
        };

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(fetchReducer, initialState);

  useEffect(() => {
    if (!url) return;

    const fetchData = async () => {
      dispatch({ type: RequestType.request });

      if (cache.current[url]) {
        dispatch({ type: RequestType.success, payload: cache.current[url] });
      } else {
        try {
          const response = await axios(url, options);
          cache.current[url] = response.data;
          if (cancelRequest) return;

          dispatch({ type: RequestType.success, payload: response.data });
        } catch (error) {
          if (cancelRequest) return;
        }
      }
    };
    fetchData();
    return () => {
      cancelRequest.current = true;
    };
  }, [options, url]);
}
