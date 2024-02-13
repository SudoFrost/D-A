export interface INode<Type> {
    value: Type;
    next: INode<Type> | null;
    prev: INode<Type> | null;
}


export class Node<T> implements INode<T> {
    public value: T;
    public next: INode<T> | null;
    public prev: INode<T> | null;

    constructor(value: T) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }

    public static create<T>(value: T): INode<T> {
        return new Node<T>(value);
    }
}