import { batch } from 'react-redux';
import { newOrderFailed, newOrderPlaced, newOrderRequested } from '../actions/api-action-creators';
import { setIngredients } from '../actions/data-action-creators';
import { postOrder } from '../../utils/api/api';
import { setAcceptedOrder } from '../actions/current-action-creators';


export function makeOrderThunk(ids) {
  return function(dispatch) {
    dispatch(newOrderRequested());
    postOrder(ids)
    .then(({ success, name, order: { number } }) => {
      if (success) {
        batch(() => {
          dispatch(newOrderPlaced());
          dispatch(setAcceptedOrder({ name, number }));

      })} else {
        throw new Error({ httpCode: 500, message: 'Неизвестная ошибка сервера' });
      }  
    })
    .catch(({ httpCode, message }) => {
      const msg = httpCode ? message : 'Не удалось связаться с сервером';
      dispatch(newOrderFailed(msg));
    })
  }
}
