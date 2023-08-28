import { TIngredient, TIngredientAddUniqueId } from "./types";



export const moveIngredientUtil = (arr: Array<TIngredientAddUniqueId>, from:number, to:number):Array<TIngredientAddUniqueId> => {
  const answerArr = arr;
  if (from === to) {
    return arr;
  } 
  else {
    answerArr[from] = answerArr.splice(to, 1, answerArr[from])[0];
  }

  return answerArr;
}






























//   let res;
//   if (to - from === 1 ) { 
// // 4) Когда ставим на следущий номер DONE
//     res = [...arr.slice(0,from), arr[to], ...arr.slice(from, to), ...arr.slice(to+1, arr.length)];
//   }

//   if (to === arr.lenght -1) {
// // 5) Когда тащим на последний NOT DONE

//     res = [...arr.slice(0, from), ...arr.slice(from + 1, arr.lenght - 1), arr[from]]
    
//   }

//   if (from < to) {
// // 2) когда тащим сверху вниз
//     res = [...arr.slice(0, from), ...arr.slice(from + 1,to), arr[from] , ...arr.slice(to,arr.lenght - 1)];

//   }

//   if (from > to) {
// // 3) когда тащим снизу вверх
//     res = [...arr.slice(0 ,to), arr[from], ...arr.slice(to ,from), ...arr.slice(from +1, arr.lenght - 1)];

//   }

//   return res;


// const array = [1,2,3,4,5,6]


// console.log(moveIngredient(array, 3,5))

// алгоритм
// moveIngredient должна вернуть новый массив ингридиента в зависимости от:
// 1) если from = to (ready)
// 2) когда тащим сверху вниз
// 3) когда тащим снизу вверх
// 4) Когда ставим на следущий номер. т.е. с 0 на 1 или с 1 на 2 - сперва это в if 
// 5) Когда тащим на последний 