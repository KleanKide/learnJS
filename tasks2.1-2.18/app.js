// 1. Спрашивает у пользователя его имя через prompt()
// Выводит alert() с приветствием: "Привет, <имя>!"
// Спрашивает у него возраст
// Если возраст меньше 18, вывести alert("Доступ запрещён"), иначе alert("Добро пожаловать!")
// 📌 Дополнительно: попробуй преобразовать введённый возраст в число (Number()).

const userName = prompt("Введите ваше имя")
alert(`Привет ${userName}`)
const userAge = +prompt("Введите ваш возраст")
if(userAge < 18 ){
    alert("Доступ запрещён")
}
else{
    alert("Добро пожаловать!")
}


//2. Преобразование типов, арифметика, операторы сравнения
// 👉 Задача: Напиши программу, которая:
// Спрашивает два числа у пользователя
// Выводит их сумму, разность, произведение и деление

const firstNumber = +prompt("Введите число")
const secondNumber = +prompt("Введите число")
alert(`Сумма ${firstNumber + secondNumber}, \n Разность ${firstNumber - secondNumber}, \n Произведение ${firstNumber * secondNumber}, \n Деление ${firstNumber / secondNumber} `)



//3.Условное ветвление: if, '?', логические операторы
// 👉 Задача: Напиши программу, которая:
// Спрашивает у пользователя температуру на улице
// Если > 30 → alert("Очень жарко!")
// Если <= 30 и >= 15 → alert("Тепло")
// Если < 15 и > 0 → alert("Прохладно")
// Если <= 0 → alert("Холодно!")
// 📌 Попробуй использовать тернарный оператор ?!

const outsideTemp = prompt("Введите температуру на улице");
const message = (outsideTemp > 30) ? "очень жарко" : 
                (outsideTemp <=30 && outsideTemp >= 15 ) ? "Тепло":
                 "Холодно" 

        alert(message)

//4.Сумма чисел от 1 до N
// Попроси пользователя ввести число N и используй while, чтобы найти сумму всех чисел от 1 до N.

const userNum = +prompt("Введите число")
let sum = 0
let i = 1;

while(i<userNum){
    sum += i
    i++
}
console.log(sum)
for(let i = 1; i < userNum; i++){ ///также написал через for
    sum+=i 
}
console.log(sum)

// 5. Вывести четные числа от 2 до 20
// Используй for, чтобы вывести все чётные числа от 2 до 20.
for(let i = 2 ; i <= 20; i++){
    if(i % 2 === 0){
        console.log(i)
    }
    
}

//6.  Вывести ряд Фибоначчи
// Используй for, чтобы вывести первые 10 чисел Фибоначчи (0, 1, 1, 2, 3, 5, 8...).
function fib(n) {
    let a = 1;
    let b = 1;
    for (let i = 3; i <= n; i++) {
      let c = a + b;
      a = b;
      b = c;
    }
    return b;
  }
console.log(fib(3))  


// 7. Конструкция "switch"
// 1️⃣ Напиши код, который запрашивает у пользователя день недели и выводит "Понедельник", "Вторник" и т. д.
 const dayInWeek = +prompt("Введите день недели")
    switch(dayInWeek){
        case 1:
           console.log("Понедельник") 
           break
        case 2:
           console.log("Вторник") 
           break
        case 3:
           console.log("Среда") 
           break
        case 4:
           console.log("Четверг") 
           break
        case 5:
           console.log("Пятница") 
           break
         case 6:
           console.log("Суббота") 
           break
        case 7:
            console.log("Воскресенье") 
            break
        default:
            console.log("неизвестный день")
    }
    
//8. Переписать под тернарный оператор
// let num1 = 10,
//     num2 = 20,
//     result;

// if (result === null || result === undefined) {
//   if (num1 !== null && num1 !== undefined) {
//     result = num1;
//   } else {
//     result = num2;
//   }
// }

let result = (num1 ?? num2) ? num1 : num2;
  result ??= num1 ?? num2;