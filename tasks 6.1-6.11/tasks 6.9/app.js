// Создайте декоратор spy(func), который должен возвращать
//  обёртку, которая сохраняет все вызовы функции в своём свойстве calls.

function spy(func) {

  function wrapper(...args) {
    wrapper.calls.push(args);
    return func.apply(this, args);
  }

  wrapper.calls = [];

  return wrapper;
}

// Задерживающий декоратор
// важность: 5
// Создайте декоратор delay(f, ms), который задерживает каждый вызов f на ms миллисекунд. 

function delay(f, ms) {

  return function() {
    setTimeout(() => f.apply(this, arguments), ms);
  };

}

let f1000 = delay(alert, 1000);

f1000("test");

// Декоратор debounce
//  Предположим, пользователь набирает какой-то текст, и мы хотим отправить запрос на сервер,
//   когда ввод этого текста будет завершён.

// Нет смысла отправлять запрос для каждого набранного символа. 
// Вместо этого мы хотели бы подождать, а затем обработать весь результат.

// В браузере мы можем настроить обработчик событий – функцию, которая вызывается при каждом изменении
//  поля для ввода. Обычно обработчик событий вызывается очень часто, для каждого набранного символа.
//   Но если мы воспользуемся debounce на 1000мс, то он будет вызван только один раз, 
//   через 1000мс после последнего ввода символа.

function debounce(func, ms) {
  let timeID;
  return function() {
    clearTimeout(timeout);
    timeID = setTimeout(() => func.apply(this, arguments), ms);
  };
}



// Сделай декоратор doubleResult(fn), который:
// вызывает оригинальную функцию;
// возвращает результат, умноженный на 2.

// Пример:
function add(a, b) { return a + b }
function squareArgs(fn){
  return function(...args){
    const newVal = args.map(i => i * i)
    const result = fn(...newVal)
    return result
  }
}

const squaredAdd = squareArgs(add);

console.log(squaredAdd(2, 3)); 



// Сделай декоратор stringifyResult(fn), который:
// вызывает функцию;
// возвращает результат в виде строки.


function stringifyResult(fn){
  return function(...args){
    const newVal = fn(...args)
    const result = newVal.toString()
    return result 
  }
}
function sum(a, b) { return a + b }
const stringSum = stringifyResult(sum);
console.log(stringSum(5, 5)); // "10"


// Замер времени

// Напиши декоратор timer(fn),
// который измеряет, сколько миллисекунд заняло выполнение функции,
// и выводит это в консоль.


function timer(fn) {
  return function (...args) {
    const startTime = Date.now()
    const result = fn(...args)
    const endTime = Date.now()
    console.log(`Время выполнения: ${endTime - startTime} мс`)
    return result 
  }
}

function sum(a, b) {
  return a + b
}

const timedSum = timer(sum)
console.log(timedSum(5, 5))

// Напиши декоратор limit(fn, n),
// который позволяет вызвать функцию не более n раз.
// После этого она должна либо ничего не делать, либо возвращать сообщение вроде "достигнут лимит".

function limit(fn, n){
  let count = 0
  return function(...args){
    if(count >= n){
      return '"достигнут лимит"'
    }
    else{ 
       count++
      return fn(...args)
     
    }
  }
}

function sum(a, b) {
  return a + b
}

const limitedSum = limit(sum, 2)

console.log(limitedSum(1, 2)) 
console.log(limitedSum(3, 4)) 
console.log(limitedSum(5, 8)) 