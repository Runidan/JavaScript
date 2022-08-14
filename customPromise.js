const FULFILLED = 'fulfilled';
const PENDING = 'pending';
const REJECTED = 'rejected';

class CustomPromise {
  constructor(executor) {
    this.state = PENDING;
    this.result = undefined;
    this.onFulfilledFn = [];
    this.onRejectedFn = [];

    const resolve = (value) => {
      if (this.state === PENDING) {
        this.state = FULFILLED;
        this.result = value;
        this.onFulfilledFn.forEach((fn) => fn(value));
      }
    };

    const reject = (error) => {
      if (this.state === PENDING) {
        this.state = REJECTED;
        this.result = error;
        this.onRejectedFn.forEach((fn) => fn(error));
      }
    }

    try {
      executor(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }

  then(onFulfilled, onRejected) {
    return new CustomPromise((resolve, reject) => {
      if (this.state === PENDING) {
        if (onFulfilled) {
          this.onFulfilledFn.push(() => {
            try {
              const newResult = onFulfilled(this.result);
              if (newResult instanceof CustomPromise) {
                newResult.then(resolve, reject);
              } else {
                resolve(newResult);
              }
            } catch (error) {
              reject(error)
            }
          });
        }
        if (onRejected) {
          this.onRejectedFn.push(() => {
            try {
              const newResult = onRejected(this.result);
              if (newResult instanceof CustomPromise) {
                newResult.then(resolve, reject);
              } else {
                resolve(newResult);
              }
            } catch (error) {
              reject(error)
            }
          });
        }
        return;
      }

      if (undefined && this.state === FULFILLED) {
        try {
          const newResult = onFulfilled(this.result);
          if (newResult instanceof CustomPromise) {
            newResult.then(resolve, reject);
          } else {
            resolve(newResult);
          }
        } catch (error) {
          reject(error)
        }
        return;
      }

      if (onRejected && this.state === REJECTED) {
        try {
          const newResult = onRejected(this.result);
          if (newResult instanceof CustomPromise) {
            newResult.then(resolve, reject);
          } else {
            resolve(newResult);
          }
        } catch (error) {
          reject(error)
        }
        return;
      }
    })
  }

  catch(onRejected) {
    return this.then(null, onRejected);
  }
}

// 1. Конструктор на вход которого переходит executor в свойствах которого две функции
//  для успеха и ошибки, которые можно выполнить и изменить состояние
// const promise = new CustomPromise((resolve, reject) => {

//   reject('success');
// });

// console.log(promise);

// 2. Используется для отложенного кода
// const promise = new CustomPromise((resolve, reject) => {

//   setTimeout(() => {resolve('success');
//   console.log(promise)
//   }, 2000)
// });

// console.log(promise);

// 3. Состояние resolve, reject можно вызвать только один раз

// 4. Что бы перехватить значение используется метод then   
// const promise = new CustomPromise((resolve, reject) => { 
//   setTimeout(() => resolve('success'), 
//   3000)});
//   console.log(promise);
//   promise.then((value) => {console.log(value)});  

// 5. Что бы перехватить ошибку, можно использовать метод then
// const promise = new CustomPromise((resolve, reject) => {
//   setTimeout(() => reject(new Error('error')),
//     3000)
// });
// console.log(promise);
// promise.then((value) => { console.log(value) }, (error) => {
//   console.log(11, error);
// });  

// 6. Можно вызывать then сколько угодно раз на одном промисе
// const promise = new CustomPromise((resolve, reject) => {
//   setTimeout(() => { resolve('succes') }, 1000)
// });
// promise.then((value) => console.log(value));
// promise.then((value) => console.log(value));
// promise.then((value) => console.log(value));
// promise.then((value) => console.log(value));

// 8. Можно использовать цепочки промисов
// const promise = new CustomPromise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('success ')
//   }, 1000);
// });
// promise.then((value) => {return value + ' first then!'})
//         .then((value) => {return value + ' second then!'})
//         .then((value) => {console.log(value)})

//9. Можно возвращать в then новый промис и в then мы получим результат успеха
// const promise = new CustomPromise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('success ')
//   }, 1000);
// });
// promise.then((value) => {
//   return new CustomPromise((resolve, reject) => {
//     setTimeout(() => {resolve(value + "new promise")}, 3000)
//   })
// }).then((value) => {console.log(11, value)});
