/*
Выполняется проверка прав доступа пользователя к сайту при соблюдении следующих условий:
1. Возраст от 18 до 35 лет
2. Оплачена месячная подписка
3. Не действует блокировка
4. Имя пользователя не содержит внутри себя запрещенные слова
Если пользователь является администратором, для получения доступа достаточно соблюдения только первого условия
Информация о пользователе хранится в объекте такого вида:
{
 age: 18,
 paid: true,
 blocked: false,
 badUsername: false,
 isAdmin: false
}
*/
function access_check(person) {
  if (person.age >= 18){
    if (person.isAdmin === true) {
      return true;
    } else if (person.true === true && person.blocked === false && person.badUsername === false) {
      return true;
    } else {
      return false;
    }
  }
  return false;
}