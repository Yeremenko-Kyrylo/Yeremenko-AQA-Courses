import { Vehicle } from './vehicles';
import { ITwoWheels, IHeavyLoad } from './interfaces';

export class Car extends Vehicle {
    public move(distance: number): void {
        if (this.fuel <= 0) {
            console.log(`${this.brand} ${this.model} не може рухатися — бак порожній.`);
            return;
        }
        this.fuel -= distance * 0.5;
        console.log(`${this.brand} ${this.model} проїхала ${distance} км.`);
    }
}

export class Motorcycle extends Vehicle implements ITwoWheels {
    public move(distance: number): void {
        if (this.fuel <= 0) {
            console.log(`${this.brand} ${this.model} не може рухатися — бак порожній.`);
            return;
        }
        this.fuel -= distance * 0.3;
        console.log(`${this.brand} ${this.model} проїхав ${distance} км.`);
    }

    public getWheelInfo(): string {
        return `${this.brand} ${this.model} має 2 колеса.`;
    }
}

export class Truck extends Vehicle implements IHeavyLoad {
    public move(distance: number): void {
        if (this.fuel <= 0) {
            console.log(`${this.brand} ${this.model} не може рухатися — бак порожній.`);
            return;
        }
        this.fuel -= distance * 1.2;
        console.log(`${this.brand} ${this.model} перевіз вантаж на ${distance} км.`);
    }

    public getCargoInfo(): string {
        return `${this.brand} ${this.model} може перевозити до 20 тонн.`;
    }
}
