import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        if (item.constructor.name === 'Smartphone') {
            const index = this._items.findIndex((product) => product.id === item.id);
            if(index !== -1) {
                this._items[index].quantity = this._items[index].quantity + 1;
            }
            else {
                this._items.push(item);
            }
        }
        else { //через id исключить повторы книг
            this._items.push(item);
        }
    }

    get items(): Buyable[] {
        return [...this._items]; 
    }

    amountWithoutDiscount(): number {
        let amount: number = 0;
        for (const item of this._items) {
            amount += item.price;
        }
        return amount;
    }

    amountWithDiscount(discount: number): number {
        return this.amountWithoutDiscount() * (100 - discount) / 100;
    }

    deleteProduct(id: number): void {
        const indexOfDeletedProduct = this._items.findIndex((item) => {item.id === id});
        this._items.splice(indexOfDeletedProduct, 1);
    }

    reduceQuantityofSmartphones(id: number): void {
        const indexOfSmartphone = this._items.findIndex((item) => {item.id === id});
        this._items[indexOfSmartphone].quantity = this._items[indexOfSmartphone].quantity - 1;
    }
}