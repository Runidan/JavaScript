/*
3. Калькулятор

Создайте калькулятор позволяющий добавлять в него дополнительные методы и сохранять результат, 
по умолчанию должны присутствовать методы add, substract

Пример: 
const calculator = new Calc()

calculator.operation('31 + 32') // 63
calculator.operation('10 * 2') // 10
calculator.addOperation('/', (a, b) => a / b)
calculator.operation('10 / 2') // 5

Также, он должен хранить историю всех операций и выводить ее по запросу:
 
calculator.history()  [{operation: '+', operands: [31,32]}, {operation: '*', 
operands: [10,2]}, {operation: '/', operands: [10,2]}] 
 
И очищать историю
calculator.clearHistory()
calculator.history() // []
*/

function Calc() {
  this.historyBox = [];
  this.operations = new Map();

  this.history = function(){
    return this.historyBox;
  }

  this.clearHistory = function(){
    this.historyBox = [];
  }

  this.addOperation = function(operator, operation){
    this.operations.set(operator, operation);
  }

  this.operation = function(expression) {
    let expr_parts = expression.split(' ');
    let a = Number(expr_parts[0]);
    let b = Number(expr_parts[2]);
    let f = this.operations.get(expr_parts[1]);
    this.historyBox.push({operation: expr_parts[1], operands: [a, b]});
    return f(a, b); 
  }

  this.addOperation('+', (a, b) => a + b);
  this.addOperation('*', (a, b) => a * b);

}




