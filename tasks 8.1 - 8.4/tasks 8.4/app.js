// Задачки из learn js


// 1. Имеется объект dictionary, созданный с помощью Object.create(null) 
// для хранения любых пар ключ/значение.
// Добавьте ему метод dictionary.toString(), который должен 
// возвращать список ключей, разделённых запятой. Ваш toString 
// не должен выводиться при итерации объекта с помощью цикла for..in.


let dictionary = Object.create(null);

Object.defineProperty(dictionary, 'toString', {
  value(){
    return Object.keys(this).join(',')
    
  },
  enumerable: false
})

dictionary.apple = "Apple";
dictionary.__proto__ = "test"; 
for(let key in dictionary) {
  console.log(key); // "apple","__proto__"
}
console.log(dictionary); 





// 2. Разница между вызовами
// Давайте создадим новый объект rabbit:
// Все эти вызовы делают одно и то же или нет?

function Rabbit(name) {
  this.name = name;
}
Rabbit.prototype.sayHi = function() {
  alert(this.name);
};

let rabbit = new Rabbit("Rabbit");

rabbit.sayHi();                        // Rabbit
Rabbit.prototype.sayHi();              // undefined
Object.getPrototypeOf(rabbit).sayHi(); // undefined
rabbit.__proto__.sayHi();              // undefined

// Потому что вызывается метод на прототипе  а не на экземпляре.
// Внутри метода this указывает на сам Rabbit.prototype, т.е этот объект:
// {
//    sayHi: function() { ... }
// }
// У прототипа нет свойства name: Rabbit.prototype.name
// Поэтому вывод undefined