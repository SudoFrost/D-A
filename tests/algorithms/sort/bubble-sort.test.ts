import BubbleSort from "@/algorithms/sort/BubbleSort"
import { describe, expect, test } from "bun:test"

describe("BubbleSort", () => {
    test("should sort array", () => {
        expect(BubbleSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5])
    })

    test("should sort array with comparator", () => {
        expect(BubbleSort([5, 4, 3, 2, 1], (a, b) => b - a)).toEqual([5, 4, 3, 2, 1])
    })
})