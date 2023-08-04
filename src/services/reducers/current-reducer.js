import {
   SET_ACCEPTED_ORDER,
   CLEAR_ACCEPTED_ORDER, 
   SET_SELECTED_INGREDIENT,
   CLEAR_SELECTED_INGREDIENT,
  } from "../actions/actions"

const initialState = {
  selectedIngredient: null,
  // doesExistSelectedIngredient: false,
  acceptedOrder: null,
} 
// Дописать 
const currentValuesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SELECTED_INGREDIENT: {
      return {
        ...state,
        // doesExistSelectedIngredient: true,
        selectedIngredient: action.payload,
      }
    }

    case CLEAR_SELECTED_INGREDIENT: {
      return {
        ...state,
        doesExistSelectedIngredient: false,
        selectedIngredient: null,
      }
    }

    case SET_ACCEPTED_ORDER: {
      return {
        ...state,
        acceptedOrder: action.payload,
      }
    };

    case CLEAR_ACCEPTED_ORDER: {
      return {
        ...state,
        acceptedOrder: null,
      }
    };
      
    default:
      return state;
  }
};

export default currentValuesReducer;
