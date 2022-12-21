let powerConsumption = 0;

class Gadjet {
    constructor (name, batteryCapacity) {
        this.name = name;
        this.batteryCapacity = batteryCapacity;
        this.connect = false;
    };
    
    connected() {
        console.log(`Электроприбор ${this.name} подключен к электросети`);
        this.connect = true;
        powerConsumption += this.power;
    }
    unconnected() {
        console.log(`Электроприбор ${this.name} не подключен к электросети`);
        this.connect = false;
    }
}

    function getSumPower() {
        console.log(`Потребляемая мощность всех включенных в сеть приборов - ${powerConsumption} Ватт`)
    }
    
    class MyGadjet extends Gadjet {
        constructor (name, brand, batteryCapacity, power){
        super (name, batteryCapacity);
        this.brand = brand;
        this.connect = false;
        this.power = power
        }
    }

const lamp = new MyGadjet ("Настольная лампа", "Nokia", "Нет", 90);
lamp.unconnected()
console.log(lamp)

const laptop = new MyGadjet ("Ноутбук", "Asus", 5200, 75);
laptop.connected()
console.log(laptop)

getSumPower()