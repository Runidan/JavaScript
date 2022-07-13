/*
3. Организовать такую цепочку прототипов, в которой свойства и методы оптимально распределены по объектам:

Есть следующее расширение объектов: 
Человек → Сотрудник → Нынешний сотрудник/ бывший сотрудник

Есть следующий объект, в котором свойства лежат кучей:
const john = {
  name: "John",
  lastName: "Smith",
  position: "Senior engineer",
  startDate: "10.10.1990",
  endDate: "10.10.2000",
  baseSalary: "10000",
  salaryCurrency: "$",
  location: "Russia",
  department: "IT",
  phoneNumber: "+1234567890",
  eat: function() {},
  sleep: function() {},
  callFriend: function() {},
  writeReport: function() {},
  organizeMeeting: function () {},
  retire: function () {},
  startVacation: function () {}
};
*/

let man = {
  name: "John",
  lastName: "Smith", 
  location: "Russia",
  phoneNumber: "+1234567890",
  eat: function() {},
  sleep: function() {},
  callFriend: function() {},
}

let employee = {
  position: "Senior engineer",
  baseSalary: "10000",
  salaryCurrency: "$",
  department: "IT",
}

Object.setPrototypeOf(employee, man);

let current_employee = {
  startDate: "10.10.1990",
  writeReport: function() {},
  organizeMeeting: function () {},
  retire: function () {},
  startVacation: function () {}
}

Object.setPrototypeOf(current_employee, employee);

let former_employee = {
  endDate: "10.10.2000",
}

Object.setPrototypeOf(former_employee, current_employee);