import { TIngredient, TOrderData } from "../../utils/types";
import {
   SET_ACCEPTED_ORDER,
   CLEAR_ACCEPTED_ORDER, 
   SET_SELECTED_INGREDIENT,
   CLEAR_SELECTED_INGREDIENT,
  } from "../actions/actions"
import { TCurrentActions } from "../actions/current-action-creators";

type TInitialState = {
  selectedIngredient:TIngredient|null;
  acceptedOrder:TOrderData|null;
};

export const initialState:TInitialState = {
  selectedIngredient: null,
  acceptedOrder: null,
} 
const currentValuesReducer = (state = initialState, action:TCurrentActions):TInitialState => {
  switch (action.type) {
    case SET_SELECTED_INGREDIENT: {
      return {
        ...state,
        selectedIngredient: action.payload,
      }
    }

    case CLEAR_SELECTED_INGREDIENT: {
      return {
        ...state,
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
