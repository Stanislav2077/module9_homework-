class Gadjet {
    constructor(name, batteryCapacity) {
        this.name = name;
        this.batteryCapacity = batteryCapacity;
		this.getTurn = false;
    }

    getInfo() {
        return `${this.name} выпускается компанией ${this.brand}.`
    }

    getPowerConsumption = function () {
        return `Потребляемая мощьность ${this.name} - ${ this.batteryCapacity} W.`
    }

    getTurn = function (on_off) {
        return `Прибор ${this.name} переключается ${on_off}.`
    }
}


class lamp extends Gadjet {
    constructor(name, batteryCapacity, typeOfLamp) {
        super(name);
        this.batteryCapacity = batteryCapacity
        this.typeOfLamp = typeOfLamp;
    }

    getPowerConsumption = function (power) {
        return `Потребляемая электроэнергия ${this.name} - ${power} W.`
    }
}

class laptop extends Gadjet {
    constructor(name, batteryCapacity, display) {
        super(name);
        this.batteryCapacity = batteryCapacity;
        this.display = display;
    }

    getTurn = function (on_off) {
        return `Прибор ${this.name} в положении ${on_off}.`
    }

    getInfo() {
        return `The ${this.name} is manufacturied by ${this.batteryCapacity}. Display is ${this.display}'.`
    }
}



const lamp = new MyGadjet ("Лампа", "Nokia", "Нет", 90);

console.log(lamp.getInfo());  // "The lamp is manufacturied by Nokia."
console.log(lamp.getPowerConsumption(90));  // "Electricity consumption of the lamp is 90 W."
console.log(lamp.getTurn("off"));  // "The lamp is switched off."
  
const laptop = new MyGadjet ("Ноутбук", "Asus", 5200, 75);
  
console.log(laptop.getInfo());  // "The laptop is manufacturied by Asus." 
console.log(laptop.getPowerConsumption(75)); // "Power Consumption of the laptop is 75 W."
console.log(laptop.getTurn("on"));  //"This laptop is switched on."
  