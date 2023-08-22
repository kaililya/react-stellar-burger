import { WS_SUCCESS_CONNECTION,
  WS_CLOSED_CONNECTION,
  WS_FAILED_CONNECTION,
  WS_GET_DATA,
  WS_REQUEST_CONNECTION } from "./actions";

import {TWSMessage} from '../../utils/types';

type TSetRequestedWsConnection = {
  readonly type: typeof WS_REQUEST_CONNECTION;
  readonly payload: string;
};

export const setRequestedWsConnection = (event:string):TSetRequestedWsConnection => ({ type: WS_REQUEST_CONNECTION, payload: event });

type TSetSuccesseddWsConnection = {
  readonly type: typeof WS_SUCCESS_CONNECTION;
  readonly payload: Event;
};

export const setSuccessedWsConnection = (event:Event):TSetSuccesseddWsConnection => ({ type: WS_SUCCESS_CONNECTION, payload: event });

type TSetFailedWsConnection = {
  readonly type: typeof WS_FAILED_CONNECTION;
  readonly payload: Event;
};

export const setFailedWsConnection = (event:Event):TSetFailedWsConnection => ({ type: WS_FAILED_CONNECTION, payload: event });

type TSetClosedWsConnection = {
  readonly type: typeof WS_CLOSED_CONNECTION;
  readonly payload: string;
};

export const setClosedWsConnection = (event:string):TSetClosedWsConnection => ({ type: WS_CLOSED_CONNECTION, payload: event });

type TSetGottenDataWsConnection = {
  readonly type: typeof WS_GET_DATA;
  readonly payload: TWSMessage;
};

export const setGottenDataWsConnection = (data:TWSMessage):TSetGottenDataWsConnection => ({ type: WS_GET_DATA, payload:data });

export type TWSActions = |
TSetRequestedWsConnection |
TSetSuccesseddWsConnection |
TSetFailedWsConnection |
TSetClosedWsConnection |
TSetGottenDataWsConnection;
