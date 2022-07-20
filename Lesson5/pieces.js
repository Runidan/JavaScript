/*
Все типы фигур: пешка, ладья, слон, конь, король, ферзь

У каждой фигуры есть соответствующие методы и свойства:
Получить допустимые ходы
Cодержит свойство своего цвета
Для пешек присутствует флаг говорящий о том, что пешку можно превратить в любую другую фигуру, кроме короля.

Общие методы и свойства должны быть вынесены в родительский класс единый для всех фигур.
*/

class Peice {
  constructor(color, place){
    this.white = Boolean(color);
    this.place = place;
  }

  getAvalibleMove() {
    //Метод переписать под каждую фигуру с учетом правил
  }
}

class King extends Peice {
  constructor(color, place){
    super(color, place);
  }
}
class Queen extends Peice {
  constructor(color, place){
    super(color, place);
  }
}

class Bishop extends Peice {
  constructor(color, place){
    super(color, place);
  }
}

class Knight extends Peice {
  constructor(color, place){
    super(color, place);
  }
}

class Castle extends Peice {
  constructor(color, place){
    super(color, place);
  }
}

class Pawn extends Peice {
  constructor(color, place){
    super(color, place);
    this.can_change = true;
  }

  static peice_for_change = [Castle, Knight, Bishop, Queen]
}
