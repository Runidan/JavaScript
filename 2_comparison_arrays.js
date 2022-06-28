//Реализовать функцию для сравнения двух массивов, сравнение должно попарно сравнивать каждый элемент 

function array_comparison(array1, array2) {
  let result = [];
  for (let i = 0; i < array1.length; i++) {
    let element = array1[i] > array2[i] ? 1 : -1
    if (array1[i] == array2[i]){
      element = 0;
    }
    result.push(element);
  }
  return result;
}


console.log(array_comparison([21, 34, -6, 10, -56], [1, 34, 0, 100, -56]));
