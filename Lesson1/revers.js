//Написать функцию для реверсии слова не используя встроенные методы

function revers(word) {
  let result = '';
  for (let letter of word) {
    result = letter + result;
  }
  return result;
}
