// 1. Оставить только отрицательные числа
let numbers = [3, -1, 0, 5, -8, 10];
let result = numbers.filter(n => n < 0);
console.log(result); // [-1, -8]



// 2. Удвоить каждый элемент массива
let nums = [1, 2, 3];
let doubled = nums.map(n => n * 2);
console.log(doubled); // [2, 4, 6]



// 3. Найти сумму всех чисел в массиве
let nums = [1, 2, 3, 4];
let sum = nums.reduce((acc, n) => acc + n, 0);
console.log(sum); // 10

// 4. Удалите дубликаты из массива
let arr = [1, 2, 3, 2, 4, 1, 5];

let unique = arr.filter((el, index) => arr.indexOf(el) === index);

console.log(unique); // [1, 2, 3, 4, 5]


// 5 Переведите текст вида border-left-width в borderLeftWidth.
function camelize(str) {
    return str
        .split('-')

        .map((word, index) =>
            index == 0
                ? word
                : word[0].toUpperCase() + word.slice(1)



        )
        .join('');

}

console.log(camelize("my-long-word"));         // → "myLongWord"
console.log(camelize("background-color"));     // → "backgroundColor"
console.log(camelize("list-style-image"));     // → "listStyleImage"
console.log(camelize("webkit-transition"));    // → "webkitTransition"


//6. Фильтрация по диапазону

function filterRange(arr, a, b) {
    return arr.filter(item => (a <= item && item <= b));
}
let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);
console.log(filtered); // 3,1 
console.log(arr); // 5,3,8,1 


//7. Сортировать в порядке по убыванию
let arr = [5, 2, 1, -10, 8];
arr.sort((a, b) => b - a);

console.log(arr); // 8, 5, 2, 1, -10


//8.Скопировать и отсортировать массив

let arr = ["HTML", "JavaScript", "CSS"];

function copySorted(arr) {
    return arr.slice().sort();
}
let sorted = copySorted(arr);
console.log(sorted);
console.log(arr);


//9.Трансформировать в массив имён
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [vasya, petya, masha];
let names = users.map(item => item.name);

console.log(names); // Вася, Петя, Маша


//10.Получить средний возраст
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };
function getAverageAge(users) {
  return users.reduce((prev, user) => prev + user.age, 0) / users.length;
}
console.log( getAverageAge(arr) );