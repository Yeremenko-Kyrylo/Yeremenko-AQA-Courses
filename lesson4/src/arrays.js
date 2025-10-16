const strings = ['яблуко', 'банан', 'вишня'];
strings.forEach(str => console.log('Рядок:', str.toUpperCase()));
const newStrings = strings.map(str => `Фрукт: ${str}`);
console.log('Новий масив рядків:', newStrings);

console.log('----');

const numbers = [1, 2, 3, 4, 5];
numbers.forEach(num => console.log('Квадрат числа:', num * num));
const doubled = numbers.map(num => num * 2);
console.log('Подвоєні числа:', doubled);

console.log('----');

const bools = [true, false, true];
bools.forEach(value => console.log('Булеве значення:', value));
const toggled = bools.map(value => !value);
console.log('Інвертовані булеві:', toggled);

console.log('----');

const anyArray = [42, 'hello', true, null];
anyArray.forEach(item => console.log('Елемент any:', item));
const types = anyArray.map(item => typeof item);
console.log('Типи елементів:', types);
