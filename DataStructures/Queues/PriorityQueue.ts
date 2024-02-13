import type { IQueue } from './Queue';

export class PriorityQueue<T> implements IQueue<T> {
    private _items: T[] = [];

    constructor(private _compare: (a: T, b: T) => number) { }

    size(): number {
        return this._items.length
    }
    isEmpty(): boolean {
        return this.size() === 0
    }

    enqueue(item: T): void {
        // Find the index of the first item that has lower priority of the enqueue item
        let insertionIndex = this._items.findIndex(i => this._compare(item, i) > 0)

        // if no item has lower priority, insert the item at the end of the queue.
        if (insertionIndex === -1) {
            insertionIndex = this.size()
        }

        this._items.splice(insertionIndex, 0, item)
    }

    dequeue(): T | undefined {
        return this._items.shift()
    }
    peek(): T | undefined {
        return this._items[0]
    }
}