/*
2. Кэширование

Замыкания можно использовать для сохранения состояния и дальнейшей работы с ним.

Реализуйте функцию cache, которая вернет функцию, возводящую число в степень и возвращающую результат. 
Функция должна запоминать аргументы, которые она уже получала и возвращать результат сразу, не вычисляя его повторно

Пример:  
const calculate = cache();

calculate(3, 3); // { value: 27, fromCache: false}
calculate(2, 10); // { value: 1024, fromCache: false}
calculate(2, 10); // { value: 1024, fromCache: true}
*/

function cache(){
  let cacheBox = new Map();

  return function (x, y) {
    let key = x + ' ' + y
    if (cacheBox.has(key)) {
      return {value: cacheBox.get(key), fromCache: true};
    }

    cacheBox.set(key, Math.pow(x, y));
    return {value: cacheBox.get(key), fromCache: false};
  }
}

const calculate = cache();

console.log(calculate(3, 3)); // { value: 27, fromCache: false}
console.log(calculate(2, 10)); // { value: 1024, fromCache: false}
console.log(calculate(2, 10)); // { value: 1024, fromCache: true}
console.log(calculate(2, 3));
console.log(calculate(2, 4));
console.log(calculate(2, 10));