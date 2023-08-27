import { WS_CLOSED_CONNECTION, WS_FAILED_CONNECTION, WS_GET_DATA, WS_SUCCESS_CONNECTION } from '../actions/actions';
import { wsReducer, initialState } from './ws-reducer';

describe('TEST WS REDUCER', () => {

  it('Test should return default initial state', () => {
    expect(wsReducer(undefined, {})).toEqual(initialState);
  });

  it('Test should handle "WS_SUCCESS_CONNECTION" action', () => {
    expect(wsReducer(initialState, { type: WS_SUCCESS_CONNECTION })).toEqual({
      ...initialState,
      wsConnected: true,
      error: null,
    });
  });

  it('Test should handle "WS_FAILED_CONNECTION" action', () => {
    expect(wsReducer(initialState, { type: WS_FAILED_CONNECTION, payload:'some error' })).toEqual({
      ...initialState,
      wsConnected: false,
      error: 'some error',
    });
  });

  it('Test should handle "WS_CLOSED_CONNECTION" action', () => {
    expect(wsReducer(initialState, { type: WS_CLOSED_CONNECTION })).toEqual({
      ...initialState,
      wsConnected: false,
      error: null,
    });
  });

  it('Test should handle "WS_GET_DATA" action', () => {
    const payloadWsGetMessage = {
      success: true,
      orders: [
        {
          _id: '63ec88e7936b17001be5df11',
          ingredients: [
            '60d3b41abdacab0026a733c7',
            '60d3b41abdacab0026a733c9',
            '60d3b41abdacab0026a733c9',
            '60d3b41abdacab0026a733d1',
            '60d3b41abdacab0026a733c7'
          ],
          status: 'done',
          name: 'Бессмертный фалленианский флюоресцентный бургер',
          createdAt: '2023-02-15T07:25:27.868Z',
          updatedAt: '2023-02-15T07:25:28.269Z',
          number: 40846
        },
        {
          _id: '63ec7f31936b17001be5defc',
          ingredients: ['60d3b41abdacab0026a733c6', '60d3b41abdacab0026a733c6'],
          status: 'done',
          name: 'Краторный бургер',
          createdAt: '2023-02-15T06:44:01.872Z',
          updatedAt: '2023-02-15T06:44:02.362Z',
          number: 40845
        },
        {
          _id: '63ec7ed7936b17001be5defa',
          ingredients: ['60d3b41abdacab0026a733c6', '60d3b41abdacab0026a733c6'],
          status: 'done',
          name: 'Краторный бургер',
          createdAt: '2023-02-15T06:42:31.280Z',
          updatedAt: '2023-02-15T06:42:31.647Z',
          number: 40844
        },
        {
          _id: '63ec7e7c936b17001be5def6',
          ingredients: [
            '60d3b41abdacab0026a733c7',
            '60d3b41abdacab0026a733c9',
            '60d3b41abdacab0026a733c7'
          ],
          status: 'done',
          name: 'Бессмертный флюоресцентный бургер',
          createdAt: '2023-02-15T06:41:00.579Z',
          updatedAt: '2023-02-15T06:41:00.997Z',
          number: 40843
        },
        {
          _id: '63ec7e57936b17001be5def1',
          ingredients: ['60d3b41abdacab0026a733c6', '60d3b41abdacab0026a733c6'],
          status: 'done',
          name: 'Краторный бургер',
          createdAt: '2023-02-15T06:40:23.936Z',
          updatedAt: '2023-02-15T06:40:24.347Z',
          number: 40842
        }
      ],
      total: 40755,
      totalToday: 106
    };
    expect(wsReducer(initialState, {
        type: WS_GET_DATA,
        payload: payloadWsGetMessage
      })
    ).toEqual({
      ...initialState,
      orders: payloadWsGetMessage.orders,
      totalOrders: payloadWsGetMessage.total,
      totalOrdersToday: payloadWsGetMessage.totalToday,
      wsConnected: false,
      error: null,
    });
  });
});