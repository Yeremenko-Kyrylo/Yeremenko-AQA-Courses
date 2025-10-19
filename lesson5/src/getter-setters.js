const car = {
    brand: 'Toyota',
    model: 'Camry',
    year: 2020,
    engine: {
        power: 180,
        fuelType: 'бензин'
    },
    _mileage: 50000,

    get mileage() {
        return `${this._mileage} км`;
    },

    set mileage(value) {
        if (typeof value === 'number' && value >= 0) {
            this._mileage = value;
        } else {
            console.log('Помилка: пробіг має бути додатним числом');
        }
    },

    get carInfo() {
        return `${this.brand} ${this.model}, ${this.year} року випуску (${this.engine.power} к.с., ${this.engine.fuelType})`;
    },

    calculateResaleValue() {
        const age = new Date().getFullYear() - this.year;
        const depreciation = age * 0.05 + this._mileage / 200000;
        const value = 30000 * (1 - depreciation);
        return value > 0 ? value.toFixed(2) : 0;
    }
};

console.log(car.carInfo);
console.log('Пробіг:', car.mileage);

car.mileage = 65000;
console.log('Оновлений пробіг:', car.mileage);

console.log('Оціночна вартість при перепродажі:', car.calculateResaleValue(), '$');
