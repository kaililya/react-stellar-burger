import { clearAcceptedOrder, clearSelectedIngredient, setAcceptedOrder, setSelectedIngredient } from '../actions/current-action-creators';
import currentValuesReducer, { initialState } from './current-reducer'

describe('TEST DATA REDUCER', () =>  {
  it('Test should return default initial state', () => {
    // @ts-ignore
    expect(currentValuesReducer(undefined, {})).toEqual(initialState)
  });

  it('Test should handle "setAcceptedOrder" action', () => {
    const payloadSetAcceptedOrder = {
      name: 'Неебическая булка',
      number: 2281337,
    };

    expect(currentValuesReducer(initialState, setAcceptedOrder(payloadSetAcceptedOrder))).toEqual({
      ...initialState,
      acceptedOrder: payloadSetAcceptedOrder,
    });
  });

  it('Test should handle "clearAcceptedOrder" action', () => { 
    expect(currentValuesReducer(initialState, clearAcceptedOrder())).toEqual({
      ...initialState,
      acceptedOrder: null,
    });
  });

  it('Test should handle "setSelectedIngredient" action', () => {
    const payloadSetSelectedIngredient = {
      "_id":"60666c42cc7b410027a1a9b1",
      "name":"Краторная булка N-200i",
      "type":"bun",
      "proteins":80,
      "fat":24,
      "carbohydrates":53,
      "calories":420,
      "price":1255,
      "image":"https://code.s3.yandex.net/react/code/bun-02.png",
      "image_mobile":"https://code.s3.yandex.net/react/code/bun-02-mobile.png",
      "image_large":"https://code.s3.yandex.net/react/code/bun-02-large.png",
      "__v":0
   };

    expect(currentValuesReducer(initialState, setSelectedIngredient(payloadSetSelectedIngredient))).toEqual({
      ...initialState,
      selectedIngredient: payloadSetSelectedIngredient,
    });
  });

  it('Test should handle "clearSelectedIngredient" action', () => { 
    expect(currentValuesReducer(initialState, clearSelectedIngredient())).toEqual({
      ...initialState,
      selectedIngredient: null,
    });
  });

});

