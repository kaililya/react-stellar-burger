import { indgredientsRequested, ingredientsFailed, ingredientsReceived, newOrderFailed, newOrderPlaced, newOrderRequested } from "../actions/api-action-creators";
import { initialState, apiStateReducer } from "./api-reducer";

describe("TEST API REDUCER", () => {

  it('Test should return default initial state', () => {
      // @ts-ignore
    expect(apiStateReducer(undefined,{})).toEqual(initialState)
  });

  it('Test should handle "indgredientsRequested" action', () => {
    expect(apiStateReducer(initialState,indgredientsRequested())).toEqual({
      ...initialState,
      indgredientsRequestPending: true,
      indgredientsRequestRejected: false,
      indgredientsRequestFulfilled: false,
      error: null,
    });
  });

  it('Test should handle "ingredientsReceived" action', () => {
    expect(apiStateReducer(initialState, ingredientsReceived())).toEqual({
      ...initialState,
      indgredientsRequestPending: false,
      indgredientsRequestFulfilled: true,
      indgredientsRequestRejected: false,
      error: null,
    });
  });

  it('Test should handle "ingredientsFailed" action', () => {
    expect(apiStateReducer(initialState, ingredientsFailed('some error'))).toEqual({
      ...initialState,
      indgredientsRequestPending: false,
      indgredientsRequestFulfilled: false,
      indgredientsRequestRejected: true,
      error: 'some error',
    });
  });

  it('Test should handle "newOrderRequested" action', () => {
    expect(apiStateReducer(initialState, newOrderRequested())).toEqual({
      ...initialState,
      orderRequestPending: true,
      orderRequestSuccess: false,
      orderRequestRejected: false,
      error: null,
    });
  });

  it('Test should handle "newOrderRequested" action', () => {
    expect(apiStateReducer(initialState, newOrderRequested())).toEqual({
      ...initialState,
      orderRequestPending: true,
      orderRequestSuccess: false,
      orderRequestRejected: false,
      error: null,
    });
  });

  it('Test should handle "newOrderPlaced" action', () => {
    expect(apiStateReducer(initialState, newOrderPlaced())).toEqual({
      ...initialState,
      orderRequestPending: false,
      orderRequestSuccess: true,
      orderRequestRejected: false,
      error: null,
    });
  });

  it('Test should handle "newOrderFailed" action', () => {
    expect(apiStateReducer(initialState, newOrderFailed('some error'))).toEqual({
      ...initialState,
      orderRequestPending: false,
      orderRequestSuccess: false,
      orderRequestRejected: true,
      error:'some error',
    });
  });

});

