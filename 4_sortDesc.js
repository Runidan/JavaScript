/*
Реализовать функцию для сортировки массива чисел по убыванию
*/

function sortDesc(arr) {
  return arr.sort(function(a, b) { return b - a; });
}

const numbers = [-20, -10, 0, 10, 20, 30];

console.log(sortDesc(numbers)); // [30, 20, 10, 0, -10, -20]