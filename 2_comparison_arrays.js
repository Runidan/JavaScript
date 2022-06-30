//Реализовать функцию для сравнения двух массивов, сравнение должно попарно сравнивать каждый элемент 

function get_value(arr, index) {
  let value = arr[index];
  if (value === undefined) return -Infinity;
  return value;
}

function array_comparison(array1, array2) {
  let result = [];

  for (let i = 0; i < Math.max(array1.length, array2.length); i++) {
    let element = get_value(array1, i) > get_value(array2, i) ? 1 : -1
    if (array1[i] == array2[i]){
      element = 0;
    }
    result.push(element);
  }
  
  return result;
}


console.log(array_comparison([21, 34, -6, 10, -56], [1, 34, 0, 100]));
