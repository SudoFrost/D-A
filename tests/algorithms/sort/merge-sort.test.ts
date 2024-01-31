import MergeSort from "@/algorithms/sort/MergeSort"

import { describe, expect, test } from "bun:test"

describe("MergeSort", () => {
    test("should sort array", () => {
        expect(MergeSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5])
    })

    test("should sort array with comparator", () => {
        expect(MergeSort([5, 4, 3, 2, 1], (a, b) => b - a)).toEqual([5, 4, 3, 2, 1])
    })
})