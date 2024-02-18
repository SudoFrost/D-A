
class Node<T>{
    constructor(
        public value: T,
        public left: Node<T> | null = null,
        public right: Node<T> | null = null,
    ){}
}

export class BinaryTree<T>{
    public root: Node<T>;

    constructor(root: T){
        this.root = this.createNode(root)
    }
    
    createNode(value: T): Node<T>{
        return new Node(value)
    }
}