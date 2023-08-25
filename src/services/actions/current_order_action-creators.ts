import { TOrderFeed } from "../../utils/types";
import { CLEAR_CURRENT_ORDER, GET_CURRENT_ORDER_REQUEST,
  GET_CURRENT_ORDER_REQUEST_FAILED,
  GET_CURRENT_ORDER_REQUEST_SUCCESS } from "./actions";

 
  
type TGetCurrentOrderRequest  = {
  readonly type: typeof GET_CURRENT_ORDER_REQUEST;
  };
  
export const getCurrentOrderRequest = ():TGetCurrentOrderRequest => ({ type: GET_CURRENT_ORDER_REQUEST});

type TGetCurrentOrderRequestFailed  = {
  readonly type: typeof GET_CURRENT_ORDER_REQUEST_FAILED;
  readonly payload: string;
  };
  
export const getCurrentOrderRequestFailed = (error: string):TGetCurrentOrderRequestFailed => ({ type: GET_CURRENT_ORDER_REQUEST_FAILED, payload: error});

type TGetCurrentOrderRequestSuccess = {
  readonly type: typeof GET_CURRENT_ORDER_REQUEST_SUCCESS;
  readonly payload: TOrderFeed & {readonly owner: string} | null;
  };
  
export const getCurrentOrderRequestSuccess = (data: TOrderFeed & {readonly owner: string}):TGetCurrentOrderRequestSuccess => ({ type: GET_CURRENT_ORDER_REQUEST_SUCCESS, payload: data});

type TSetClearCurrentOrder = {
  readonly type: typeof CLEAR_CURRENT_ORDER;
  };
  
export const setClearCurrentOrder = ():TSetClearCurrentOrder => ({ type: CLEAR_CURRENT_ORDER});


export type TCurrentOrderActions= TGetCurrentOrderRequest |
 TGetCurrentOrderRequestFailed |
 TGetCurrentOrderRequestSuccess|
 TSetClearCurrentOrder;