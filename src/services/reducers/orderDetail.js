import {CREATE_ORDER_REQUEST, ORDER_REQUEST_FAILED, ORDER_REQUEST_SUCCESS} from '../actions/actions'
// лучше разбить редьюсеры для наборов наддных и для текущего (current ордер, инишиал дата) и ветка api
const InitialStateOrderDetail = {
  orderData: null,
  orderRequestSent: false,
  orderRequestSuccess: false,
  orderRequestFailed: false,
  errorMessage: ''
}

export const OrderRuducer = (state = InitialStateOrderDetail, action) => {
  switch (action.type) {
    case ORDER_REQUEST_FAILED: {
      return {
        ...state,
        orderRequestFailed: true,
        orderRequestSent: false,
        errorMessage: action
      }
    }

    // case ORDER_REQUEST_SUCCESS: { ORDER_REQUEST_SUCCESSимя этого экшена юзается в другом редьесере
    //   return {
    //     ...state,
    //     orderRequestSuccess: true,
    //     orderRequestSent: false,
    //     orderData: action.payload
    //   }
    // }

    case CREATE_ORDER_REQUEST: {
      return {
        ...state,
        orderRequestSent: true,
      }
    }
    
    default:
      return state;
  }
}