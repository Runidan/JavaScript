/*
Модифицировать прототип Array, добавив в него метод shuffle, 
чтобы получить возможность выполнять случайную сортировку для любого массива
*/

Array.prototype.shuffle = function(){return this.sort(function() { return Math.random() - Math.random(); })};

// let arr = [1, 2, 3, 4, 5, 6];
// arr.shuffle();
// console.log(arr);