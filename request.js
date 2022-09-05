// Функциональные требования:
// Доступно поле ввода в которое можно вводить поисковый запрос
// Поиск осуществляется по мере набора текста в поле
// Запрос на бэкенд отправляется не чаще, чем раз в 500мс
// Верстка может быть любой

// Технические требования :
// Функция для поиска переиспользуемая, ее должно быть легко использовать в другом месте
// Можно использовать fetch или XHR
// Решение должно использовать промисы или async/await
// Реализуйте простой кэш на стороне клиента. Он будет проверять есть ли у нас результат для введенного запроса и возвращать его из кэша, время жизни для записей ограничивать не нужно

let search_form = document.getElementById("search_form");
let result_list = document.getElementById("result");
var timer;
let cashe = {};


const API_KEY = "aa6M7y2JUoOHhg4bgdhIaorAQBBkAIx6";


const getGifUrl = (q) => {
  return `https://api.giphy.com/v1/gifs/trending?g=${q}&api_key=${API_KEY}`
}

const apiCall = async url => {

  const response = await fetch(url);

  if (!response.ok) throw `Finish with error ${response.status} ${response.statusText}`;

  return await response.json();

}

const renderResult = (result) => {
  result_list.innerHTML = '';
  result.data.forEach(element => {
    let span = document.createElement('span');
    let image = document.createElement('img');
    image.src = element.images.fixed_width_downsampled.url;
    span.append(image);
    result_list.append(span);
  });
}

const getResult = () => {

  if (timer) {
    clearTimeout(timer);
  }

  timer = setTimeout(() => {
    let url = getGifUrl(search_form.value);

    if(cashe[search_form.value]) {
      renderResult(cashe[search_form.value]);
      return;
    }

    apiCall(url).then(result => renderResult(cashe[search_form.value] = result));
  }, 500);
}

search_form.addEventListener('input', getResult);
