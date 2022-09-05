function count_positive_numbers(array) {
  let count = 0;
  let sum = 0;  
  array.forEach(element => {
    if (element > 0) {
      count ++;
      sum += element;
    }
  });
  return {
    count: count,
    sum: sum
  }
}
