import { WS_SUCCESS_CONNECTION,
  WS_CLOSED_CONNECTION,
  // WB_REQUEST_CONNECTION,
  WS_FAILED_CONNECTION,
  WS_GET_DATA } from "../actions/actions";

import { TOrderFeed } from "../../utils/types";
import { TWSActions } from "../actions/ws-actions-creators";
  
type TInitialState = {
  wsConnected: boolean;
  orders: TOrderFeed[] | [];
  userOrders: [];
  totalOrders: number | null;
  totalOrdersToday: number | null;
  error?: Event|null;
};

export const initialState: TInitialState = {
  wsConnected: false,
  orders: [],
  userOrders: [],
  totalOrders: null,
  totalOrdersToday: null,
  error: null,
};

export const wsReducer = (state = initialState, action:TWSActions):TInitialState => {
  switch (action.type) {
    case WS_SUCCESS_CONNECTION: {
      return {
        ...state,
        wsConnected: true,
        error: null,
      }
    };

    case WS_CLOSED_CONNECTION: {
      return {
        ...state,
        wsConnected: false,
        error: null,
      }
    };

    case WS_FAILED_CONNECTION: {
      return {
        ...state,
        wsConnected: false,
        error: action.payload,
      }
    };

    case WS_GET_DATA: {
      return {
        ...state,
        wsConnected: false,
        error: null,
        totalOrdersToday: action.payload.totalToday,
        orders: action.payload.orders,
        totalOrders: action.payload.total,
      }
    };
   
    default:
      return state;
  }
}
