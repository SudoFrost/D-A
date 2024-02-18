import { describe, expect, it } from "bun:test"
import { BinaryTree } from "./BinaryTree"

describe("Binary Tree", () => {
    it("should create a binary tree", () => {
        const tree = new BinaryTree(1)
        expect(tree.root.value).toBe(1)
        expect(tree.root.left).toBeNull()
        expect(tree.root.right).toBeNull()
    })
    
    it("should create a binary tree with children", () => {
        const tree = new BinaryTree(1)
        tree.root.left = tree.createNode(2)
        tree.root.right = tree.createNode(3)
        expect(tree.root.left.value).toBe(2)
        expect(tree.root.right.value).toBe(3)
    })

    it("should create a binary tree with children and grandchildren", () => {
        const tree = new BinaryTree(1)
        tree.root.left = tree.createNode(2)
        tree.root.right = tree.createNode(3)
        tree.root.left.left = tree.createNode(4)
        tree.root.left.right = tree.createNode(5)
        tree.root.right.left = tree.createNode(6)
        tree.root.right.right = tree.createNode(7)
        expect(tree.root.left.left.value).toBe(4)
        expect(tree.root.left.right.value).toBe(5)
        expect(tree.root.right.left.value).toBe(6)
        expect(tree.root.right.right.value).toBe(7)
    })
})