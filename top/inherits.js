var util = require('util');

// Родитель
function Animal(name) {
    this.name = name;
}

Animal.prototype.walk = function () {
    console.log("Ходит " + this.name)
};

// Потомок
function Rabit(name) {
    this.name = name;
}

util.inherits(Rabit, Animal);

Rabit.prototype.jump = function () {
    console.log("Прыгает " + this.name)
};

// Использование
var rabbit = new Rabit('наш кролик');
rabbit.walk();
rabbit.jump();
