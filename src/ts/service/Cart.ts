import Buyable from '../domain/Buyable';



export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items]; 
    }

    summ (): number {
        let summ: number = 0;
        for (let item in this.items){
            summ += this.items[item].price
        }
        return summ;
    }

    summDiscount (discount: number): number  {
        return this.summ() -(this.summ()*(discount/100))
    }

    dell(id: number): void {
        for (let item in this.items){
            if (this.items[item].id === id){
                delete(this._items[item]);
            }
        }
    }
}

