import { SET_ACCEPTED_ORDER, CLEAR_ACCEPTED_ORDER, SET_SELECTED_INGREDIENT, CLEAR_SELECTED_INGREDIENT } from "./actions";

export const setAcceptedOrder = (order) => ({ type: SET_ACCEPTED_ORDER, payload: order });
export const clearAcceptedOrder = () => ({ type: CLEAR_ACCEPTED_ORDER });

export const setSelectedIngredient = (ing) => ({ type: SET_SELECTED_INGREDIENT, payload: ing });
export const clearSelectedIngredient = () => ({ type: CLEAR_SELECTED_INGREDIENT });


