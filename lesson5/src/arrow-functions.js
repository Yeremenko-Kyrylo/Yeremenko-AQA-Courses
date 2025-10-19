const sumArray = (arr) => {
    return arr.reduce((acc, val) => {
        const num = Number(val);
        return isNaN(num) ? acc : acc + num;
    }, 0);
};

const numbers = [5, 15, 25];
const strings = ['10', '20', '30'];

console.log('Сума числового масиву:', sumArray(numbers));
console.log('Сума рядкового масиву:', sumArray(strings));
