//1. Возврат уникальных значений
const arr = [1, 2, 3, 1, 2, 4, 5];

const set = new Set(Array.from(arr))
console.log(set) //Set(5) {1, 2, 3, 4, 5}

// 2. Преобразовать массив в Set и обратно
const words = ["hello", "world", "hello"];

const uniqueWords = Array.from(new Set(words));
console.log(uniqueWords); // ["hello", "world"]

//3. Удалить дубликаты из массива объектов
const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 1, name: "Alice" }
];
const uniqueUsers = Array.from(new Map(users.map(user => [user.id, user])).values());
console.log(uniqueUsers);

// 4.Объединение двух массивов в Set с уникальнымы значениями 
const a = [1, 2, 3];
const b = [3, 4, 5];

const union = new Set([...a, ...b]);

console.log(union); // Set(5) {1, 2, 3, 4, 5}
