import { SET_ACCEPTED_ORDER, CLEAR_ACCEPTED_ORDER, SET_SELECTED_INGREDIENT, CLEAR_SELECTED_INGREDIENT } from "./actions";
import { TOrderData, TIngredient } from "../../utils/types";

type TSetAcceptedOrder = {
  readonly type: typeof SET_ACCEPTED_ORDER;
  readonly payload: TOrderData;
};

type TClearAcceptedOrder = {
  readonly type: typeof CLEAR_ACCEPTED_ORDER;
};

export const setAcceptedOrder = (order:TOrderData):TSetAcceptedOrder => ({ type: SET_ACCEPTED_ORDER, payload: order });
export const clearAcceptedOrder = ():TClearAcceptedOrder => ({ type: CLEAR_ACCEPTED_ORDER });

type TSetSelectedIngredient = {
  readonly type: typeof SET_SELECTED_INGREDIENT;
  readonly payload: TIngredient;
};

type TClearSelectedIngredient = {
  readonly type: typeof CLEAR_SELECTED_INGREDIENT;
};

export const setSelectedIngredient = (ing:TIngredient):TSetSelectedIngredient => ({ type: SET_SELECTED_INGREDIENT, payload: ing });
export const clearSelectedIngredient = ():TClearSelectedIngredient=> ({ type: CLEAR_SELECTED_INGREDIENT });

export type TCurrentActions = |
TSetAcceptedOrder|
TClearAcceptedOrder|
TSetSelectedIngredient|
TClearSelectedIngredient;