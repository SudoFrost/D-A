import { HashTable } from './HashTable';
import { describe, expect, test } from 'bun:test';

describe('HashTable', () => {
    test('put', () => {
        const hashTable = new HashTable<string, number>()
        hashTable.put('a', 1)
        hashTable.put('b', 2)
        hashTable.put('c', 3)
        expect(hashTable.keys()).toEqual(['a', 'b', 'c'])
    })

    test('get', () => {
        const hashTable = new HashTable<string, number>()
        hashTable.put('a', 1)
        hashTable.put('b', 2)
        hashTable.put('c', 3)
        expect(hashTable.get('a')).toBe(1)
        expect(hashTable.get('b')).toBe(2)
        expect(hashTable.get('c')).toBe(3)
        expect(hashTable.get('d')).toBe(null)
    })

    test('keys', () => {
        const hashTable = new HashTable<string, number>()
        hashTable.put('a', 1)
        hashTable.put('b', 2)
        hashTable.put('c', 3)
        expect(hashTable.keys()).toEqual(['a', 'b', 'c'])
        hashTable.put('d', 4)
        expect(hashTable.keys()).toEqual(['a', 'b', 'c', 'd'])
    })
})