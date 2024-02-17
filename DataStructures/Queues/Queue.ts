import { LinkedList } from "../LinkedLists/LinkedList";
export class Queue<T>{
    private list: LinkedList<T> = new LinkedList();

    size(): number {
        return this.list.size();
    }

    isEmpty(): boolean {
        return this.size() === 0;
    }

    enqueue(item: T): void {
        this.list.append(item);
    }

    dequeue(): T | undefined {
        const item = this.list.get(0);
        this.list.remove(0)
        return item;
    }

    peek(): T | undefined {
        return this.list.get(0);
    }
}