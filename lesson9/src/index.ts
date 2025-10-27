import { Car, Motorcycle, Truck } from './specific-vehicles';
import { IMovable, IRefuelable, IStatus } from './interfaces';

type VehicleType = IMovable & IRefuelable & IStatus;

function operateVehicle(vehicle: VehicleType): void {
    console.log(vehicle.getStatus());
    vehicle.move(50);
    console.log(vehicle.getStatus());
    vehicle.refuel(20);
    console.log(vehicle.getStatus());
}


const car = new Car('Toyota', 'Corolla', 80);
const moto = new Motorcycle('Yamaha', 'MT-07', 60);
const truck = new Truck('Volvo', 'FH16', 120);

operateVehicle(car);
console.log('------');
operateVehicle(moto);
console.log('------');
operateVehicle(truck);
