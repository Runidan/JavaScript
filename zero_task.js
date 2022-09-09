function count_positive_numbers(array) {
  if (!Array.isArray(array)) throw new Error('необходимо передать массив') 

  let count = 0;
  let sum = 0;  
  array.forEach(element => {
    if (typeof element != 'number') return 0;
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
