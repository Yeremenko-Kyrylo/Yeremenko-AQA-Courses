const numberList = [5, 15, 25, 55]
const wordList = ['TypeScript', 'is', 'awesome']

const averageArray = (arr: number[]): number => {
  const total = arr.reduce((sum, num) => sum + num, 0)
  return total / arr.length
}

const totalStringLength = (arr: string[]): number => {
  return arr.reduce((sum, str) => sum + str.length, 0)
}

console.log('Середнє чисел:', averageArray(numberList))
console.log('Загальна довжина рядків:', totalStringLength(wordList))
