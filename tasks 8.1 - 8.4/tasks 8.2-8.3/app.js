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




// 4. https://leetcode.com/problems/count-square-sum-triples/description/?source=submission-ac
// Подсчитать количество квадратных троек
// **Квадратной тройкой (a, b, c) называется тройка целых чисел, для которой выполняется равенство:

// a² + b² = c².**

// Дано целое число n,
// нужно вернуть количество квадратных троек, удовлетворяющих условиям:

// 1 ≤ a, b, c ≤ n.
 
// Example 1:
// Input: n = 5
// Output: 2
// Explanation: The square triples are (3,4,5) and (4,3,5).
// Example 2:

// Input: n = 10
// Output: 4
// Explanation: The square triples are (3,4,5), (4,3,5), (6,8,10), and (8,6,10).

var countTriples = function (n) {
  let d = 0;

  for (let a = 1; a <= n; a++) {
    for (let b = 1; b <= n; b++) {
      let s = a * a + b* b;
      let c = Math.sqrt(s);
      if (c === Math.floor(c) && c<=n) {
        console.log(a,b)
        d++;
      }
    }

   
  }
   return d;
};

console.log(countTriples(5)); //2



//5. Найдите пары в отсортированном массиве, сумма которых равна target

// Пример:
// Ввод: nums = [1, 2, 3, 4], target = 4
// Вывод: [[1, 3]]

function sumOfElement(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  let result = [];

  while (left < right) {
    const sum = arr[left] + arr[right];

    if (sum < target) {
      left++;
    } else if (sum > target) {
      right--;
    } else {
      result.push([arr[left], arr[right]]);
      left++;
      right--;
    }
  }

  return result;
}

console.log(sumOfElement([1, 2, 3, 4], 4)); 
// → [ [1, 3] ]
