// Задача 1:  Округление до заданной точности
// Напиши функцию roundTo(value, digits), которая округляет число value до digits знаков после запятой.
function roundTo(value, digits){
  const sum = value.toFixed(digits)
  return +sum
}
console.log(roundTo(1.545 , 10))

// Задача 2: Напиши функцию analyzeNumber(input), которая принимает строку и:
// 🔍 1. Преобразует строку в число (используй Number, parseInt, parseFloat)
// Попробуй использовать все три, и выведи результат каждого
// ✅ 2. Проверяет:
// Является ли значение NaN (isNaN)
// Является ли оно конечным числом (isFinite)
// Является ли оно целым (Number.isInteger)
// Округления с Math.round, Math.floor, Math.ceil, Math.trunc

function analyzeNumber(input) {
  const num = Number(input);

  return {
    original: input,
    number: num,
    parseInt: parseInt(input),
    parseFloat: parseFloat(input),
    isNaN: isNaN(num),
    isFinite: Number.isFinite(num),
    isInteger: Number.isInteger(num),
    round: Math.round(num),
    floor: Math.floor(num),
    ceil: Math.ceil(num),
    trunc: Math.trunc(num),
    fixed: num.toFixed(2)
  };
}

console.log(analyzeNumber("12.345"));

// Задача 3: Корректный ввод и округление
// Напиши функцию, которая:
// Принимает строку от пользователя.
// Преобразует её в число с плавающей точкой.
// Проверяет, является ли это конечным числом (используй isFinite).
// Если это корректное число:
// Округляет его до двух знаков после запятой (toFixed)
// Возвращает строку вида:
// "Округлённое значение: 12.35"
// Если число некорректное:
// Верни: "Ошибка: введите корректное число"

function correctedNumber(value){
  const toNum = Number(value)
  if(Number.isFinite(toNum)){
    const sum = +toNum.toFixed(2)
    return sum
  }
  return value
 
  
}
console.log(correctedNumber('1.2543'))

// Задача 4: Создай функцию isSafeInteger, которая принимает одно значение и возвращает:
// true — если:
// значение — число
// оно конечное
// целое
// и находится в пределах безопасных целых чисел JavaScript (то есть от Number.MIN_SAFE_INTEGER до Number.MAX_SAFE_INTEGER, включая границы)
// 'Ошибка' — если хотя бы одно из условий не выполняется

function isSafeInteger(value) {
  const maxNum = Number.MAX_SAFE_INTEGER;
  const minNum = Number.MIN_SAFE_INTEGER;

  if (
    typeof value === "number" &&
    Number.isFinite(value) &&
    Number.isInteger(value) &&
    value <= maxNum &&
    value >= minNum
  ) {
    return true;
  }

  return "Ошибка";
}