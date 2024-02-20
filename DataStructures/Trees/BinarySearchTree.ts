import { Comparator, type CompareFunc } from "@/Utils/Comparator";

class Node<T>{
    constructor(
        public value: T,
        public left: Node<T> | null = null,
        public right: Node<T> | null = null,
    ) { }
}

export class BinarySearchTree<T>{
    public root: Node<T> | null;
    private _cmp: Comparator<T>;

    constructor(root: T, compare: CompareFunc<T>) {
        this.root = this.createNode(root)
        this._cmp = new Comparator(compare)
    }

    createNode(value: T): Node<T> {
        return new Node(value)
    }

    findParent(value: T, root = this.root): Node<T> | null {
        if (root == null || this._cmp.eq(root.value, value)) return null

        let child = this._cmp.lt(value, root.value) ? root.left : root.right

        if (!child || this._cmp.eq(value, child.value)) return root

        return this.findParent(value, child)
    }

    find(value: T, root = this.root): Node<T> | null {
        if (root == null) return null
        if (this._cmp.eq(value, root.value)) return root
        if (this._cmp.lt(value, root.value)) return this.find(value, root.left)
        return this.find(value, root.right)
    }


    insert(value: T): void {
        const node = this.createNode(value)
        const parent = this.findParent(value)

        if (!parent) return

        if (this._cmp.lt(value, parent.value)) {
            parent.left ??= node
        } else {
            parent.right ??= node
        }
    }

    min(node = this.root): Node<T> | null {
        return node?.left ? this.min(node.left) : node
    }
    max(node = this.root): Node<T> | null {
        return node?.right ? this.min(node.right) : node
    }

    private _remove(value: T, root: Node<T> = this.root!): void {
        if (root.left && this._cmp.lt(value, root.value)) {
            if (this._cmp.eq(value, root.left.value)) {
                root.left = this._getSuccessorAndRemoveNode(root.left)
            } else {
                return this._remove(value, root.left)
            }
        } else if (root.right && this._cmp.gt(value, root.value)) {
            if (this._cmp.eq(value, root.right.value)) {
                root.right = this._getSuccessorAndRemoveNode(root.right)
            } else {
                return this._remove(value, root.right)
            }
        }
    }

    private _getSuccessorAndRemoveNode(node: Node<T>): Node<T> | null {
        const successor = this.min(node.right) || this.max(node.left)
        if (successor) {
            this._remove(successor.value, node)
            successor.left = node.left
            successor.right = node.right
            node.right = null
            node.left = null
        }
        return successor
    }

    remove(value: T) {
        if (this.root == null) return

        if (this._cmp.eq(value, this.root.value)) {
            this.root = this._getSuccessorAndRemoveNode(this.root)
        } else {
            this._remove(value)
        }
    }


    toArray(root = this.root): T[] {
        if (root) {
            return [...this.toArray(root.left), root.value, ...this.toArray(root.right)]
        }
        return []
    }
}
