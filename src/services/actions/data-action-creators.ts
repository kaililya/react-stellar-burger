import {SET_INGREDIENTS} from './actions';
import { TIngredient } from "../../utils/types";


type TSetIngredients<T> = {
  readonly type: typeof SET_INGREDIENTS;
  readonly payload: ReadonlyArray<T>
};

export const setIngredients = (ings:ReadonlyArray<TIngredient>):TSetIngredients<TIngredient> => ({type: SET_INGREDIENTS, payload: ings});