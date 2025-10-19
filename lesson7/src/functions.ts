function sumArray(arr: (number | string)[]): number {
  let sum = 0
  for (const item of arr) {
    const num = typeof item === 'string' ? parseFloat(item) : item
    if (!isNaN(num)) sum += num
  }
  return sum
}

const numbers: number[] = [5, 10, 15]
const strings: string[] = ['2', '8', '10']

console.log('Сума чисел:', sumArray(numbers))
console.log('Сума рядків:', sumArray(strings))
