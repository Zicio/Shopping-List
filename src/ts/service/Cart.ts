import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        const index = this._items.findIndex((product) => product.id === item.id);
        if (item.constructor.name === 'Smartphone' && index !== -1) {
            this._items[index].quantity = this._items[index].quantity + 1;
        }
        else {
            this._items.push(item);
        }
    }

    get items(): Buyable[] {
        return [...this._items]; 
    }

    amountWithoutDiscount(): number {
        return this._items.reduce((a, b) => {
            return a + b.price;
        }, 0);
    }

    amountWithDiscount(discount: number): number {
        return this.amountWithoutDiscount() * (100 - discount) / 100;
    }

    deleteProduct(id: number): void {
        this._items = this._items.filter((item: Buyable) => item.id !== id);
    }

    reduceQuantityofSmartphones(id: number): void {
        const indexOfSmartphone = this._items.findIndex((item) => item.id === id);
        if (indexOfSmartphone === -1) {
            throw new Error("Данного товара нет в корзине");
        }
        this._items[indexOfSmartphone].quantity = this._items[indexOfSmartphone].quantity - 1;
    }
}