import { getCurrentOrderRequest, getCurrentOrderRequestFailed, getCurrentOrderRequestSuccess, setClearCurrentOrder } from '../actions/current_order_action-creators';
import { initialState, currenOrderReducer } from './current-order-reducer';

describe('TEST CURRENT ORDER REDUCER', () =>  {

  it('Test should return default initial state', () => {
    // @ts-ignore
    expect(currenOrderReducer(undefined, {})).toEqual(initialState)
  });

  it('Test should handle "getCurrentOrderRequest" action', () => {
    expect(currenOrderReducer(initialState, getCurrentOrderRequest())).toEqual({
      ...initialState,
      getCurrentOrderRequest: true,
      getCurrentOrderRequestFailed: false,
      getCurrentOrderRequestSuccess: false,
      error: null,
    });
  });

  it('Test should handle "setClearCurrentOrder" action', () => {
    expect(currenOrderReducer(initialState, setClearCurrentOrder())).toEqual({
      ...initialState,
      orderData: null,
    });
  });

  it('Test should handle "getCurrentOrderRequestFailed" action', () => {
    expect(currenOrderReducer(initialState, getCurrentOrderRequestFailed('some error'))).toEqual({
      ...initialState,
      getCurrentOrderRequest: false,
      getCurrentOrderRequestFailed: true,
      getCurrentOrderRequestSuccess: false,
      error:'some error',
    });
  });  

  it('Test should handle "getCurrentOrderRequestSuccess" action', () => {
    const payload = {
      "_id": "64e4b55b82e277001bfaa69f",
      "ingredients": [
          "643d69a5c3f7b9001cfa0941",
          "643d69a5c3f7b9001cfa093c"
      ],
      "owner": "64cab1ae82e277001bfa6801",
      "status": "done",
      "name": "Био-марсианский краторный бургер",
      "createdAt": "2023-08-22T13:17:15.604Z",
      "updatedAt": "2023-08-22T13:17:15.772Z",
      "number": 17361,
      "__v": 0
  }
    expect(currenOrderReducer(initialState, getCurrentOrderRequestSuccess(payload))).toEqual({
      ...initialState,
      getCurrentOrderRequest: false,
      getCurrentOrderRequestFailed: false,
      getCurrentOrderRequestSuccess: true,
      orderData: payload,
    });
  });  
});