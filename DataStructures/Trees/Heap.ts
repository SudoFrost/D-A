import { Comparator, type CompareFunc } from "@/Utils/Comparator"

export class Heap<T>{
    private _heap: [null, ...T[]] = [null]
    private _size: number = 0

    private _cmp: Comparator<T>;

    constructor(compare?: CompareFunc<T>) {
        this._cmp= new Comparator(compare)
    }

    size(): number {
        return this._size
    }

    isEmpty(): boolean {
        return this.size() === 0
    }
    getHeap(){
        return this._heap.slice(1)
    }
    push(value: T): void {
        this._heap.push(value)
        let index = this.size()
        this._size++

        if (index < 2 ) return

        let parent = ~~(index / 2)
        
        while(this._cmp.lt(this._heap[index]!, this._heap[parent]!)){
            this.swap(index, parent)
            index = parent
            parent = ~~(index / 2)
        }
    }

    private swap(a: number, b: number){
        [this._heap[a], this._heap[b]] = [this._heap[b], this._heap[a]]
    }

    search(value: T){
        return this._heap.findIndex((t) => t && this._cmp.eq(t, value)) != -1
    }

    remove(value: T): void{
        let index = this._heap.findIndex((t) => t && this._cmp.eq(t, value))
        if (index == -1) return
        this._heap[index] = this._heap.pop()!
        this._size--
        while(index <= this.size()){
            let left = index * 2
            let right = left + 1
            if (left > this.size()) break
            let min = left

            if (right < this.size()) {
                min = this._cmp.lt(this._heap[left]!, this._heap[right]!) ? right: left
            }

            if (this._cmp.lt(this._heap[index]!, this._heap[min]!)) break
            this.swap(index, min)
            index = min
        }
    }

    pop(): T | null{
        if (this.size() < 1) return null
        let item = this._heap[1]
        this.remove(item)
        return item
    }
}

