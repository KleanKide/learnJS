
// Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, начиная от from и заканчивая to.

// Сделайте два варианта решения.

// Используя setInterval.
// Используя рекурсивный setTimeout.


function printNumbers(from, to){

     const timerId  = setInterval(()=>{
      if(from >= to){
        clearInterval(timerId)
      }
      console.log(from++)
     },1000)
  
 
    }
printNumbers(1,5)



function printNumbers(from, to) {
  let current = from;

  function go() {
    console.log(current);

    if (current < to) {
      current++;
      setTimeout(go, 1000); 
    }
  }

  go();
}

printNumbers(1, 5);



// Задача 3. Задержка перед сообщением
// Сделай функцию, которая принимает строку и время (в секундах), и выводит сообщение через это время.
function delayedMessage(msg, seconds) {
  setTimeout(() => {
    console.log(msg);
  }, seconds * 1000);
}

delayedMessage("Привет через 3 секунды!", 3);


// Задача 4. Очередь сообщений
// Есть массив строк. Нужно выводить каждую строку в консоль с интервалом 1 секунда.

function printMessages(messages) {
  let i = 0;
  let timer = setInterval(() => {
    console.log(messages[i]);
    i++;
    if (i === messages.length) {
      clearInterval(timer);
    }
  }, 1000);
}

printMessages(["Привет", "Как дела?", "Пора учиться JS", "Удачи!"]);


// Задача 5. Ускоряющийся таймер
// Выводи числа от 1 до 10, но каждое следующее число должно появляться быстрее (сначала через 1 секунду, потом через 0.9, потом 0.8 и т.д.).

function fastCounter(max) {
  let i = 1;
  let delay = 1000;

  function tick() {
    console.log(i);
    i++;
    delay -= 100; 
    if (i <= max) {
      setTimeout(tick, delay);
    }
  }

  setTimeout(tick, delay);
}

fastCounter(10);
