/*
Реализовать цикл перебирающий числа от одного до 20 и выводящий каждое четное значение на экран, 
реализация должна использовать все 3 вида циклов (отдельная реализация на каждый цикл)
*/
let i = 1;
while (i <= 20) {
  if (i % 2 === 0){
    console.log(i);
  }
i++;
}

let k = 1
do {
  if (++k % 2 === 0) {
    console.log(k);
  }
} while (k <= 20);

for (let j = 1; j <= 20; j++) {
  if (j % 2 === 0) {
    console.log(j)
  }
}