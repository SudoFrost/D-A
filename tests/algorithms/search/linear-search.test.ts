import { test, expect, describe } from 'bun:test';
import LinearSearch from '@/algorithms/search/LinearSearch';

describe('LinearSearch', () => {
    describe("Search with element", () => {
        test('should return the index of the element in the array', () => {
            const array = [1, 2, 3, 4, 5];
            const element = 3;
            const result = LinearSearch(array, element);
            expect(result).toBe(2);
        });

        test('should return -1 if the element is not in the array', () => {
            const array = [1, 2, 3, 4, 5];
            const element = 6;
            const result = LinearSearch(array, element);
            expect(result).toBe(-1);
        });
    })

    describe("Search with callback", () => {
        test('should return the index of the element in the array', () => {
            const array = [1, 2, 3, 4, 5];
            const result = LinearSearch(array, (element) => element === 3);
            expect(result).toBe(2);
        });

        test('should return -1 if the element is not in the array', () => {
            const array = [1, 2, 3, 4, 5];
            const result = LinearSearch(array, (element) => element === 6);
            expect(result).toBe(-1);
        });
    })
})

