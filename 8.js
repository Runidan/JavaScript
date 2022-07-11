/*
Создать объект human со следующими возможностями:
1. При записи значения в свойство fullName имя и фамилия должны записываться в отдельные свойства firstName и lastName
2. При чтении значения fullName оно должно получаться из объединения firstName и lastName
3. При задании значения свойства dateOfBirth
   должно так же устанавливаться свойство age в зависимости от разницы года рождения и текущего года
*/

let human = {
  firstName: '',
  lastName: '',
  birthday: '',

  get fullName(){
    return this.firstName + ' ' + this.lastName;
  },

  set fullName(value){
    [this.firstName, this.lastName] = value.split(' ');
  },

  get dateOfBirth(){
    return this.birthday.toLocaleDateString();
  },

  set dateOfBirth(value){
    this.birthday = new Date(value);
  },

  get age(){
    return Math.floor((Date.now() - this.birthday) / (1000 * 3600 * 24 * 365));
  }
};

human.fullName = 'Name Surname';
human.dateOfBirth = '1980-05-06';

console.log(human);
console.log(human.age);
console.log(human.dateOfBirth);
