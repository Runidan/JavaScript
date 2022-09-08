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
    assert.throw(() => {count_positive_numbers('string')}, 'необходимо передать массив');
  });

});