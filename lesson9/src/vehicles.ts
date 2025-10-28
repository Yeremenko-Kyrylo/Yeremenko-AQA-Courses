import { IMovable, IRefuelable, IStatus } from './interfaces';

export abstract class Vehicle implements IMovable, IRefuelable, IStatus {
    protected fuel: number;

    public constructor(protected brand: string, protected model: string, fuel = 100) {
        this.fuel = fuel;
    }

    public abstract move(distance: number): void;

    public refuel(amount: number): void {
        this.fuel += amount;
        console.log(`${this.brand} ${this.model} заправлено на ${amount} літрів.`);
    }

    public getStatus(): string {
        return `${this.brand} ${this.model} має ${this.fuel}% пального.`;
    }
}
