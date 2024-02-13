import { describe, test, expect } from "bun:test"

import InterpolationSearch from "./InterpolationSearch"

describe("Interpolation Search", () => {
    test("Should return the index of the target", () => {
        const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        expect(InterpolationSearch(arr, 5)).toBe(4)
    })

    test("Should return -1 if the target is not found", () => {
        const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        expect(InterpolationSearch(arr, 11)).toBe(-1)
    })

    test("Should return the index of the target if the getter function is provided", () => {
        const arr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"]
        expect(InterpolationSearch(arr, "d", (char) => char.charCodeAt(0))).toBe(3)
    })

    test("Should return -1 if the target is not found if the getter function is provided", () => {
        const arr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"]

        expect(InterpolationSearch(arr, "k", (char) => char.charCodeAt(0))).toBe(-1)
    })

    test("Should return the index of the target if the getter function is provided", () => {
        const arr: [number, number][] = [
            [1, 1],
            [1, 2],
            [3, 2],
            [2, 4],
            [5, 2]
        ]

        const get = (a: [number, number]) => a[0] * a[1]

        expect(InterpolationSearch(arr, [3, 2], get)).toBe(2)
        expect(InterpolationSearch(arr, [1, 2], get)).toBe(1)
        expect(InterpolationSearch(arr, [5, 2], get)).toBe(4)
        expect(InterpolationSearch(arr, [2, 4], get)).toBe(3)
        expect(InterpolationSearch(arr, [1, 1], get)).toBe(0)
    })
})