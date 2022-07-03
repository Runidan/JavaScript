//Реализовать функцию для перемешивания элементов массива
function mix_array(array) {
  return array.sort(function() { return Math.random() - Math.random(); }) 
};
