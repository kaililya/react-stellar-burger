import {
  GET_INDGREDIETNS_REQUEST,
  GET_INDGREDIETNS_REQUEST_FAILED,
  GET_INDGREDIETNS_REQUEST_SUCCESS,
  CREATE_ORDER_REQUEST,
  ORDER_REQUEST_FAILED,
  ORDER_REQUEST_SUCCESS,
  } from '../actions/actions';

import { TApiActionCreators } from '../actions/api-action-creators';

type TinitialState = {
  indgredientsRequestPending: boolean,
  indgredientsRequestFulfilled: boolean,
  indgredientsRequestRejected: boolean,
  orderRequestPending: boolean,
  orderRequestSuccess: boolean,
  orderRequestRejected: boolean,
  error: null| string,
};

export const initialState:TinitialState = {
  indgredientsRequestPending: false,
  indgredientsRequestFulfilled: false,
  indgredientsRequestRejected: false,
  orderRequestPending: false,
  orderRequestSuccess: false,
  orderRequestRejected: false,
  error: null,
};

export const apiStateReducer = (state = initialState, action:TApiActionCreators):TinitialState => {
  switch (action.type) {

    case CREATE_ORDER_REQUEST: {
      return {
        ...state,
        orderRequestPending: true,
        orderRequestSuccess: false,
        orderRequestRejected: false,
        error: null,
      }
    };

    case ORDER_REQUEST_SUCCESS: {
      return {
        ...state,
        orderRequestPending: false,
        orderRequestSuccess: true,
        orderRequestRejected: false,
        error: null,
      }
    };

    case ORDER_REQUEST_FAILED: {
      return {
        ...state,
        orderRequestPending: false,
        orderRequestSuccess: false,
        orderRequestRejected: true,
        error: action.payload,
      }
    };

    case GET_INDGREDIETNS_REQUEST: {
      return {
        ...state,
        indgredientsRequestPending: true,
        indgredientsRequestRejected: false,
        indgredientsRequestFulfilled: false,
        error: null,
      }
    }

    case GET_INDGREDIETNS_REQUEST_SUCCESS: {
      return {
        ...state,
        indgredientsRequestPending: false,
        indgredientsRequestFulfilled: true,
        indgredientsRequestRejected: false,
        error: null,
      }
    }

    case GET_INDGREDIETNS_REQUEST_FAILED: {
      return {
        ...state,
        indgredientsRequestPending: false,
        indgredientsRequestFulfilled: false,
        indgredientsRequestRejected: true,
        error: action.payload,
      }
    }

    default:
      return state
  }
}
