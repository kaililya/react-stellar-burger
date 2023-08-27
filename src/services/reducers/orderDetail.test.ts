import { newOrderFailed, newOrderRequested } from '../actions/api-action-creators';
import { InitialStateOrderDetail, OrderRuducer } from './orderDetail'

describe('TEST DATA REDUCER', () =>  {
  it('Test should return default initial state', () => {
    // @ts-ignore
    expect(OrderRuducer(undefined, {})).toEqual(InitialStateOrderDetail)
  });

  it('Test should handle "newOrderFailed" action', () => {
    expect(OrderRuducer(InitialStateOrderDetail, newOrderFailed('some error'))).toEqual({
      ...InitialStateOrderDetail,
      orderRequestFailed: true,
      orderRequestSent: false,
      errorMessage: 'some error',
    });
  });

  it('Test should handle "newOrderRequested" action', () => {
    expect(OrderRuducer(InitialStateOrderDetail, newOrderRequested())).toEqual({
      ...InitialStateOrderDetail,
      orderRequestSent: true,
    });
  });


});

