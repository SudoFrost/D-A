import { LinkedList } from '../LinkedLists/LinkedList';

export class HashTable<TKey extends number | string, TValue> {
    private static capability = 10

    private _table: LinkedList<[TKey, TValue]>[]
    private _keys: LinkedList<TKey>

    constructor() {
        this._table = []
        this._keys = new LinkedList()
    }

    private calculateHash(key: TKey) {
        let hash: number
        if (typeof key === "number") {
            hash = key % HashTable.capability
        } else {
            hash = key
                .split('')
                .map(c => c.charCodeAt(0) % HashTable.capability)
                .reduce((s, c) => s + c) % HashTable.capability
        }
        return hash
    }

    put(key: TKey, value: TValue) {
        const hash = this.calculateHash(key)
        if (!this._table[hash]) {
            this._table[hash] = new LinkedList()
        }
        this._table[hash].append([key, value])
        this._keys.append(key)
    }

    get(key: TKey) {
        const hash = this.calculateHash(key)
        if (!this._table[hash]) return null
        const index = this._table[hash].indexOf((v) => v[0] === key)
        return index >= 0 ? this._table[hash].get(index)![1] : null
    }

    keys() {
        return this._keys.toArray()
    }
}