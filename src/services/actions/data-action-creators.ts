import {SET_INGREDIENTS} from './actions';
import { TIngredient } from "../../utils/types";


type TSetIngredients = {
  readonly type: typeof SET_INGREDIENTS;
  readonly payload: ReadonlyArray<TIngredient>
};

export const setIngredients = (ings:ReadonlyArray<TIngredient>):TSetIngredients => ({type: SET_INGREDIENTS, payload: ings});

export type TDataActions = TSetIngredients;