import { combineReducers } from 'redux';
import { OrderRuducer } from './orderDetail'
import { burgerConstructorReducer } from './burger-constructor-reducer'
import { apiStateReducer } from './api-reducer'
import { dataReducer } from './data-reducer';
import currentValuesReducer from './current-reducer';
import { userApiReducer } from './user-api-reducer';
import { wsReducer } from './ws-reducer';
import currenOrderReducer from './current-order-reducer';
// если что-то не будет работать - я удалил initialIngredientsReducer \ ingredientDetails
export const rootReducer = combineReducers({
  orderReducer: OrderRuducer,
  burgerConstructor: burgerConstructorReducer,
  apiState: apiStateReducer,
  data: dataReducer,
  current: currentValuesReducer,
  userData: userApiReducer,
  wsOrders: wsReducer,
  currentOrder: currenOrderReducer,
});