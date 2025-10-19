function sumArray(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        const num = Number(arr[i]);
        if (!isNaN(num)) {
            sum += num;
        }
    }

    return sum;
}

const numbers = [10, 20, 30, 40];
const strings = ['5', '15', '25'];

console.log('Сума числового масиву:', sumArray(numbers));
console.log('Сума рядкового масиву:', sumArray(strings));
