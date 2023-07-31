import {SET_BUN, ADD_INGREDIENT, MOVE_INGREDIENT, DELETE_INGREDIENT} from './actions';
import { nanoid } from 'nanoid'

export const setBun = (bun) => ({type: SET_BUN, payload: bun});
export const addIngredient = (ing) => ({type: ADD_INGREDIENT, payload: {...ing, unique_id: nanoid(12)}});
export const deleteIngredient = (ing) => ({type: DELETE_INGREDIENT, payload: ing});
export const moveIngredient = ({ ing, pos }) => ({type: MOVE_INGREDIENT, payload: {ing, pos}})




