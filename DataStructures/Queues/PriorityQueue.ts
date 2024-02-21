import { Comparator, type CompareFunc } from "@/Utils/Comparator";
import { LinkedList } from "../LinkedLists/LinkedList";

export class PriorityQueue<T>  {
    private list: LinkedList<T> = new LinkedList();

    constructor(private _cmp: CompareFunc<T> = new Comparator().cmp) { }

    size(): number {
        return this.list.size()
    }
    isEmpty(): boolean {
        return this.size() === 0
    }

    enqueue(item: T): void {
        // Find the index of the first item that has lower priority of the enqueue item
        let insertionIndex = this.list.indexOf(i => this._cmp(item, i) > 0)

        // if no item has lower priority, insert the item at the end of the queue.
        if (insertionIndex === -1) {
            insertionIndex = this.size()
        }

        this.list.insert(item, insertionIndex)
    }

    dequeue(): T | undefined {
        const item = this.list.get(0)
        this.list.remove(0)
        return item
    }
    peek(): T | undefined {
        return this.list.get(0)
    }
}