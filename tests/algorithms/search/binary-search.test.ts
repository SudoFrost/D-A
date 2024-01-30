import { describe, test, expect } from "bun:test"

import { BinarySearch } from "@/algorithms/search/BinarySearch"

describe("Binary Search", () => {
    test("Should return the index of the target", () => {
        const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        expect(BinarySearch(arr, 5)).toBe(4)
    })

    test("Should return -1 if the target is not found", () => {
        const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        expect(BinarySearch(arr, 11)).toBe(-1)
    })

    test("Should return the index of the target if the compare function is provided", () => {
        const arr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"]
        const compare = (a: string, b: string) => a.localeCompare(b)
        expect(BinarySearch(arr, "d", { compare })).toBe(3)
    })

    test("Should return -1 if the target is not found if the compare function is provided", () => {
        const arr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"]
        const compare = (a: string, b: string) => a.localeCompare(b)
        expect(BinarySearch(arr, "k", { compare })).toBe(-1)
    })

    test("Should return the index of the target if the compare function is provided", () => {
        const arr: [number, number][] = [
            [1, 1],
            [1, 2],
            [3, 2],
            [2, 4],
            [5, 2]
        ]

        const compare = (a: [number, number], b: [number, number]) => a[0] * a[1] - b[0] * b[1]

        expect(BinarySearch<[number, number]>(arr, [3, 2], { compare })).toBe(2)
        expect(BinarySearch<[number, number]>(arr, [1, 2], { compare })).toBe(1)
        expect(BinarySearch<[number, number]>(arr, [5, 2], { compare })).toBe(4)
        expect(BinarySearch<[number, number]>(arr, [2, 4], { compare })).toBe(3)
        expect(BinarySearch<[number, number]>(arr, [1, 1], { compare })).toBe(0)
    })
})