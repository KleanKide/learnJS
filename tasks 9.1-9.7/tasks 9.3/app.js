class Teapot {
  #waterLimit = 200;
  #waterAmount = 0;
  #turn = false;
  #temperatures = [0, 20, 40, 60, 80, 100];
  #targetTemperature = 100
  #isBoiled = false;

  #validWaterAmount(value) {
    if (value < 0) throw new Error("объем воды ниже нуля");
    if (value > this.#waterLimit) throw new Error("Слишком много воды");
  }
  #validTurnOn(value){
    if(value) throw new Error ('чайник уже включен')
  }

  constructor(waterAmount) {
    if (waterAmount !== undefined) {
      this.#waterAmount = waterAmount;
    }
    this.#validWaterAmount(this.#waterAmount);

    this.#validTurnOn(this.#turn)
  }

  toggleTurn() {
    let tempertures = this.#temperatures;
    
   let leftIndex = 0;

let timerID = setInterval(() => {
  let index = tempertures[leftIndex];
  console.log(index);

  if (index === this.#targetTemperature) {
    console.log("Вода закипело");
    console.log("Чайник выключен");
    this.#isBoiled = true;
    this.#turn = false;
    clearInterval(timerID);
    return;
  }

  leftIndex++;

  if (leftIndex >= tempertures.length) {
    console.log("Чайник выключен");
    this.#turn = false;
    clearInterval(timerID);
  }
}, 1500);
  }
}

const u = new Teapot(200);
u.toggleTurn();

console.log(u);
