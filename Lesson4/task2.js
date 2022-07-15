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
  this.color = 'white';
  this.health = 100;
}

function Powerboat(power, hull) {
  this.power = power;
  this.hull = hull;
  this.type = 'power_boat';
}

Powerboat.prototype = new Ship();

function SailingShip(masts, sailArea) {
  this.masts = masts;
  this.sailArea = sailArea;
  this.type = 'sailing_ship';

}

SailingShip.prototype = new Ship();

function ShipRope(type) {
  this.type = type;

  // Ремонтировать корабли - Должен проверяться тип корабля, работать только с кораблями своего типа
  this.repair_ship = function(ship) {
    if (this.type === ship.type){
      ship.health = 100;
    }
  }

  // Перекрашивать корабли - Можно красить любые корабли
  this.recolor_ship = function(ship, color) {
    ship.color = color;
  }

   // Обменивать старый корабль на новый - Можно обменивать только корабли того же типа
   this.change_ship = function(ship, a, b) {
    if (ship.type === this.type){
      return this.build_ship(a, b);
    }
  }


}


function PowerShipRope() {
  this.type = 'power_boat';

  this.build_ship = function(a, b) {
    return new Powerboat(a, b);
  }

 
}

PowerShipRope.prototype = new ShipRope();

function SailShipRope() {
  this.type = 'sailing_ship';

  this.build_ship = function(a, b) {
    return new SailingShip(a, b);
  }
}

SailShipRope.prototype = new ShipRope();


// let rope = new PowerShipRope();
// console.log(rope);
// let sh = rope.build_ship(2, 5);
// console.log(sh);
// console.log(rope.change_ship(sh, 16, 2));
// console.log(sh.health);
// sh.health = 50;
// console.log(sh);
// rope.repair_ship(sh);
// console.log(sh.health);
// let sh2 = rope.change_ship(sh, 15, 2);
// console.log(sh2);