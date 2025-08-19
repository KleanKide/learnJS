
// 1. Подсчёт количества вхождений слов в массиве с использованием Map
const words = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
const qwerty = new Map();

for (const word of words) {
 qwerty.set(word, (qwerty.get(word) || 0) + 1);
}

console.log(qwerty);
Map { 'apple' => 3, 'banana' => 2, 'orange' => 1 }


// 2. Отслеживание уже обработанных объектов с помощью WeakSet
const items = [
  { id: 1, name: "Apple" },
  { id: 2, name: "Banana" },
  { id: 3, name: "Orange" }
];
const weakSet = new WeakSet();

function process(array) {
  for (let obj of array) {
    if (!weakSet.has(obj)) {
      console.log(`Обрабатываю: ${obj.name}`);
      weakSet.add(obj);
    } else {
      console.log(`Уже обработан: ${obj.name}`);
    }
  }
}

process(items);
// Консоль:
// Обрабатываю: Apple
// Обрабатываю: Banana
// Обрабатываю: Orange

console.log("--- Повторный запуск ---");
// Консоль:
// --- Повторный запуск ---

process(items);
// Консоль:
// Уже обработан: Apple
// Уже обработан: Banana
// Уже обработан: Orange

// 3.Сумма значений объекта (сумма зарплат)
let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

function sumSalaries(obj){
  let sum = 0
  let arr = Object.values(salaries)
   for(let i of arr){
    sum+=i
   }
      console.log(sum)
}

console.log( sumSalaries(salaries) ); // 650

// 4.Подсчёт числа свойств объекта   я решил так 
let user = {
  name: 'John',
  age: 30
};
function count(obj){
  let counter = 0
  for(let i in Object.values(obj)){
  counter++
  }
  console.log(counter);
}

console.log( count(user) );

// а надо было 
function count(obj) {
  return Object.keys(obj).length;
}

// 5. Создай WeakSet, где будут храниться объекты-страницы:
let page1 = {url: "/home"};
let page2 = {url: "/about"};
let page3 = {url: "/contact"};

let visitedPage = new WeakSet();

let page1 = {url: "/home"};
let page2 = {url: "/about"};
let page3 = {url: "/contact"};


function markVisited(page){
  visitedPage.add(page)
} 
function isVisited(page){
 return visitedPage.has(page)
}
markVisited(page1);
markVisited(page3);

console.log(isVisited(page1)); // true
console.log(isVisited(page2)); // false
console.log(isVisited(page3)); // true



// 6. Cоздай WeakMap, где ключом будет объект-пользователь, а значением — число вызовов функции visit(user).
//  Реализуй функцию visit(user), которая увеличивает счётчик для каждого конкретного пользователя.
let weakMap = new WeakMap();

// Функция visit(user)
function visit(user) {
  if (weakMap.has(user)) {
    let count = weakMap.get(user);
    count++;
    weakMap.set(user, count);
    return count;
  } else {
    weakMap.set(user, 1);
    return 1;
  }
}

const user1 = {name: "John"};
const user2 = {name: "Pete"};

console.log(visit(user1)); // 1
console.log(visit(user1)); // 2
console.log(visit(user2)); // 1
console.log(visit(user1)); // 3
console.log(visit(user2)); // 2
