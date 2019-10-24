// class, prototype
/*
Реализовать конструктор в ES6 синтаксисе (также используйте аргументы по умолчанию):

function Component(tagName) {
  this.tagName = tagName || 'div';
  this.node = document.createElement(tagName);
}

Пример вызова:

const comp = new Component('span');
*/

class Component {
  constructor(tagName = "div") {
    this.TagName = tagName;
  }
}
const span = new Component("span");
const noName = new Component();

console.log(span);
console.log(noName);

/*
Реализовать конструктор и методы в ES6 синтаксисе:

function Component(tagName) {
  this.tagName = tagName || 'div';
  this.node = document.createElement(tagName);
}

Component.prototype.setText = function (text) { 
  this.node.textContent = text;
};
 */

class Component2 {
  constructor(tagName = "div", node) {
    this.tagName = tagName;
    this.node = document.createElement(tagName);
  }

  setText(text) {
    return `${(this.node.textContent = text)}`;
  }
}

const tagText = new Component2("span", "span");
console.log(tagText.setText("test"));

// =======================================

function Component3(tagName) {
  this.tagName = tagName || "div";
  this.node = document.createElement(tagName);
}

Component3.prototype.setText = function(text) {
  return `this.node.textContent = text`;
};

const newComponent = new Component3("span", "span");
console.log(newComponent.setText("text"));

/*Создать класс калькулятора который будет принимать стартовое значение и у него будут методы сложить, вычесть, умножить , разделить. Также у него должны быть геттер и сеттер для получения и установки текущего числа с которым производятся вычисления. */

class Calc {
  constructor(num) {
    this.num = num;
  }

  plus() {
    return this.num + 1;
  }

  minus() {
    return this.num - 2;
  }

  multiply() {
    return this.num * 2;
  }

  part() {
    return this.num / 2;
  }

  get result() {
    return `${this.plus() + this.minus() + this.multiply() + this.part()}`;
  }

  set result(newNum) {
    this.num = newNum;
  }
}

const calculate = new Calc(10);
console.log(calculate.result);
calculate.result = 20;
console.log(calculate.result);

/*Есть класс Planet
function Planet(name) {
    this.name = name;
    this.getName = function () {
        return 'Planet name is ' + this.name;
    }
}
Создать наследника от Planet, который будет называться PlanetWithSatellite и будет
принимать, кроме name, название спутника (satelliteName). Переопределите метод
getName для PlanetWithSatellite так, чтобы он возвращал ту же самую строчку +
дополнительный текст 'The satellite is' + satelliteName.
Например:
var earth = new PlanetWithSatellite('earth', 'moon');
earth.getName(); // 'Planet name is earth. The satellite is moon’
 */

function Planet(name) {
  this.name = name;
  this.getName = function () {
      return 'Planet name is ' + this.name;
  }
}

function PlanetWithSatellite(name, satelliteName) {
  Planet.apply(this, arguments);

  this.satelliteName = satelliteName;

  this.getName = function() {
    return `Planet name is ${this.name} and her satellite is ${this.satelliteName}`;
  }
}

const planetName = new PlanetWithSatellite('Earth','Moon');

console.log(planetName.getName());

/*2. Создайте класс “Здание” (пусть у него будет имя, количество этажей, метод “получить количество этажей” и метод “установить количество этажей”).
Создайте наследников этого класса:
классы “Жилой дом” и “Торговый центр”. Используйте функциональное наследование 

У жилого дома появится свойство “количество квартир на этаже”, а метод “получить количество этажей” должен вернуть объект вида {этажи: 5, всегоКвартир: 5 * количествоКвартир}

У торгового центра появится свойство “количество магазинов на этаже”, а метод “получить количество этажей” должен вернуть объект вида {этажи: 3, всегоМагазинов: 3 * количествоМагазинов}
От каждого класса создать экземпляр (дом, торговый центр)
 */

function Build({name, numbFlors}) {

    this.name = name;
    this.numbFlors = numbFlors;


  this.getNumberFlors = function() {
    return `This build is a ${this.name}. It has ${this.numbFlors}.`;
  }

  this.getNumbFlors = function(value) {
    this.numbFlors = value;
    return `This build is a ${this.name}. It has ${this.numbFlors}.`;
  }
}

const building = new Build({
  name: 'build 1',
  numbFlors: 10
});

console.log(building.getNumberFlors());
building.getNumbFlors = 15;
console.log(building.getNumbFlors);


function Home({name, numbFlors, numApartment}) {
  Build.apply(this, arguments);

  this.numApartment = numApartment

  this.getNumbApartment = function() {
    return {
      name: this.name,
      numbFlors: `${this.numbFlors} flors * ${this.numApartment} apartmens`
    }
  };
}

Home.prototype = Object.create(Build.prototype);

const sweetHome = new Home({
  name: 'Sweet Home',
  numbFlors: 18,
  numApartment: 8
});

console.log(sweetHome.getNumbApartment());

//================================

function ShopCenter({name, numbFlors, numShops}) {
  Build.apply(this, arguments);

  this.numShops = numShops

  this.getNumbShops = function() {
    return {
      name: this.name,
      numbFlors: `${this.numbFlors} flors * ${this.numShops} shops`
    }
  };
}

ShopCenter.prototype = Object.create(Build.prototype);

const shopping = new ShopCenter({
  name: 'TRC',
  numbFlors: 4,
  numShops: 8
});

console.log(shopping.getNumbShops());

