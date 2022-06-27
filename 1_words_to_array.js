/*
Реализовать функцию, которая принимает текст, и возвращает массив объектов со структурой:
{ word: 'smth', length: 4, isCapitalized: false}
*/

function words_to_array(sentence) {
  let words = sentence.split(' ');
  let result = [];
  words.forEach(word => {
    let word_obj = {
      word: word,
      length: word.length,
      isCapitalized: word == word.toUpperCase(),
    }
    result.push(word_obj);
  });
  
  return result;
}

console.log(words_to_array('sldfk joi lsdk ijj KJHKJ'));
