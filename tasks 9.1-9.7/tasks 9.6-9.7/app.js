// 1. Реализовать свой instanceof
function nativeInstanceOf(obj, Constructor) {
  let proto = Object.getPrototypeOf(obj);

  while (proto !== null) {
    if (proto === Constructor.prototype) {
      return true;
    }
    proto = Object.getPrototypeOf(proto);
  }

  return false;
}
class A {}
class B extends A {}

const b = new B();

console.log(b instanceof A); // true
console.log(b instanceof B); // true



// 2. Сделай функцию hasMixin для проверки :
// ❗ Запрещено использовать instanceof.

function hasMixin(obj, mixin) {
  return Object.keys(mixin).every(
    key => typeof obj[key] === "function"
  );
}
hasMixin(p, canRun); // true


// 3.Реализуй миксин CanEat, который:
// добавляет метод eat()
// позволяет проверку:

obj instanceof CanEat // true


const CanEat = {
  eat() {
    return "eating";
  },

  [Symbol.hasInstance](obj) {
    return typeof obj?.eat === "function";
  }
};