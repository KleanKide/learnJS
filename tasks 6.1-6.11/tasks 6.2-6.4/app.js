// Задача 1

// Напиши функцию sum, которая принимает любое количество чисел и возвращает их сумму.

function sum(...numbers) {
  return numbers.reduce((acc, n) => acc + n, 0);
}

console.log(sum(1, 2, 3));        // 6
console.log(sum(5, 10, 15, 20));  // 50
console.log(sum());               // 0


// Задача 2

// Создай копию массива и измени её, не трогая оригинал.

const original = [10, 20, 30];
const copy = [...original]; 

copy.push(40);

console.log(original); // [10, 20, 30]
console.log(copy);     // [10, 20, 30, 40]


// Задача 3

// Объедини два объекта и добавь новые свойства.

const user = { name: "Alex", age: 25 };
const extra = { country: "USA" };

const merged = { ...user, ...extra, active: true };

console.log(merged);
// { name: 'Alex', age: 25, country: 'USA', active: true }


// Задача 4 

// Есть функция maxOfArray, которая должна находить максимум. Передай в неё массив, используя spread.


function maxOfArray(...nums) {
  return Math.max(...nums);
}

const arr = [7, 2, 10, 4];
console.log(maxOfArray(...arr)); // 10


// 🔹 Задача 5. Генератор степеней

// Сделай функцию makePow, которая принимает число n и возвращает функцию возведения в степень n.


function makePow(n) {
  return function(x) {
    return x ** n;
  };
}

const square = makePow(2);
const cube = makePow(3);

console.log(square(5)); // 25
console.log(cube(2));   // 8

// Задача 6. Фильтр по диапазону

// Напиши функцию inBetween(a, b), которая возвращает функцию-предикат. Эта функция будет проверять, входит ли число в диапазон [a, b].

function inBetween(a, b) {
  return function(x) {
    return x >= a && x <= b;
  };
}

const arr = [1, 2, 3, 4, 5, 6, 7];

console.log(arr.filter(inBetween(3, 6))); // [3, 4, 5, 6]


// Задача 7. Счётчик с методами

// Сделай функцию createCounter, которая возвращает объект с методами:

// inc() — увеличить на 1

// dec() — уменьшить на 1

// get() — получить текущее значение

function createCounter(initial = 0) {
  let count = initial;
  return {
    inc: () => ++count,
    dec: () => --count,
    get: () => count
  };
}

const counter = createCounter(5);

console.log(counter.get()); // 5
console.log(counter.inc()); // 6
console.log(counter.dec()); // 5
