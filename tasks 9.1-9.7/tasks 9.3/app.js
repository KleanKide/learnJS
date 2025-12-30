 class Teapot {
    #waterLimit = 200;
    #waterAmount = 0;
    #turn = false;
    #temperatures = [0, 20, 40, 60, 80, 100];
    #targetTemperature = 100;
    #isBoiled = false;

    #validWaterAmount(value) {
      if (value < 0) throw new Error("объем воды ниже нуля");
      if (value > this.#waterLimit) throw new Error("Слишком много воды");
    }


    constructor(waterAmount) {
      if (waterAmount !== undefined) {
        this.#waterAmount = waterAmount;
      }
      this.#validWaterAmount(this.#waterAmount);
    }



    toggleTurn() {
      if (this.#turn===true) throw new Error("чайник уже включен");
      if (this.#waterAmount === 0) throw new Error("Необходимо добавить воды");
      let tempertures = this.#temperatures;
      this.#turn= true
      let leftIndex = 0;

      let timerID = setInterval(() => {
        let index = tempertures[leftIndex];
        console.log(index + ' градусов');

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
          this.#turn = false;
          clearInterval(timerID);
        }
      }, 1500);
    }
      getStatus(){
        return {
         'Включен ли чайник:':  this.#turn,
         'Количество воды:': this.#waterAmount,
        'Закипело ли вода:' :this.#isBoiled
        }
    }
  }

  const u = new Teapot(10);
  u.toggleTurn();
 setTimeout(() => {
  console.log(u.getStatus());
}, 10000);
