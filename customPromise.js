class MyPromise {
  resolvedData;
  rejectedData;
  resolveChain = [];
  rejectChain = [];
  isResolved = false;
  isRejected = false;

  static resolve(value) {
    return new MyPromise((resolve) => resolve(value));
  }

  static reject(value) {
    return new MyPromise((_resolve, reject) => reject(value));
  }

  constructor(executor) {
    const resolve = (value) => {
      this.resolvedData = value;
      this.isResolved = true;

      if (this.resolveChain.length) {
        this.resolveChain.reduce((acc, fn) => fn(acc), this.resolvedData);
      }

    };

    const reject = (value) => {
      this.rejectedData = value;
      this.isRejected = true;

      if (this.rejectChain.length) {
        this.rejectChain.reduce((acc, fn) => fn(acc), this.rejectedData);
      }
    };


    executor(resolve, reject);
  }



  then(fn) {
    this.resolveChain.push(fn);
    if (this.isResolved) {
      this.resolveChain.reduce((acc, fn) => fn(acc), this.resolvedData);
    }
    return this;
  }

  catch(fn) {
    this.rejectChain.push(fn);
    if (this.isRejected) {
      this.rejectChain.reduce((acc, fn) => fn(acc), this.rejectedData);
    }
    return this;
  }

  finally(fn) {
    this.resolveChain.push(fn);
    this.rejectChain.push(fn);

    if (this.isResolved) {
      this.resolveChain.reduce((acc, fn) => fn(acc), this.resolvedData);
    }

    if (this.isRejected) {
      this.rejectChain.reduce((acc, fn) => fn(acc), this.rejectedData);
    }
  }
}

// const prom = new MyPromise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(10);
//   }, 1000);
// })
//   .then((data) => {
//     new MyPromise((resolve, reject) => {
//       setTimeout(() => {
//         reject('What she said');
//       }, 1000);
//   })
//   .catch((error) => {
//     return `${error} ${data} times`;
//   })
//   .catch((error) => {
//     console.log(error);
//   });
//   });

//   MyPromise.resolve(10).then((data) => console.log(data));
//   MyPromise.reject('something wrong').catch((error) => console.log(error));

// import fetch from 'node-fetch';
// const url = 'https://api.ipify.org?format=json'

// const pr = Promise.resolve(fetch(url)).then(response => response.json()).then(console.debug);
// console.log(pr);

// // Выполнение с thenable объектом
// var p1 = MyPromise.resolve({
//   then: function(onFulfill, onReject) { onFulfill("fulfilled!"); }
// });
// console.log(p1 instanceof MyPromise) // true

