import {SET_BUN, ADD_INGREDIENT, MOVE_INGREDIENT, DELETE_INGREDIENT, RESET_BURGER} from './actions';
import { nanoid } from 'nanoid';
import { TIngredient } from '../../utils/types';



type TSetBun = {
  readonly type: typeof SET_BUN;
  readonly payload: TIngredient;
};

type TAddIngredient = {
  readonly type: typeof ADD_INGREDIENT;
  readonly payload: TIngredient & {readonly unique_id: string};
};

type TDeleteIngredient = {
  readonly type: typeof DELETE_INGREDIENT;
  readonly payload: TIngredient;
};

type TMoveIngredient = {
  readonly type: typeof MOVE_INGREDIENT;
  readonly payload: {ing:TIngredient, pos:number};
};

type TResetBurger = {
  readonly type: typeof RESET_BURGER;
};

export const setBun = (bun:TIngredient):TSetBun => ({type: SET_BUN, payload: bun});
export const addIngredient = (ing:TIngredient):TAddIngredient => ({ type: ADD_INGREDIENT, payload: {...ing, unique_id: nanoid(12)} });
export const deleteIngredient = (ing:TIngredient):TDeleteIngredient => ({ type: DELETE_INGREDIENT, payload: ing });
export const moveIngredient = ({ ing, pos }:{readonly ing:TIngredient, readonly pos:number}):TMoveIngredient => ({ type: MOVE_INGREDIENT, payload: { ing, pos } });
export const resetBurger = ():TResetBurger => ({ type: RESET_BURGER });

export type TBurgetConstructorActions = |
TSetBun|
TAddIngredient|
TDeleteIngredient|
TMoveIngredient|
TResetBurger;


