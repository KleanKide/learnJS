// 1. Создай объект counter, в котором есть:
// свойство count
// методы increment(), decrement(), show()
const counter = {
  count: 0,
  increment(){
    this.count++
    return this
  },
  decrement(){
    this.count--
    return this
  },
  show(){
    return console.log(this.count)
  }
}
counter.increment().increment().decrement().show()

// Задача 2: Создайте объект person с полями name, age, и методом sayHi.
let person = {
    name: "Alice",
    age: 28,
    sayHi() {
      console.log("Hi, I'm " + this.name);
    }
  };
  
  person.sayHi(); 
// Задача 3: Создайте объект car с полями brand, model и year, и метод для вывода информации о машине.
let car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2020,
    getInfo() {
      console.log(`Марка: ${this.brand}, Модель: ${this.model}, Год: ${this.year}`);
    }
  };
  
  car.getInfo();
// Задача 4 : Копируйте объект user с помощью Object.assign и проверьте, 
// что это не ссылка на исходный объект.

let user = { name: "Tom", age: 30 };
let copy = Object.assign({}, user);

copy.name = "Jerry";
console.log(user.name);  // "Tom"
console.log(copy.name);  // "Jerry"

// Задача 5: Создайте конструктор Person, который будет принимать name и age в качестве 
// аргументов и создавать объект с этими свойствами.

function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  
  let person1 = new Person("Tom", 25);
  console.log(person1.name);  // "Tom"

// Задача 6: Создайте объект, который при преобразовании в примитив возвращает строку.
let obj = {
    toString() {
      return "Привет";
    }
  };
  
  console.log(String(obj));
  
//Задача 7 Преобразование к строке
//  Сделай объект user, чтобы при String(user) возвращалось "Пользователь" (никаких Symbol'ов — только обычные методы)

const user = {
  toString() {
    return 'Пользователь';
  }
};

console.log(String(user)); 

// Задача 8: Символический контроль
//  Создай объект item, у которого при:
// +item → 0
// String(item) → "вещь"
// item == 1 → false
// Используй только Symbol.toPrimitive


const item = {
  [Symbol.toPrimitive](hint){
    if(hint === 'number') return 0
    if(hint === 'string') return 'Вещь'
    if(hint === 'default') return false
  }
}
console.log(+item)
console.log(String(item))
console.log(item === 1)

//  Задача 9: 
// 👉 Сделай объект tricky, который выдаёт true при tricky == 42,
// но String(tricky) возвращает [object Object] (то есть не переопределяй toString напрямую).

const tricky = {
  [Symbol.toPrimitive](hint){
    if(hint==='default') return 42
  }
}
console.log(tricky == 42)


// Задача 10:  Создай объект bad, который при любом преобразовании (+bad, String(bad), alert(bad))
// всегда выбрасывает ошибку "Cannot convert to primitive".
const bad = {
  [Symbol.toPrimitive](hint) {
    return {};
  }
};

console.log(String(bad)); //TypeError: Cannot convert object to primitive value
