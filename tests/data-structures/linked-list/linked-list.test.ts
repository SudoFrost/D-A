import { test, expect, describe, beforeEach } from 'bun:test';
import { LinkedList } from '@/data-structures/linked-list/LinkedList';

describe('LinkedList', () => {
    let linkedList: LinkedList<number>;

    beforeEach(() => {
        linkedList = new LinkedList<number>();
    });

    test('should initialize an empty linked list', () => {
        expect(linkedList.head).toBeUndefined();
        expect(linkedList.tail).toBeUndefined();
        expect(linkedList.size()).toBe(0);
        expect(linkedList.isEmpty()).toBe(true);
    });

    test('should append elements to the linked list', () => {
        linkedList.append(1);
        linkedList.append(2);
        linkedList.append(3);

        expect(linkedList.toArray()).toEqual([1, 2, 3]);
        expect(linkedList.size()).toBe(3);
        expect(linkedList.head).toBe(1);
        expect(linkedList.tail).toBe(3);
    });

    test('should prepend elements to the linked list', () => {
        linkedList.prepend(3);
        linkedList.prepend(2);
        linkedList.prepend(1);

        expect(linkedList.toArray()).toEqual([1, 2, 3]);
        expect(linkedList.size()).toBe(3);
        expect(linkedList.head).toBe(1);
        expect(linkedList.tail).toBe(3);
    });

    test('should insert elements at a specific index', () => {
        linkedList.append(1);
        linkedList.append(3);

        linkedList.insert(2, 1);

        expect(linkedList.toArray()).toEqual([1, 2, 3]);
        expect(linkedList.size()).toBe(3);
        expect(linkedList.head).toBe(1);
        expect(linkedList.tail).toBe(3);
    });

    test('should remove elements at a specific index', () => {
        linkedList.append(1);
        linkedList.append(2);
        linkedList.append(3);

        linkedList.remove(1);

        expect(linkedList.toArray()).toEqual([1, 3]);
        expect(linkedList.size()).toBe(2);
        expect(linkedList.head).toBe(1);
        expect(linkedList.tail).toBe(3);
    });

    test('should find the index of an element or meet a condition', () => {
        linkedList.append(1);
        linkedList.append(2);
        linkedList.append(3);

        const index = linkedList.indexOf((value) => value === 2);

        expect(index).toBe(1);
    });
});
