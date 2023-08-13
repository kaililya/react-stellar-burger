import {SET_BUN, ADD_INGREDIENT, MOVE_INGREDIENT, DELETE_INGREDIENT, RESET_BURGER} from './actions';
import { nanoid } from 'nanoid';
import { TIngredient } from '../../utils/types';



type TSetBun<T> = {
  readonly type: typeof SET_BUN;
  readonly payload: T;
};

type TAddIngredient<T> = {
  readonly type: typeof ADD_INGREDIENT;
  readonly payload: T & {readonly unique_id: string};
};

type TDeleteIngredient<T> = {
  readonly type: typeof DELETE_INGREDIENT;
  readonly payload: T;
};

type TMoveIngredient<T> = {
  readonly type: typeof MOVE_INGREDIENT;
  readonly payload: {ing:T, pos:number};
};

type TResetBurger = {
  readonly type: typeof RESET_BURGER;
};

export const setBun = (bun:TIngredient):TSetBun<TIngredient> => ({type: SET_BUN, payload: bun});
export const addIngredient = (ing:TIngredient):TAddIngredient<TIngredient> => ({ type: ADD_INGREDIENT, payload: {...ing, unique_id: nanoid(12)} });
export const deleteIngredient = (ing:TIngredient):TDeleteIngredient<TIngredient> => ({ type: DELETE_INGREDIENT, payload: ing });
export const moveIngredient = ({ ing, pos }:{readonly ing:TIngredient, readonly pos:number}):TMoveIngredient<TIngredient> => ({ type: MOVE_INGREDIENT, payload: { ing, pos } });
export const resetBurger = ():TResetBurger => ({ type: RESET_BURGER });




