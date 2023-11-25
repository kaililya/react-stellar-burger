import { moveIngredientUtil } from '../../utils/move-ingredient';
import { TIngredient, TIngredientAddUniqueId } from '../../utils/types';
import { SET_BUN, ADD_INGREDIENT, MOVE_INGREDIENT, DELETE_INGREDIENT, RESET_BURGER } from '../actions/actions';
import { TBurgetConstructorActions } from '../actions/burger-constructor-action-creators';
import { nanoid } from 'nanoid';
type TInitialState = {
  bun: TIngredientAddUniqueId| null;
  ingredients: Array<TIngredientAddUniqueId>;
};

export const initialState:TInitialState = {
  bun: null,
  ingredients: [] ,
}

export const burgerConstructorReducer = (state = initialState, action:TBurgetConstructorActions):TInitialState => {
  switch (action.type) {
    case SET_BUN: {
      return {
        ...state,
        bun: action.payload,
      }
    }
    case ADD_INGREDIENT: {

      return {
        ...state,
        ingredients: [...state.ingredients, action.payload]
      }
      
    }
    case MOVE_INGREDIENT: {
      const {ing, pos} = action.payload;
      const from = state.ingredients.indexOf(ing);
      return {
        ...state,
        ingredients: moveIngredientUtil(state.ingredients, from, pos),
      }
    }
    case DELETE_INGREDIENT: {
      const { unique_id } = action.payload;
      // console.log(action.payload);
      // console.log(state.ingredients);
      return {
        ...state, 
        ingredients: state.ingredients.filter(ing => ing.unique_id !== unique_id)
      }
    }

    case RESET_BURGER: {
      return {
        ...state,
        bun: null,
        ingredients: [],
      }
    }

    default:
      return state
  }
}

