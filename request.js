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


const API_KEY = "aa6M7y2JUoOHhg4bgdhIaorAQBBkAIx6";

const getGifUrl = q => {
  return `https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&g=${q}`
}

const apiCall = (url) => {

  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
  request.addEventListener('load', (e) => {
    const response = e.target;

    if (response.status === 200) {
      try {
        const parsedResult = JSON.parse(response.response)
        resolve(parsedResult);
      } catch(e) {
        reject(e);
      }

    } else {
      reject(
        new Error(
          `Finish with error ${response.status} ${response.statusText}`
        )
      )
    }
  })

  request.open('get', url);

  request.send();
  }) 
}


apiCall(getGifUrl('cat')).then(gifs => {
  console.log(gifs);
})

// getGifsList('cat').then(
//   gift => {
//     console.log(gifs, "respnse received")
//   }
// );

// getGifsList('dog', (msg) => {
//   console.log(msg);
// });

// import fetch from 'node-fetch';
// fetch(getGifUrl('dog')).then(
//   gifs => {
//     return gifs.json();
// })
// .then((gifs) => {
//   console.log(gifs, 'respons received')
// });