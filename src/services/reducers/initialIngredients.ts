import { TIngredient } from '../../utils/types';
import { GET_INDGREDIETNS_REQUEST, GET_INDGREDIETNS_REQUEST_SUCCESS, GET_INDGREDIETNS_REQUEST_FAILED } from '../actions/actions'
import { TApiActionCreators } from '../actions/api-action-creators'

// type TInitialStateInitialIngredients = {
//   ingredientsData: null| Array<TIngredient>;
//   ingredientsRequestSent: boolean;
//   ingredientsRequestSuccess: boolean;
//   ingredientsRequestFailed: boolean;
//   errorMessage: string;
// };

const initialStateInitialIngredients = {
  ingredientsData: null,
  ingredientsRequestSent: false,
  ingredientsRequestSuccess: false,
  ingredientsRequestFailed: false,
  errorMessage: ''
}; 

export const initialIngredientsReducer = (state = initialStateInitialIngredients, action:any):any => {
  switch (action.type) {
    case GET_INDGREDIETNS_REQUEST: {
      return {
        ...state,
        ingredientsRequestSent: true
      }
    }

    case GET_INDGREDIETNS_REQUEST_SUCCESS: {
      return {
        ...state,
        ingredientsRequestSent: false,
        ingredientsRequestSuccess: true,
        ingredientsData: action.ingredientsData,
      }
    }
      
    case GET_INDGREDIETNS_REQUEST_FAILED: {
      return {
        ...state,
        ingredientsRequestSent: false,
        ingredientsRequestFailed: false,
        errorMessage: action.errorMessage
      }
    }

    default:
      return state
  }
}