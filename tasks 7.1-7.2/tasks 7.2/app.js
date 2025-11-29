// 🟡 1. Дескриптор-ограничитель

// Создай объект user, в котором свойство age задаётся через Object.defineProperty().
// Условия:
// значение хранится во внутренней переменной;
// нельзя установить значение меньше 0 или больше 120;
// свойство не должно быть перечисляемым (enumerable: false);
// при попытке удаления (delete user.age) — не должно удаляться (configurable: false).

const user = {};
Object.defineProperty(user, "age", {
  get () {
    return this._age;
  },
  set (value) {
    if(value < 0 || value > 120){
     throw new Error('значение не валидное')  
    }
    this._age = value

  },
  enumerable: false,
  configurable: false
});

user.age = 122
console.log(user.age)


//  2. Автоматический пересчёт

// Создай объект rectangle с полями:
// width,
// height,
// area (дескриптор с get).
// Условия:
// area вычисляется автоматически;
// при изменении width или height, значение area обновляется при обращении;
// area нельзя изменить напрямую (сеттера нет);
// area не должно появляться при for...in.

const rectangle = {
  width: 3,
  height:2,
}
Object.defineProperty(rectangle, 'area',{
 get(){
  return this.area = this.width * this.height
 }
})

console.log(rectangle.area)



//3. Динамический контроль прав
// Создай объект secureFile, где есть:
// приватное поле _content;
// свойство content с геттером и сеттером;
// геттер возвращает содержимое только если secureFile.canRead === true;
// сеттер разрешает запись только если secureFile.canWrite === true;
// если доступ запрещён — выбрасывается Error.
// Дополнительно: сделай canRead и canWrite обычными свойствами, но content — через Object.defineProperty().

const secureFile= {
  canRead: true,
  canWrite: true
}

Object.defineProperty(secureFile, 'content', {
  get(){
    if(this.canRead === true) return this._content
    throw new Error('нельзя прочитать')
  },
  set(value){
    if(this.canWrite === false ){
      throw new Error('нельзя записать')
    }
    this._content = value
  }
})
secureFile.content = 'dsfsdf'

console.log(secureFile.content)