import {
 GET_INDGREDIETNS_REQUEST, 
 GET_INDGREDIETNS_REQUEST_FAILED,
 GET_INDGREDIETNS_REQUEST_SUCCESS, 
 CREATE_ORDER_REQUEST,
 ORDER_REQUEST_FAILED,
 ORDER_REQUEST_SUCCESS,
} from './actions';

type TIndgredientsRequested = {
 readonly type: typeof GET_INDGREDIETNS_REQUEST;
};

type TIngredientsReceived = {
  readonly type: typeof GET_INDGREDIETNS_REQUEST_SUCCESS;
 };

 type TIngredientsFailed = {
  readonly type: typeof GET_INDGREDIETNS_REQUEST_FAILED;
  readonly payload: string;
 };

export const indgredientsRequested = ():TIndgredientsRequested => ({type: GET_INDGREDIETNS_REQUEST});
export const ingredientsReceived = ():TIngredientsReceived => ({type: GET_INDGREDIETNS_REQUEST_SUCCESS});
export const ingredientsFailed = (error:string):TIngredientsFailed => ({type: GET_INDGREDIETNS_REQUEST_FAILED, payload: error});

type TNewOrderRequested = {
  readonly type: typeof CREATE_ORDER_REQUEST;
 };

type TNewOrderPlaced= {
  readonly type: typeof ORDER_REQUEST_SUCCESS;
 };
 
 type TNewOrderFailed= {
  readonly type: typeof ORDER_REQUEST_FAILED;
  readonly payload: string;

 };

export const newOrderRequested = ():TNewOrderRequested => ({type: CREATE_ORDER_REQUEST});
export const newOrderPlaced = ():TNewOrderPlaced => ({type: ORDER_REQUEST_SUCCESS});
export const newOrderFailed = (error:string):TNewOrderFailed => ({type: ORDER_REQUEST_FAILED, payload: error});

export type TApiActionCreators = |
TIndgredientsRequested |
TIngredientsReceived |
TIngredientsFailed |
TNewOrderRequested |
TNewOrderPlaced |
TNewOrderFailed ;
