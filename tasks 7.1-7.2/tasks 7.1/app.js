// 1) Контекст в колбэке
// Есть объект и таймер. Исправь код, чтобы через 500 мс вывелось Привет, Марат, не теряя this:
const user = {
  name: 'Марат',
  hi() {
    setTimeout(()=>console.log('Привет '+ this.name),  500);
  }
};
console.log(user.hi());

// 2) Короткий map
// Преобразуй массив имён в массив приветствий одной строкой стрелкой с неявным возвратом:

const names = ['Олег', 'Анна', 'Сергей'];
const greetings = names.map(i => 'Привет, ' + i);
console.log(greetings);

const makeUser = (name) => ({ name, active: true });
const u = makeUser('Олег');
console.log(u);


// 4. Короткий квадрат
// Сделай стрелочную функцию square,
// которая возвращает квадрат числа без return и без фигурных скобок.


console.log(square(5)); // 25

const square = (num) =>num * num
console.log(square(2))

// 5.Сумма с Rest-параметром

// Напиши стрелочную функцию sum, которая принимает любое количество чисел
// и возвращает их сумму.
// Используй rest-параметр (...) и не используй return.
const sum = (...rest) => rest.reduce((acc, n) => acc + n, 0);
console.log(sum(1, 2, 3, 4)); // 10

// 6. Длина имён

// Напиши стрелочную функцию, которая принимает массив строк
// и возвращает массив их длин.

const names = ['Аида', 'Кайрат', 'Марат'];
const lengths = (arr) => {
  const newArr = arr.map(i=>i.length)
  return newArr
}
console.log(lengths(names));

const counter = () =>{
  let count = 0
  return  function(){
    ++count
  }
}

const count = counter();
console.log(count()); 
console.log(count()); 
console.log(count()); 

// 7. Комбинация map, filter и reduce

// Используя только стрелочные функции, посчитай сумму чётных чисел, возведённых в квадрат, из массива:

const arr = [1, 2, 3, 4, 5, 6];

const customFilter = (arr) => {
  const evenNumbers = arr
    .filter((elem) => elem % 2 === 0)
    .map((elem) => elem * elem)
    .reduce((acc, i) => acc + i, 0);
  return evenNumbers;
};
console.log(customFilter(arr));



// 8. Создай объект user с помощью Object.defineProperty, у которого:

// есть свойство name со значением "Oleg",

// свойство не должно быть изменяемым (writable: false),

// но должно быть видно при переборе (enumerable: true),

// и должно быть удаляемым (configurable: true).
const user = {}
Object.defineProperty(user,'name', {
  value: 'Oleg',
  writable:false,
  enumerable:true,
  configurable:true
})
const keys = Object.keys(user)
console.log(keys)
delete(user.name)
user.name = 'neOleg'
console.log(user.name)