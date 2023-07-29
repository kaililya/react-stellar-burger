import { batch } from 'react-redux';
import { fetchIngredients } from '../../utils/api/api'
import { indgredientsRequested, ingredientsFailed, ingredientsReceived } from '../actions/api-action-creators';

import { setIngredients } from '../actions/data-action-creators';

export function getIngredientsThunk() {
  return function(dispatch) {
    dispatch(indgredientsRequested());
    fetchIngredients()
    .then(({ success, data }) => {
      if (success) {
        batch(() => {
          dispatch(ingredientsReceived());
          dispatch(setIngredients(data));
      })} else {
        throw new Error({ httpCode: 500, message: 'Неизвестная ошибка сервера' });
      }
      
    })
    .catch(({ httpCode, message }) => {
      const msg = httpCode ? message : 'Не удалось связаться с сервером';
      dispatch(ingredientsFailed(msg));
    })
  }
}
