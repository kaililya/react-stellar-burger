import { store } from '../services/store';
import { ThunkDispatch } from 'redux-thunk';
import {
  TypedUseSelectorHook,
  useDispatch,
  useSelector
} from 'react-redux';

import { WS_SUCCESS_CONNECTION,
  WS_CLOSED_CONNECTION,
  WS_FAILED_CONNECTION,
  WS_GET_DATA,
  WS_REQUEST_CONNECTION } from '../services/actions/actions';
import { TApiActionCreators } from '../services/actions/api-action-creators';
import { TBurgetConstructorActions } from '../services/actions/burger-constructor-action-creators';
import { TCurrentActions } from '../services/actions/current-action-creators';
import { TDataActions } from '../services/actions/data-action-creators';
import { TUserApiActions } from '../services/actions/user-api-action-creators';
import { TWSActions } from '../services/actions/ws-actions-creators';
import { TCurrentOrderActions } from '../services/actions/current_order_action-creators';

export type TActions = TApiActionCreators |
TBurgetConstructorActions | 
TCurrentActions |
TDataActions |
TUserApiActions | 
TCurrentOrderActions |
TWSActions;  

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = ThunkDispatch<RootState, never, TActions>;

type TDispatchHook = () => AppDispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: TDispatchHook = useDispatch;


export const wsActions = {
  wsInit: WS_REQUEST_CONNECTION,
  onOpen: WS_SUCCESS_CONNECTION,
  onClose: WS_CLOSED_CONNECTION,
  onFail: WS_FAILED_CONNECTION,
  onGetData: WS_GET_DATA
};

export type TWS = {
  wsInit: typeof WS_REQUEST_CONNECTION;
  onOpen: typeof WS_SUCCESS_CONNECTION;
  onClose: typeof WS_CLOSED_CONNECTION;
  onFail: typeof WS_FAILED_CONNECTION;
  onGetData: typeof WS_GET_DATA;
};

export type TIngredient = {
  _id: string;
  name: string;
  type: string;
  proteins: number;
  fat: number;
  carbohydrates: number;
  calories: number;
  price: number;
  image: string;
  image_mobile: string;
  image_large: string;
   __v: number;
};

export type TIngredientAddUniqueId = TIngredient & {
  unique_id: string;
};

export type TOrderData = {
  readonly name:string;
  readonly number:number;
};

export type TUserData = {
  readonly email: string;
  readonly name: string;
};

export type TOrderFeed = {
  createdAt: string;
  ingredients: string[];
  name: string;
  number: number;
  status?: string;
  updatedAt: string;
  _id: string;
};

export type TWSMessage = {
  success: boolean;
  orders: Array<TOrderFeed>;
  total: number;
  totalToday: number;
};