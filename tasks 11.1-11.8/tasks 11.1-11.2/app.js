// Задача 1. Простой колбэк
// Напиши функцию doAfter(seconds, callback), которая:
// ждёт seconds секунд
// потом вызывает callback

function doAfter(delay, callback) {
  setTimeout(callback, delay * 1000);
}

doAfter(2, () => {
  console.log("Прошло 2 секунды");
});

// Задача 2. Колбэк с данными
// Напиши функцию doubleNumber(num, callback), которая:
// через 1 секунду
// вызывает callback с числом num * 2
// Пример:

function doubleNumber(num, callback) {
  setTimeout(() => {
    callback(num * 2);
  }, 1000);
}

doubleNumber(5, (result) => {
  console.log(result); // 10
});

// Уровень 2 — error-first callback
// Задача 3. Проверка числа
// Напиши функцию checkPositive(num, callback):
// если num отрицательный то выведи Number is negative
// если не отрицательный то выведи просто число
function checkPositive(num, callback) {
  if (num < 0) {
    callback(new Error("Number is negative"));
  } else {
    callback(null, num);
  }
}

checkPositive(-3, (err, result) => {
  if (err) console.error(err.message);
  else console.log(result);
});

// Задача 4. Деление с ошибкой
// Напиши функцию divide(a, b, callback):
// если b === 0 → ошибка
// иначе → результат деления

function divide(a, b, callback) {
  if (b === 0) {
    callback(new Error("b is 0"));
  } else {
    callback(null, a / b);
  }
}

// 5 Свой forEach
// Реализуй аналог:

Array.prototype.myForEach = function (callback) {
  const arr = this;
  for (let index = 0; index < arr.length; index++) {
    callback(arr[index], index, arr);
    console.log(index);
  }
};

// 6. создать собсвтвенный map
Array.prototype.myMap = function (callback) {
  const arr = this;
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(callback(arr[i], i, arr));
  }
  return newArr;
};

// 7. Создание функции, возвращающей Promise с отложенным результатом
function promise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(10);
    }, 1000);
  });
}
promise().then((v) => console.log(v));

//  8.Создание Promise с обработкой ошибки (reject)
function promiseError() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error("fail"));
    }, 1000);
  });
}
promiseError().catch((e) => {
  console.log(e);
});



// Долг
// как обработать 
function myError(x){
    if(typeof x!=='number'){
        throw new ValueError('should be number')
    }
    return x  
}

try {
    setTimeout(() => {
        myError('2')
    }, 0);    
} catch(err) {
    if (err instanceof Error) {
        console.log(err.message);
    }
    
    throw new Error('internal error');
}

// тут кэтч не сработает потому что сеттаймаут асинхронная функция, 
//а трай кэтч ловит ошибки только в синхронном коде.

// try закончился
// ошибка произошла ПОЗЖЕ
// ловить уже некому

// можно так : 


setTimeout(() => {
  try {
    myError('2')
  } catch (err) {
    console.log(err.message)
  }
}, 0)

// либо так 

function myError(x) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof x !== 'number') {
        reject(new Error('should be number'))
      } else {
        resolve(x)
      }
    }, 1000)
  })
}

myError('2')
  .catch(err => console.log(err.message))
