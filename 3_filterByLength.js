/* 
Реализовать функцию для фильтрации массива по длине слов, значения длины указываются включительно, фильтр должен работать так:   
const fruits = ['lime', 'orange', 'apple', 'banana', '']

filterByLength(fruits, 0, 5) // ['lime', 'apple', '']
*/

function filterByLength(array, min, max) {
  let result = [];
  array.forEach(element => {
    if (min <= element.length && element.length <= max){
      result.push(element);
    }
  });
  return result;
}

const fruits = ['lime', 'orange', 'apple', 'banana', '']

console.log(filterByLength(fruits, 0, 5));
