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
function Ship() {
  this.color = 20;
  this.health = 100;
}

function Powerboat(power, hull) {
  Ship.call(this);
  this.power = power;
  this.hull = hull;
}

Powerboat.prototype = Object.create(Ship.prototype);

Object.defineProperty(Powerboat.prototype, 'constructor', {
  value: Powerboat,
  enumerable: false, 
  writable: true });

function SailingShip(masts, sailArea) {
  Ship.call(this)
  this.masts = masts;
  this.sailArea = sailArea;
}

SailingShip.prototype = new Ship();

Object.defineProperty(SailingShip.prototype, 'constructor', {
  value: SailingShip,
  enumerable: false, 
  writable: true });

function ShipRope(type) {
 
  // Перекрашивать корабли - Можно красить любые корабли
  this.recolor_ship = function(ship, color) {
    ship.color = color;
  }
}


function PowerShipRope() {
  // Строить корабли - только своего типа
  this.build_ship = function(a, b) {
    return new Powerboat(a, b);
  }

  // Ремонтировать корабли - Должен проверяться тип корабля, работать только с кораблями своего типа
  this.repair_ship = function(ship) {
    if (ship.constructor === Powerboat){
      console.log('Восстанавливаем здоровье');
      ship.health = 100;
    }
  }

    // Обменивать старый корабль на новый - Можно обменивать только корабли того же типа
    this.change_ship = function(ship, a, b) {
    if (ship.constructor === Powerboat){
      return this.build_ship(a, b);
    }
  }
}

PowerShipRope.prototype = new ShipRope();

Object.defineProperty(PowerShipRope.prototype, 'constructor', {
  value: PowerShipRope,
  enumerable: false, 
  writable: true });

function SailShipRope() {

  // Строить корабли - только своего типа
  this.build_ship = function(a, b) {
    return new SailingShip(a, b);
  }

  // Ремонтировать корабли - Должен проверяться тип корабля, работать только с кораблями своего типа
  this.repair_ship = function(ship) {
    if (sh.constructor === SailingShip){
      ship.health = 100;
    }
  }

  // Обменивать старый корабль на новый - Можно обменивать только корабли того же типа
  this.change_ship = function(ship, a, b) {
    if (ship.constructor === SailingShip){
      return this.build_ship(a, b);
    }
  }
}

SailShipRope.prototype = new ShipRope();

Object.defineProperty(SailShipRope.prototype, 'constructor', {
  value: SailShipRope,
  enumerable: false, 
  writable: true });

let sh = new Powerboat(7, 3);
console.log('color: ' + sh.color);
console.log('здоровье ' + sh.health);
let rope = new PowerShipRope();
sh.health = 50;
console.log('здоровье ' + sh.health);
rope.repair_ship(sh);
console.log('здоровье ' + sh.health);
console.log('color: ' + sh.color);
rope.recolor_ship(sh, 'green');
console.log('color: ' + sh.color);
