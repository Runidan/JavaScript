/*
Содержит координаты всех полей и состояние всего поля 
Содержит информацию о расположении всех фигур
*/
class ChessBoard {
  constructor() {
    this.board = Map();
    for(let i = 1; i < 9; i++) {
      let a = 'abcdefgh'.split('').forEach(letter => {
        this.board.set(letter + i, null);
      });
    }
  } 

  start_position(){
    this.board.set('e1', new King(true, 'e1'))//Создаем для примера белого короля
    //Подобным образом создаем остальные фигуры и размещаем на доске
  }

  cell(cell) {
    return this.board.get(cell);
  }

  set_cell(cell, piece){
    if (this.board.has(cell)){
      this.board.set(cell, piece);
    }
  }
}
