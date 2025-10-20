type Product = {
  name: string
  price: number
}

class Store {
  private _name: string
  private _products: Product[]

  constructor(name: string, products: Product[]) {
    this._name = name
    this._products = products
  }

  get name(): string {
    return this._name
  }

  set name(newName: string) {
    if (newName.length < 2) {
      console.error('Назва магазину закоротка')
    } else {
      this._name = newName
    }
  }

  get products(): Product[] {
    return this._products
  }

  set addProduct(product: Product) {
    this._products.push(product)
  }

  get totalValue(): number {
    return this._products.reduce((sum, item) => sum + item.price, 0)
  }

  summary(): string {
    return `Магазин "${this._name}" має ${this._products.length} товарів на суму ${this.totalValue} грн.`
  }
}

const store = new Store('TechZone', [
  { name: 'Ноутбук', price: 35000 },
  { name: 'Мишка', price: 800 },
  { name: 'Клавіатура', price: 1200 }
])

console.log(store.summary())

store.addProduct = { name: 'Монітор', price: 7500 }
console.log(store.summary())

store.name = 'T-Shop'
console.log(store.summary())

store.name = 'A'
