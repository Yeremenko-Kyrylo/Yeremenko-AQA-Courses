import { Car, Motorcycle, Truck } from './specific-vehicles';
import { IMovable } from './interfaces';

function operateVehicle(vehicle: IMovable) {
    console.log(vehicle.getStatus());
    vehicle.move(50);
    console.log(vehicle.getStatus());
    vehicle.refuel(20);
    console.log(vehicle.getStatus());
}

const car = new Car('Toyota', 'Corolla', 80, 4);
const moto = new Motorcycle('Yamaha', 'MT-07', 60, 2);
const truck = new Truck('Volvo', 'FH16', 120, 6);

operateVehicle(car);
console.log('------');
operateVehicle(moto);
console.log('------');
operateVehicle(truck);
