import { moveIngredientUtil } from "../../utils/move-ingredient";
import { addIngredient, deleteIngredient, moveIngredient, resetBurger, setBun } from "../actions/burger-constructor-action-creators";
import { burgerConstructorReducer, initialState } from "./burger-constructor-reducer";

jest.mock("nanoid", () => { return { nanoid: () => "123" } });

describe('TEST DATA REDUCER', () =>  {

  it('Test should return default initial state', () => {
    expect(burgerConstructorReducer(undefined, {})).toEqual(initialState)
  });

  it('Test should handle "setBun" action', () => { 

    const payloadSetBun = {
      _id:"60666c42cc7b410027a1a9b1",
      name:"Краторная булка N-200i",
      type:"bun",
      proteins:80,
      fat:24,
      carbohydrates:53,
      calories:420,
      price:1255,
      image:"https://code.s3.yandex.net/react/code/bun-02.png",
      image_mobile:"https://code.s3.yandex.net/react/code/bun-02-mobile.png",
      image_large:"https://code.s3.yandex.net/react/code/bun-02-large.png",
      __v:0,
      unique_id: 123,
   };

    expect(burgerConstructorReducer(initialState, setBun(payloadSetBun))).toEqual({
      ...initialState,
      bun: payloadSetBun,
    });
  });

  it('Test should handle "addIngredient" action', () => { 

    const payloadAddIngredient = {
      _id:"60666c42cc7b410027a1a9b1",
      name:"Краторная булка N-200i",
      type:"bun",
      proteins:80,
      fat:24,
      carbohydrates:53,
      calories:420,
      price:1255,
      image:"https://code.s3.yandex.net/react/code/bun-02.png",
      image_mobile:"https://code.s3.yandex.net/react/code/bun-02-mobile.png",
      image_large:"https://code.s3.yandex.net/react/code/bun-02-large.png",
      __v:0,
      unique_id: "123",
   };

    expect(burgerConstructorReducer(initialState, addIngredient(payloadAddIngredient))).toEqual({
      ...initialState,
      ingredients: [...initialState.ingredients, payloadAddIngredient]
    });
  });

  it('Test should handle "deleteIngredient" action', () => { 

    const payloadDeleteIngredient = {
      _id:"60666c42cc7b410027a1a9b1",
      name:"Краторная булка N-200i",
      type:"bun",
      proteins:80,
      fat:24,
      carbohydrates:53,
      calories:420,
      price:1255,
      image:"https://code.s3.yandex.net/react/code/bun-02.png",
      image_mobile:"https://code.s3.yandex.net/react/code/bun-02-mobile.png",
      image_large:"https://code.s3.yandex.net/react/code/bun-02-large.png",
      __v:0,
      unique_id: "123",
   };

    expect(burgerConstructorReducer(initialState, deleteIngredient(payloadDeleteIngredient))).toEqual({
      ...initialState,
      ingredients: initialState.ingredients.filter(ing => ing.unique_id !== payloadDeleteIngredientерка.unique_id)    });
  });

  it('Test should handle "moveIngredient" action', () => { 

    const payloadMoveIngredient = {
      _id:"60666c42cc7b410027a1a9b1",
      name:"Краторная булка N-200i",
      type:"bun",
      proteins:80,
      fat:24,
      carbohydrates:53,
      calories:420,
      price:1255,
      image:"https://code.s3.yandex.net/react/code/bun-02.png",
      image_mobile:"https://code.s3.yandex.net/react/code/bun-02-mobile.png",
      image_large:"https://code.s3.yandex.net/react/code/bun-02-large.png",
      __v:0,
      unique_id: "123",
   };
   const pos = 1;

  expect(burgerConstructorReducer(initialState, moveIngredient({payloadMoveIngredient, pos}))).toEqual({
      ...initialState,
      ingredients: moveIngredientUtil(initialState.ingredients, initialState.ingredients.indexOf(payloadMoveIngredient), pos)   
    });
  });

  it('Test should handle "moveIngredient" action', () => { 

    expect(burgerConstructorReducer(initialState, resetBurger())).toEqual({
      ...initialState,
      bun: null,
      ingredients: [],
    });
  });

});