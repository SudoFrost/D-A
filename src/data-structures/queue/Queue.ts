export interface IQueue<T> {
    size(): number;
    isEmpty(): boolean;
    enqueue(item: T): void;
    dequeue(): T | undefined;
    peek(): T | undefined;
}

export class Queue<T> implements IQueue<T> {
    private _items: T[] = [];

    size(): number {
        return this._items.length;
    }

    isEmpty(): boolean {
        return this.size() === 0;
    }

    enqueue(item: T): void {
        this._items.push(item);
    }

    dequeue(): T | undefined {
        return this._items.shift();
    }

    peek(): T | undefined {
        return this._items[0];
    }
}