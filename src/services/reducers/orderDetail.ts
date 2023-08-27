import {CREATE_ORDER_REQUEST, ORDER_REQUEST_FAILED, ORDER_REQUEST_SUCCESS} from '../actions/actions'
export const InitialStateOrderDetail = {
  orderData: null,
  orderRequestSent: false,
  orderRequestSuccess: false,
  orderRequestFailed: false,
  errorMessage: ''
}
// тут я типизиру как any так как сам reducer не нужен
// но если я его коменчу, то все ломается (убираю из кода)
// я уберу его после обучения, уж сильно устал и нет сил
export const OrderRuducer = (state = InitialStateOrderDetail, action:any):any => {
  switch (action.type) {
    case ORDER_REQUEST_FAILED: {
      return {
        ...state,
        orderRequestFailed: true,
        orderRequestSent: false,
        errorMessage: action.payload
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