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

function cache(x, y){
  let cacheBox = new Map();

  return function (x, y) {
    if (cacheBox.has(x)) {
      return {value: cacheBox.get(x), fromCache: true};
    }

    cacheBox.set(x, Math.pow(x, y));
    return {value: cacheBox.get(x), fromCache: false};
  }
}

