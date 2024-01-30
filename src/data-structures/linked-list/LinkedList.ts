import type { INode } from "./Node";
import { Node } from "./Node";

type SearchCallback<T> = ((i: T) => boolean)

export interface ILinkedList<T> {
    get head(): T | undefined;
    get tail(): T | undefined;

    size(): number;
    isEmpty(): boolean;
    toString(): string;
    get(index: number): T | undefined;
    insert(value: T, index: number): void;
    prepend(value: T): void;
    append(value: T): void;
    remove(index: number): void;
    indexOf(search: T | SearchCallback<T>): number
    toArray(): T[];
}

export class LinkedList<T> implements ILinkedList<T> {
    private _head: INode<T> | null = null;
    private _tail: INode<T> | null = null;
    private _size: number = 0;

    get head(): T | undefined {
        return this._head?.value;
    }

    get tail(): T | undefined {
        return this._tail?.value;
    }

    size(): number {
        return this._size;
    }

    isEmpty(): boolean {
        return this.size() === 0;
    }

    private getNode(index: number): INode<T> | null {
        if (index < 0 || index >= this.size()) return null

        if (this.size() / 2 > index) {
            let current = this._head;

            while (index-- > 0 && current) {
                current = current.next;
            }

            return current
        } else {
            let current = this._tail;

            while (++index < this.size() && current) {
                current = current.prev;
            }

            return current
        }
    }

    get(index: number): T | undefined {
        return this.getNode(index)?.value;
    }

    insert(value: T, index: number): void {
        const newNode = Node.create(value);
        const currentNode = this.getNode(index)

        newNode.next = currentNode;

        if (currentNode) {
            newNode.prev = currentNode.prev;
            currentNode.prev = newNode;
            if (newNode.prev) newNode.prev.next = newNode
        } else {
            if (this._tail) {
                newNode.prev = this._tail
                this._tail.next = newNode
            }
            this._tail = newNode
        }

        if (this._head == currentNode) this._head = newNode

        this._size++;
    }

    append(value: T): void {
        this.insert(value, this.size());
    }

    prepend(value: T): void {
        this.insert(value, 0);
    }

    remove(index: number): void {
        const currentNode = this.getNode(index);

        if (currentNode) {
            if (currentNode.prev) {
                currentNode.prev.next = currentNode.next;
            } else {
                this._head = currentNode.next;
            }

            if (currentNode.next) {
                currentNode.next.prev = currentNode.prev;
            } else {
                this._tail = currentNode.prev;
            }

            this._size--;
        }
    }

    indexOf(search: T | SearchCallback<T>): number {
        let current = this._head;
        let index = 0;
        while (current) {
            if (current.value === search || (search as SearchCallback<T>)(current.value)) {
                return index
            }
            index++;
            current = current.next;
        }

        return -1;
    }

    toArray(): T[] {
        const array: T[] = [];

        let currentNode = this._head;

        while (currentNode) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }

        return array;
    }
}