import { TIngredient } from "../../utils/types";
import { SET_INGREDIENTS } from "../actions/actions"
import { TDataActions } from "../actions/data-action-creators"

type TInitialState = {
  ingredients: Array<TIngredient>
};

export const initialState:TInitialState = {
  ingredients: [],
};

export const dataReducer = (state = initialState, action:TDataActions):TInitialState => {
  switch (action.type) {
    case SET_INGREDIENTS: {
      return {
        ...state,
        ingredients: action.payload,
      }
    };
  
    default:
      return state;
  }
};