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