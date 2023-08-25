import { batch } from 'react-redux';
import { fetchIngredients } from '../../utils/api/api'
import { indgredientsRequested, ingredientsFailed, ingredientsReceived } from '../actions/api-action-creators';

import { setIngredients } from '../actions/data-action-creators';
import { TAppThunk } from '../../utils/types';

export function getIngredientsThunk():TAppThunk {
  return function(dispatch) {
    dispatch(indgredientsRequested());
    fetchIngredients()
    .then(({ success, data }) => {
      if (success) {
        batch(() => {
          dispatch(ingredientsReceived());
          dispatch(setIngredients(data));
      })} else {
        throw new Error('Неизвестная ошибка сервера');
      }
      
    })
    .catch(({ httpCode, message }) => {
      const msg = httpCode ? message : 'Не удалось связаться с сервером';
      dispatch(ingredientsFailed(msg));
    })
  }
}
