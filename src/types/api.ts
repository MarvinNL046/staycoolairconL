import { Request, Response } from 'express';
import { ParamsDictionary } from 'express-serve-static-core';
import { LocationContent } from './location';

export interface LocationQuery {
  city?: string;
  region?: string;
  population?: string;
  postalCodes?: string;
}

export interface ErrorMetadata {
  timestamp?: string;
  errorType?: string;
  attempts?: number;
  lastAttemptTime?: string;
}

export interface LocationError {
  error: string;
  details?: string;
  metadata?: ErrorMetadata;
}

export type LocationResponseBody = LocationContent | LocationError;

export type LocationRequest = Request<ParamsDictionary, LocationResponseBody, any, LocationQuery>;
export type LocationResponse = Response<LocationResponseBody>;

// Express route handler type
export type RouteHandler<TReq = Request, TRes = Response> = (
  req: TReq,
  res: TRes
) => Promise<any> | any;

// Helper type guard to check if response is an error
export function isLocationError(response: LocationResponseBody): response is LocationError {
  return 'error' in response;
}

// Helper type guard to check if response is location content
export function isLocationContent(response: LocationResponseBody): response is LocationContent {
  return 'city' in response && 'content' in response;
}
