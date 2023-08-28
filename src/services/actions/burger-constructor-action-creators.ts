import {SET_BUN, ADD_INGREDIENT, MOVE_INGREDIENT, DELETE_INGREDIENT, RESET_BURGER} from './actions';
import { nanoid } from 'nanoid';
import { TIngredientAddUniqueId } from '../../utils/types';


type TSetBun = {
  readonly type: typeof SET_BUN;
  readonly payload: TIngredientAddUniqueId;
};

type TAddIngredient = {
  readonly type: typeof ADD_INGREDIENT;
  readonly payload: TIngredientAddUniqueId & {readonly unique_id: string};
};

type TDeleteIngredient = {
  readonly type: typeof DELETE_INGREDIENT;
  readonly payload: TIngredientAddUniqueId;
};

type TMoveIngredient = {
  type: typeof MOVE_INGREDIENT;
  payload: {ing:TIngredientAddUniqueId, pos:number};
};

type TResetBurger = {
  readonly type: typeof RESET_BURGER;
};

export const setBun = (bun:TIngredientAddUniqueId):TSetBun => ({type: SET_BUN, payload: bun});
export const addIngredient = (ing:TIngredientAddUniqueId):TAddIngredient => ({ type: ADD_INGREDIENT, payload: {...ing, unique_id: nanoid(12)} });
export const deleteIngredient = (ing:TIngredientAddUniqueId):TDeleteIngredient => ({ type: DELETE_INGREDIENT, payload: ing });
export const moveIngredient = ({ ing, pos }:{readonly ing:TIngredientAddUniqueId, readonly pos:number}):TMoveIngredient => ({ type: MOVE_INGREDIENT, payload: { ing, pos } });
export const resetBurger = ():TResetBurger => ({ type: RESET_BURGER });

export type TBurgetConstructorActions = |
TSetBun|
TAddIngredient|
TDeleteIngredient|
TMoveIngredient|
TResetBurger;


