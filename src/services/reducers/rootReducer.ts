import { combineReducers } from 'redux';
import { burgerConstructorReducer } from './burger-constructor-reducer'
import { apiStateReducer } from './api-reducer'
import { dataReducer } from './data-reducer';
import currentValuesReducer from './current-reducer';
import { userApiReducer } from './user-api-reducer';
import { wsReducer } from './ws-reducer';
import currenOrderReducer from './current-order-reducer';
// если что-то не будет работать - я удалил initialIngredientsReducer \ ingredientDetails \ OrderRuducer
export const rootReducer = combineReducers({
  burgerConstructor: burgerConstructorReducer,
  apiState: apiStateReducer,
  data: dataReducer,
  current: currentValuesReducer,
  userData: userApiReducer,
  wsOrders: wsReducer,
  currentOrder: currenOrderReducer,
});