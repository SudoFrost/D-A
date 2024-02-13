export class Stack<T> {
    private _items: T[] = [];

    public size(): number {
        return this._items.length;
    }

    public isEmpty(): boolean {
        return this.size() === 0;
    }

    public push(item: T): void {
        this._items.push(item);
    }

    public pop(): T | undefined {
        return this._items.pop();
    }

    public peek(): T | undefined {
        return this._items[this.size() - 1];
    }
}