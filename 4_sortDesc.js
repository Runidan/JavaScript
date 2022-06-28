/*
Реализовать функцию для сортировки массива чисел по убыванию
*/

function sortDesc(arr_num) {
  let i = 0
  while (i < arr_num.length){
    if(arr_num[i] < arr_num[i + 1]){
      [arr_num[i], arr_num[i + 1]] = [arr_num[i + 1], arr_num[i]];
      i = 0;
      continue;
    }
    i++;
  }
  return arr_num;
}

const numbers = [-20, -10, 0, 10, 20, 30];

console.log(sortDesc(numbers)); // [30, 20, 10, 0, -10, -20]