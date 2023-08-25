import { SET_SELECTED_INGREDIENT, CLEAR_SELECTED_INGREDIENT } from '../actions/actions'
type TInitialState = {};


const initialState:TInitialState = {
  ingredient: null,
  popupOpened: false,
}

export const ingredientDetailsReducer = (state = initialState, action:any):TInitialState => {
  switch (action.type) {
    // case CLEAR_SELECTED_INGREDIENT: {
    //   return {
    //     ...state,
    //     ingredient: null,
    //     popupOpened: false,
    //   }
    // }
    // case SET_SELECTED_INGREDIENT: {
    //   return {
    //   ...state,
    //   ingredient: action.payload,
    //   popupOpened: true,
    //   }
    // }

    default:
      return state
  }
}