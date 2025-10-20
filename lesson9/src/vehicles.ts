import { IMovable } from './interfaces';

export abstract class Vehicle implements IMovable {
    protected fuel: number;

    constructor(protected brand: string, protected model: string, fuel: number = 100) {
        this.fuel = fuel;
    }

    abstract move(distance: number): void;

    refuel(amount: number): void {
        this.fuel += amount;
        console.log(`${this.brand} ${this.model} заправлено на ${amount} літрів.`);
    }

    getStatus(): string {
        return `${this.brand} ${this.model} має ${this.fuel}% пального.`;
    }
}

export abstract class LandVehicle extends Vehicle {
    constructor(brand: string, model: string, fuel: number, protected wheels: number) {
        super(brand, model, fuel);
    }

    getWheelInfo(): string {
        return `${this.brand} ${this.model} має ${this.wheels} колеса.`;
    }
}
