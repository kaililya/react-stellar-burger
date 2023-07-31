import {
 GET_INDGREDIETNS_REQUEST, 
 GET_INDGREDIETNS_REQUEST_FAILED,
 GET_INDGREDIETNS_REQUEST_SUCCESS, 
 CREATE_ORDER_REQUEST,
 ORDER_REQUEST_FAILED,
 ORDER_REQUEST_SUCCESS,
} from './actions';

export const indgredientsRequested = () => ({type: GET_INDGREDIETNS_REQUEST});
export const ingredientsReceived = () => ({type: GET_INDGREDIETNS_REQUEST_SUCCESS});
export const ingredientsFailed = (error) => ({type: GET_INDGREDIETNS_REQUEST_FAILED, payload: error});

export const newOrderRequested = () => ({type: CREATE_ORDER_REQUEST});
export const newOrderPlaced = () => ({type: ORDER_REQUEST_SUCCESS});
export const newOrderFailed = (error) => ({type: ORDER_REQUEST_FAILED, payload: error});


