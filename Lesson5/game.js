/*
Состояние игры: победа белого, победа черного, игра продолжается

Хранит информацию о:
Список фигур, которые были убиты
Чей сейчас ход
Сколько ходов прошло с начала игры
Всю историю ходов.
*/

class Game{
  constructor(){
    this.status = 0;//0 - игра продолжается, 1 - победа белого, -1 - победа черного
    this.deleted_piece = [];//для складирования объектов фигур
    this.move_white = true;//true - ход белых, false - ход черных
    this.count_move = 0; //счетчик ходов
    this.history_move = []; //список ходов
    this.chessboard = new ChessBoard(); //создаем доску
    this.chessboard.start_position();  //расставляем фигуры
  }

  move(piece, target){
    //проверяем target в массиве доступных piece.getAvalibleMove()
    //проверям что между peice.place и target клетки свободны (кроме коня)
    //если на клетке target фигура переносим в this.deleted_piece
    //меняем знаячения в this.chessboard.board и в peice.place
    //меняем  this.move_white на противоположное
    //увеличивам this.count_move
    //добавляем ход в this.history_move
    //проверяем условия окончания игры (мат, пат), если да, меняем this.status
  }

  is_end(){}//проверка условия окончания партии

}