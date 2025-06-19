//  Задача 1 — Удалить повторяющиеся символы
// Напиши функцию removeDuplicates(str), которая возвращает строку без повторяющихся символов, сохраняя порядок.
function removeDuplicate(str){
    const arr = [];
   
    for(let char of str){
        if(!arr.includes(char)){
           arr.push(char)
           
        }
         
    }
      return arr.join('');
}
console.log(removeDuplicate('абракадабра')) //абркд


// Задача 2 — Проверка анаграммы
// Функция isAnagram(str1, str2) должна вернуть true, если строки — это анаграммы (состоят из одних и тех же букв в любом порядке).
function isAnagram(str1, str2) {
  let s1 = str1.toLowerCase().split('').sort().join('');
  let s2 = str2.toLowerCase().split('').sort().join('');
  
  return s1 === s2;
}
console.log(isAnagram("пила", "липа"));  // true



// Задача 3 — Удалить и вывести первый элемент
let arr = ["первый", "второй", "третий"];
let first = arr.shift();
console.log(first); // "первый"
console.log(arr);   // ["второй", "третий"]



// Задача 4 — Заменить все "яблоко" на "апельсин"
let arr = ["яблоко", "банан", "яблоко", "груша"];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === "яблоко") {
    arr.splice(i, 1, "апельсин");
  }
}
console.log(arr); // ["апельсин", "банан", "апельсин", "груша"]


// Задача 5 — Проверка анаграммы Перевернуть массив без метода .reverse()
function reverseArray(arr) {
  let result = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i]);
  }
  return result;
}

reverseArray([1, 2, 3]) // [3, 2, 1]