// 1. Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.
function sumTo(n){
  let s = 0
  for(let i = n; i > 0; i--){
      s+=i
  }
  return s
}
function sumTo(n){
  if(n===1){
    return n
  }
  return  n + sumTo(n-1)
}

function sumTo(n) {
  return n * (n + 1) / 2;
}

alert( sumTo(100) );
console.log(sumTo(100))

// 2.Вычислить факториал
function factorial(n){
  if(n===1 || n === 2){
    return n 
  }
  return n * (factorial(n -1))
}

console.log(factorial(4))

// 3.Числа Фибоначчи

function fib(n) { 
    if(n===1 || n === 2){
    return 1 
  }
  return fib(n-1)+fib(n-2)
 }
 console.log(fib(7))

//4. Вывод односвязного списка
let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

function printList(list){
  let current = list 
  while(current!==null){
    console.log(current.value)
    current = current.next
  }

}
console.log(printList(list))


function printListReverse(list) {
  if (list.next) {
    printListReverse(list.next); 

  }
  }
  console.log(list.value); 
  

//   5.Вывод односвязного списка в обратном порядке
function printReverseList(list) {
  let arr = [];
  let tmp = list;

  while (tmp) {
    arr.push(tmp.value);
    tmp = tmp.next;
  }

  for (let i = arr.length - 1; i >= 0; i--) {
    console.log( arr[i] );
  }
}

printReverseList(list);
