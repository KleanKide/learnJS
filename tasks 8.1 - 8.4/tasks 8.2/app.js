// 1. Создай объект person, у которого есть метод sayHello().
// Затем создай новый объект student, который наследует от person
// и добавь ему метод study().
// Пусть student.sayHello() выводит имя, а student.study() — сообщение "Учусь!".

const person = {
  sayHello(){
    console.log('Привет')
  }
}

const student = Object.create(person)
student.study = function(){
  console.log('Учусь')
}
student.sayHello() //Привет
student.study() //Учусь

// 2.Заимствуй у массива метод forEach, чтобы перебрать псевдомассив:

const arrayLike = { 0: "М", 1: "и", 2: "р", length: 3 };

Array.prototype.forEach.call(arrayLike, el=>console.log(el))
arrayLike.forEach = Array.prototype.forEach
console.log(arrayLike.forEach(i=>console.log(i))) 



// 3. Напиши функцию-конструктор User(name),
// которая создаёт объект с полем name и методом sayHi(),
// который выводит "Привет, <имя>".


function User(name){
  this.name = name
}
User.prototype.sayHi = function(){
  console.log('Привет ' + this.name)
}


const u = new User("Aboba");
const u2 = new User("newAboba");
u.sayHi(); // Привет, Aboba
u2.sayHi(); // Привет, newAboba
