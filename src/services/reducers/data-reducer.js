import { SET_INGREDIENTS } from "../actions/actions"

const initialState = {
  ingredients: [],
}

export const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INGREDIENTS: {
      return {
        ...state,
        ingredients: action.payload,
      }
    }
  
    default:
      return state
  }
}