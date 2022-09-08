describe("Test count_positive_numbers function", function() {

  it('Является ли count_positive_numbers функцией', function() {
    assert.isFunction(count_positive_numbers);
  });

  it('Функция возвращает объект', function() {
    var result = count_positive_numbers([-91, -93, -45, 67, 96, 40, -34, 96, -42, 58]);
    assert.isObject(result)
  });

  it('Возвращаемый объект имеет count - количество положительных чисел', function() {
    var result = count_positive_numbers([-91, -93, -45, 67, 96, 40, -34, 96, -42, 58]);
    assert.exists(result.count, 'в возвращаемом объекте отсутствует count');
  });

  it('Возвращаемый объект имеет sum - сумма положительных чисел', function() {
    var result = count_positive_numbers([-91, -93, -45, 67, 96, 40, -34, 96, -42, 58]);
    assert.exists(result.count, 'в возвращаемом объекте отсутствует sum');
  });

  it("Cчитает количество положительных чисел", function() {
    assert.equal(count_positive_numbers([-91, -93, -45, 67, 96, 40, -34, 96, -42, 58]).count, 5);
    assert.equal(count_positive_numbers([1, 2, 3, -2, 4, 5, -34, 6, -42, 7]).count, 7);
    assert.equal(count_positive_numbers([-1]).count, 0);
  });

  it("Cчитает сумму положительных чисел", function() {
    assert.equal(count_positive_numbers([-91, -93, -45, 67, 96, 40, -34, 96, -42, 58]).sum, 357);
    assert.equal(count_positive_numbers([1, 2, 3, 4, 5]).sum, 15);
  });

  it('Принимает пустой массив', function() {
    assert.equal(count_positive_numbers([]).count, 0);
    assert.equal(count_positive_numbers([]).sum, 0);
  });

  it('Считает только числовые значения в массиве', function() {
    assert.equal(count_positive_numbers(["-1", "2", 'ru', true, false, 3.14]).count, 1);
    assert.equal(count_positive_numbers(["-1", "2", 'ru', true, false, 3.14]).sum, 3.14);
  });

  it('Выбрасывает исключение, если передать не массив', function() {
    assert.throw(() => count_positive_numbers('string'), 'необходимо передать массив');
  });

});

// Тест функции для фильтрации массива чисел по убыванию
describe('Тест функции фильтрации массива чисел по убыванию', function () {
  let arr = sortDesc([-20, -10, 0, 10, 20, 30]);
  
  it('sortDesc является функцией', function() {
    assert.isFunction(sortDesc);
  });
  
  it('функция возвращает массив', function() {
    assert.isArray(arr);
  });
  
  it('Проверка работы функции', function() {
    assert.deepEqual(arr, [30, 20, 10, 0, -10, -20]);
  });

  it('Тест с нулевым массивом', function() {
    assert.equal(sortDesc([]), 0);
  });

  it('Выбрасывает исключение, если передать не массив', function() {
    assert.throw(() => sortDesc('string'), 'arr.sort is not a function');
  });

});

// Тест функции для фильтрации массива по длине слов
describe('Тест функции для фильтрации массива по длине слов', function () {
  const fruits = ['lime', 'orange', 'apple', 'banana', ''];

  
  it('filterByLength является функцией', function() {
    assert.isFunction(filterByLength);
  });

  it('проверить работу фукции с корректными данными', function() {
    assert.deepEqual(filterByLength(fruits, 0, 5), [ 'lime', 'apple', '' ]);
  });

  it('проверить работу фукции с данными тругих типов', function() {
    assert.deepEqual(filterByLength(['lime', 'orange', 'apple', 'banana', true, false, 10], 0, 5), [ 'lime', 'apple' ]);
  });

  it('Выбрасывает исключение, если диапазон не задан числами', function() {
    assert.throw(() => filterByLength([fruits], 'start', true), 'диапазон должен быть задан числами integer');
  });

});

// Кэширование
describe('Тест функции для фильтрации массива по длине слов', function () {
  let calc = cache();
  
  it('cache является функцией', function() {
    assert.isFunction(cache);
  });

  it('cache возвращает функцию', function() {
    assert.isFunction(cache());
  });

  it('выбрасывает ошибку, если аргумент не является числом', function() {
    assert.throw(() => calc(3, '10'), 'аргумент не является числом');
  });

  it('проверка работы с корректными данными', function() {
    assert.deepEqual(calc(2, 10), { value: 1024, fromCache: false});
    assert.deepEqual(calc(2, 10), { value: 1024, fromCache: true});
  });  

});

// Реализуйте функцию MoneyBox
describe('Тест функции MoneyBox', function () {
  it('MoneyBox является функцией', function() {
    assert.isFunction(MoneyBox);
  });

  const box = new MoneyBox();

  it('метод getAmount существует', function() {
    assert.exists(box.getAmount());
  });

  it('проверка работы с корректными данными', function() {
    box.addCoin();
    box.addCoin();
    assert.equal(box.getAmount(), 2)
  });
});

// Калькулятор
// Система продажи билетов
