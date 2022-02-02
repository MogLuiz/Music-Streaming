// Hooks
import { useEffect, useReducer, useRef } from "react";

// Services
import axios, { AxiosRequestConfig } from "axios";

export enum RequestType {
  request = "request",
  success = "success",
  failure = "failure",
}

