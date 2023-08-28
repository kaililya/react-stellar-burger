import { setIngredients } from '../actions/data-action-creators';
import { initialState, dataReducer } from './data-reducer'

describe('TEST DATA REDUCER', () =>  {
  it('Test should return default initial state', () => {
    // @ts-ignore
    expect(dataReducer(undefined, {})).toEqual(initialState)
  });

  it('Test should handle "loginingRuquested" action', () => {
    const payload = [{
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
   },];
   
    expect(dataReducer(initialState, setIngredients(payload))).toEqual({
      ...initialState,
      ingredients: payload,
    });
  });
});