export interface IMovable {
    move(distance: number): void;
    refuel(amount: number): void;
    getStatus(): string;
}
