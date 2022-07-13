/*
С помощью прототипа реализовать структуру "Квадрат" которая будет наследоваться от структуры "Прямоугольник",
 должна быть возможность задавать размеры обеим фигурам и получать их площадь и периметр
*/

function Rectangle(size1, size2) {
  this.size1 = size1;
  this.size2 = size2;

  this.getArea = function(){
    return this.size1 * this.size2;
  } 

  this.getPerimetr = function () {
    return ( this.size1 + this.size2 ) * 2;
  }
}

function Square(size) {
  this.size1 = size;
  this.size2 = size;
}

Square.prototype = new Rectangle();

// console.log(new Square(2).getArea());