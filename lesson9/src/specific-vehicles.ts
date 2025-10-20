import { LandVehicle } from './vehicles';

export class Car extends LandVehicle {
    move(distance: number): void {
        if (this.fuel <= 0) {
            console.log(`${this.brand} ${this.model} не може рухатися — бак порожній.`);
            return;
        }
        this.fuel -= distance * 0.5;
        console.log(`${this.brand} ${this.model} проїхала ${distance} км.`);
    }
}

export class Motorcycle extends LandVehicle {
    move(distance: number): void {
        if (this.fuel <= 0) {
            console.log(`${this.brand} ${this.model} не може рухатися — бак порожній.`);
            return;
        }
        this.fuel -= distance * 0.3;
        console.log(`${this.brand} ${this.model} проїхав ${distance} км.`);
    }
}

export class Truck extends LandVehicle {
    move(distance: number): void {
        if (this.fuel <= 0) {
            console.log(`${this.brand} ${this.model} не може рухатися — бак порожній.`);
            return;
        }
        this.fuel -= distance * 1.2;
        console.log(`${this.brand} ${this.model} перевіз вантаж на ${distance} км.`);
    }
}
