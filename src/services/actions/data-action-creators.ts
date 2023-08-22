import {SET_INGREDIENTS} from './actions';
import { TIngredient } from "../../utils/types";


type TSetIngredients = {
  readonly type: typeof SET_INGREDIENTS;
  payload: Array<TIngredient>
};

export const setIngredients = (ings:Array<TIngredient>):TSetIngredients => ({type: SET_INGREDIENTS, payload: ings});

export type TDataActions = TSetIngredients;