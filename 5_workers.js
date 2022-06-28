/*
Выполнить преобразования с массивом сотрудников компании:
 
1. Узнать среднюю зарплату сотрудников
2. Отсортировать сотрудников по зарплате
3. Получить список сотрудников с зарплатой >4500 и возрастом > 25 лет
*/

const employees = [
  {
   firstName: 'Alex',
   lastName: 'Smith',
   age: 54,
   salary: 10000,
   position: 'Architect'
  },
  {
   firstName: 'Gustav',
   lastName: 'Andersen',
   age: 31,
   salary: 5000,
   position: 'Software engineer'
  },
  {
   firstName: 'Liz',
   lastName: 'Taylor',
   age: 20,
   salary: 7000,
   position: 'Manager'
  }
]

const reduceCallBack = function (acc, item) {
  return (acc + item.salary) / 2;
}

let averSalary = employees.reduce(reduceCallBack, employees[0].salary); //средняя зарплата сотрудников

const sortBySalary = employees.sort(function(a, b) { return a.salary - b.salary; }) //сортировка сотрудников по зарплате

//список сотрудников с зарплатой >4500 и возрастом > 25 лет
const workerList = employees.filter((worker) => { return worker.salary > 4500 && worker.age > 25})
