/*
Реализовать 2 разных типа верфей, каждая из которых должна будет специализироваться на своем типе кораблей 

Для моторных кораблей доступны следующие специфичные характеристики:
Мощность двигателя
Материал корпуса

Для парусных кораблей доступны следующие специфичные характеристики:
Количество мачт
Общая площадь парусов

Что можно делать в верфи:
Строить корабли - только своего типа
Ремонтировать корабли - Должен проверяться тип корабля, работать только с кораблями своего типа
Перекрашивать корабли - Можно красить любые корабли
Обменивать старый корабль на новый - Можно обменивать только корабли того же типа

Главное требование: Чистый код, весь дублирующийся код для кораблей и верфей должен быть вынесен в их прототипы.
Задание потребует воспользоваться гуглом для решения. 

Верфи и корабли должны создаваться с помощью функций-конструкторов.
*/

function ShipRope(typeShip) {
 
  // Строить корабли - только своего типа
  this.build_ship = function(a, b) {
    return new typeShip(a, b);
  }

  // Ремонтировать корабли - Должен проверяться тип корабля, работать только с кораблями своего типа
  this.repair_ship = function(ship) {
    if (ship.constructor === typeShip){
      console.log('Восстанавливаем здоровье');
      ship.health = 100;
    }
  }

  // Обменивать старый корабль на новый - Можно обменивать только корабли того же типа
  this.change_ship = function(ship, a, b) {
    if (ship.constructor === typeShip){
      return this.build_ship(a, b);
    }
  }

  // Перекрашивать корабли - Можно красить любые корабли
  this.recolor_ship = function(ship, color) {
    ship.color = color;
  }
  
}

function PowerShipRope() {
  return new ShipRope(Powerboat);
}

function SailShipRope() {
  return new ShipRope(Powerboat);
}

function Ship() {
  this.color = 'white';
  this.health = 100;
}

function Powerboat(power, hull) {
  Ship.call(this);
  this.power = power;
  this.hull = hull;
}


function SailingShip(masts, sailArea) {
  Ship.call(this)
  this.masts = masts;
  this.sailArea = sailArea;
}


// let rope = new PowerShipRope();
// let sh = rope.build_ship(7, 3);
// console.log(sh);
// sh.health = 50;
// console.log('здоровье ' + sh.health);
// rope.repair_ship(sh);
// console.log('здоровье ' + sh.health);
// console.log('color: ' + sh.color);
// rope.recolor_ship(sh, 'green');
// console.log('color: ' + sh.color);
