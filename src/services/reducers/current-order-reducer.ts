import { TOrderFeed } from "../../utils/types";
import { CLEAR_CURRENT_ORDER, GET_CURRENT_ORDER_REQUEST, GET_CURRENT_ORDER_REQUEST_FAILED, GET_CURRENT_ORDER_REQUEST_SUCCESS } from "../actions/actions";
import { TCurrentOrderActions } from "../actions/current_order_action-creators";

type TInitialState = {
  orderData: TOrderFeed & {readonly owner: string} |null;
  getCurrentOrderRequest: boolean;
  getCurrentOrderRequestFailed: boolean;
  getCurrentOrderRequestSuccess: boolean;
  error: string | null;
};

export const initialState:TInitialState = {
  orderData: null,
  getCurrentOrderRequest: false,
  getCurrentOrderRequestFailed: false,
  getCurrentOrderRequestSuccess: false,
  error: null,
};

export const currenOrderReducer = (state = initialState, action:TCurrentOrderActions):TInitialState => {
  switch (action.type) {
    case GET_CURRENT_ORDER_REQUEST: {
      return {
        ...state,
        getCurrentOrderRequest: true,
        getCurrentOrderRequestFailed: false,
        getCurrentOrderRequestSuccess: false,
        error: null,
      }
    };

    case GET_CURRENT_ORDER_REQUEST_SUCCESS: {
      return {
        ...state,
        getCurrentOrderRequest: false,
        getCurrentOrderRequestFailed: false,
        getCurrentOrderRequestSuccess: true,
        orderData: action.payload,
      }
    };

    case GET_CURRENT_ORDER_REQUEST_FAILED: {
      return {
        ...state,
        getCurrentOrderRequest: false,
        getCurrentOrderRequestFailed: true,
        getCurrentOrderRequestSuccess: false,
        error: action.payload,
      }
    };
   
    case CLEAR_CURRENT_ORDER: {
      return {
        ...state,
        orderData: null,
      }
    }
    default:
      return state;
  }
};

export default currenOrderReducer;
