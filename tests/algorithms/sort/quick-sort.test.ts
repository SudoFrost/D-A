import QuickSort from "@/algorithms/sort/QuickSort"

import { describe, expect, test } from "bun:test"

describe("QuickSort", () => {
    test("should sort array", () => {
        expect(QuickSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5])
    })

    test("should sort array with comparator", () => {
        expect(QuickSort([3, 5, 4, 2, 1], (a, b) => b - a)).toEqual([5, 4, 3, 2, 1])
    })
})