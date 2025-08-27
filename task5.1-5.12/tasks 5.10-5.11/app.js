//1 Напишите деструктурирующее присваивание, которое:

// свойство name присвоит в переменную name.
// свойство years присвоит в переменную age.
// свойство isAdmin присвоит в переменную isAdmin (false, если нет такого свойства)

let user = {
  name: "John",
  years: 30
};
let {name, years: age, isAdmin = false} = user;

console.log( name ); // John
console.log( age ); // 30
console.log( isAdmin ); // false

// 2 Создайте функцию topSalary(salaries), которая возвращает имя самого высокооплачиваемого сотрудника.

// Если объект salaries пустой, то нужно вернуть null.
// Если несколько высокооплачиваемых сотрудников, можно вернуть любого из них.
// P.S. Используйте Object.entries и деструктурирование, чтобы перебрать пары ключ/значение.

function topSalary(salaries) {

  let max = 0;
  let maxName = null;

  for(const [name, salary] of Object.entries(salaries)) {
    if (max < salary) {
      max = salary;
      maxName = name;
    }
  }

  return maxName;
}

//3 Достань с помощью деструктуризации firstName и email.

const person = {
  firstName: "Анна",
  lastName: "Петрова",
  contacts: {
    phone: "123-456",
    email: "anna@example.com"
  }
};

let {
    firstName,
    lastName,
    contacts: {phone, email}
} = person;

console.log(firstName, email)


//4  Напишите функцию getWeekDay(date), показывающую день недели в коротком формате: «ПН», «ВТ», «СР», «ЧТ», «ПТ», «СБ», «ВС».
let date = new Date(2012, 0, 3);

function getWeekDay(date){
    const rusDay = ["ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ", "ВС"]
    return rusDay[date.getDay()]
}   
console.log(getWeekDay(date))

//5 День недели в европейской нумерации
// В Европейских странах неделя начинается с понедельника (день номер 1), затем идёт вторник (номер 2) и так до воскресенья (номер 7). 
// Напишите функцию getLocalDay(date), которая возвращает «европейский» день недели для даты date.

function getLocalDay(date) {
  let day = date.getDay();
  if (day == 0) { 
    day = 7;
  }
  return day;
}
// 6. Какой день месяца был много дней назад?
// Создайте функцию getDateAgo(date, days), возвращающую число, которое было days дней назад от даты date.
// К примеру, если сегодня двадцатое число, то getDateAgo(new Date(), 1) вернёт девятнадцатое и getDateAgo(new Date(), 2) – восемнадцатое.
// Функция должна надёжно работать при значении days=365 и больших значениях:
let date2 = new Date(2015, 0, 2);

function getDateAgo(date, days){
    const newDate = new Date(date)
    newDate.setDate(date.getDate()-days)
    return newDate.getDate()
}
console.log(getDateAgo(date2, 5))

// 7. Напишитие функцию для получения последнего дня месяца по заданной дате

function getLastDayMonth(date){
  let newDate = new Date(date)
      newDate.setMonth(newDate.getMonth() + 1, 1)
      newDate.setDate(newDate.getDate() - 1)
  return newDate.toISOString().slice(0, 10) 
}
let date = new Date(2025, 07, 27)
console.log(getLastDayMonth(date))

//8. Сделать функцию formatDate(date), которая:
// Если дата сегодня → "Сегодня в HH:MM".
// Если вчера → "Вчера в HH:MM".
// Если в этом году → "ДД Месяц HH:MM".
// Иначе → "ДД.ММ.ГГГГ HH:MM".
let date = new Date("2025, 2, 25") 

function formatDate(date) {
  let humanDate = new Date(date) 
  humanDate.setHours(0, 0, 0, 0)

  let year = humanDate.getFullYear()
  let month = humanDate.getMonth() + 1 
  let days = humanDate.getDate()
  let hours = humanDate.getHours()
  let minutes = humanDate.getMinutes()

  let today = new Date()
  today.setHours(0, 0, 0, 0)

  let yesterday = new Date(today)
  yesterday.setDate(today.getDate() - 1)
  yesterday.setHours(0, 0, 0, 0)

  if (humanDate.getTime() === yesterday.getTime()) {
    return "вчера"
  } else if (humanDate.getTime() === today.getTime()) {
    return "сегодня"
  } else {
    let mm = month < 10 ? "0" + month : month
    let dd = days < 10 ? "0" + days : days
    return `${dd}.${mm}.${year}`
  }
}

console.log(formatDate(date))


// 9. Сколько сегодня прошло секунд?
// Напишите функцию getSecondsToday(), возвращающую количество секунд с начала сегодняшнего дня.
let date = new Date()
function getSecondsToday(date){
  let newDate = new Date(date)
  newDate.setHours(0,0,0,0)
  let todayHours = new Date()
  let result = Math.round((todayHours.getTime() - newDate.getTime()) / 1000)
  
  return result
}

console.log(getSecondsToday(date))

// 10.Сколько секунд осталось до завтра?
// Создайте функцию getSecondsToTomorrow(), возвращающую количество секунд до завтрашней даты.
function getSecondsToTomorrow() {
  let now = new Date();
  let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1);

  let diff = tomorrow - now; 
  return Math.round(diff / 1000);
}