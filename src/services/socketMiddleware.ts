import type { Middleware, MiddlewareAPI } from 'redux';
import { TWSActions, setClosedWsConnection } from './actions/ws-actions-creators';
import { AppDispatch, RootState, TWS } from '../utils/types';

// TODO
// 1) Использовать Action креэйторы, а не объект диспатча

export const socketMiddleware = (wsActions: TWS): Middleware => {

  return ((store: MiddlewareAPI<AppDispatch, RootState>) => {
      let socket: WebSocket | null = null;

  return next => (action: TWSActions) => {
    const { dispatch } = store;
    const { type } = action;
    const { wsInit, onOpen, onClose, onFail, onGetData } = wsActions;
    if (type === wsInit) {
      socket = new WebSocket(action.payload);
    }

    if (socket) {
      socket.onopen = (event) => {

        dispatch({ type: onOpen, payload: event });
      }

      socket.onerror = (event) => {
        dispatch({ type: onFail, payload: event });
      }

      socket.onmessage = (event) => {
        const { data } = event;
        const parsedData = JSON.parse(data);
        dispatch({ type: onGetData, payload: parsedData });
      }

      socket.onclose = () => {
          dispatch(setClosedWsConnection('закрыть'));
      }
    }

    next(action);
  };

}) as Middleware;

}