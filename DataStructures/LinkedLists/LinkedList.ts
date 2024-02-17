class Node<T> {
    public value: T;
    public next: Node<T> | null;
    public prev: Node<T> | null;

    constructor(value: T) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }

    public static create<T>(value: T): Node<T> {
        return new Node<T>(value);
    }
}

type SearchCallback<T> = ((i: T) => boolean)

export class LinkedList<T> {
    private _head: Node<T> | null = null;
    private _tail: Node<T> | null = null;
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

    private getNode(index: number): Node<T> | null {
        if (index < 0 || index >= this.size()) return null

        return (this.size() / 2 > index)
            ? this.getNodeFromHead(index)
            : this.getNodeFromTail(index)
    }

    private getNodeFromHead(index: number): Node<T> | null {
        let current = this._head;

        while (index-- > 0 && current) {
            current = current.next;
        }

        return current
    }

    private getNodeFromTail(index: number): Node<T> | null {
        let current = this._tail;

        while (++index < this.size() && current) {
            current = current.prev;
        }

        return current
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
            if (current.value === search) return index
            if (search instanceof Function && search(current.value)) return index

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