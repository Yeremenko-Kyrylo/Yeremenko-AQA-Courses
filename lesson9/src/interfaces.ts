export interface IMovable {
    move(distance: number): void;
}

export interface IRefuelable {
    refuel(amount: number): void;
}

export interface IStatus {
    getStatus(): string;
}

export interface ITwoWheels {
    getWheelInfo(): string;
}

export interface IHeavyLoad {
    getCargoInfo(): string;
}
