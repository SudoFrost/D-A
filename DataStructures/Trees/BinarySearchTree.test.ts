import { describe, expect, it } from "bun:test"
import { BinarySearchTree } from "./BinarySearchTree"

describe('BinarySearchTree', () => {
    it('should insert', () => {
        const tree = new BinarySearchTree<number>(10, (a, b) => a - b)
        tree.insert(5)
        tree.insert(15)
        tree.insert(3)
        tree.insert(7)
        tree.insert(12)
        tree.insert(17)
        tree.insert(1)
        tree.insert(9)
        tree.insert(11)
        tree.insert(13)
        tree.insert(14)
        tree.insert(16)
        tree.insert(18)
        tree.insert(20)

        expect(tree.toArray()).toEqual([1, 3, 5, 7, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 20])
    })

    it('should remove', () => {
        const tree = new BinarySearchTree<number>(10, (a, b) => a - b)
        tree.insert(5)
        tree.insert(15)
        tree.insert(3)
        tree.insert(7)
        tree.insert(12)
        tree.insert(17)
        tree.insert(1)
        tree.insert(9)
        tree.insert(11)

        expect(tree.toArray()).toEqual([1, 3, 5, 7, 9, 10, 11, 12, 15, 17])
        
        tree.remove(5)
        expect(tree.toArray()).toEqual([1, 3, 7, 9, 10, 11, 12, 15, 17])

        tree.remove(15)
        expect(tree.toArray()).toEqual([1, 3, 7, 9, 10, 11, 12, 17])

        tree.remove(17)
        expect(tree.toArray()).toEqual([1, 3, 7, 9, 10, 11, 12])

        tree.remove(1)
        expect(tree.toArray()).toEqual([3, 7, 9, 10, 11, 12])

        tree.remove(3)
        expect(tree.toArray()).toEqual([7, 9, 10, 11, 12])

        tree.remove(10)
        expect(tree.toArray()).toEqual([7, 9, 11, 12])

        tree.remove(12)
        expect(tree.toArray()).toEqual([7, 9, 11])

        tree.remove(11)
        expect(tree.toArray()).toEqual([7, 9])

        tree.remove(9)
        expect(tree.toArray()).toEqual([7])

        tree.remove(7)
        expect(tree.toArray()).toEqual([])

        tree.remove(10)
        expect(tree.toArray()).toEqual([])
    })
})