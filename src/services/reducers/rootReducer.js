import { combineReducers } from 'redux';
import { OrderRuducer } from './orderDetail'
import { ingredientDetailsReducer } from './ingredientDetails' 
import { initialIngredientsReducer } from './initialIngredients'
import { burgerConstructorReducer } from './burger-constructor-reducer'
import { apiStateReducer } from './api-reducer'
import { dataReducer } from './data-reducer';
import currentValuesReducer from './current-reducer';

// убрать суффикс редъюсер для точек входа

export const rootReducer = combineReducers({
  orderReducer: OrderRuducer,
  ingredientDetails: ingredientDetailsReducer,
  burgerConstructor: burgerConstructorReducer,
  apiState: apiStateReducer,
  data: dataReducer,
  current: currentValuesReducer,
})