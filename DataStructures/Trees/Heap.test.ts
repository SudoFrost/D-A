import { describe, expect, it } from "bun:test";
import { Heap } from "./Heap";

describe('Heap', () => {
    it('should push values onto the heap', () => {
        const heap = new Heap<number>();
        heap.push(5);
        heap.push(3);
        heap.push(8);
        expect(heap.size()).toEqual(3);
        expect(heap.getHeap()).toEqual([3, 5, 8]);
    });

    it('should remove values from the heap', () => {
        const heap = new Heap<number>();
        heap.push(5);
        heap.push(3);
        heap.push(8);
        heap.remove(3);
        expect(heap.size()).toEqual(2);
        expect(heap.pop()).toEqual(5);
        expect(heap.pop()).toEqual(8);
    });

    it('should pop the minimum value from the heap', () => {
        const heap = new Heap<number>();
        heap.push(5);
        heap.push(3);
        heap.push(8);
        expect(heap.pop()).toEqual(3);
        expect(heap.pop()).toEqual(5);
        expect(heap.pop()).toEqual(8);
    });

    it('should return null when popping from an empty heap', () => {
        const heap = new Heap<number>();
        expect(heap.pop()).toBeNull();
    });

    it('should return true for isEmpty when the heap is empty', () => {
        const heap = new Heap<number>();
        expect(heap.isEmpty()).toBeTrue();
    });

    it('should return false for isEmpty when the heap is not empty', () => {
        const heap = new Heap<number>();
        heap.push(5);
        expect(heap.isEmpty()).toBeFalse();
    });
});
