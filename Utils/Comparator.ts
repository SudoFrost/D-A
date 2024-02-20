export type CompareFunc<T> = (a: T, b: T) => number

export class Comparator<T> {
    constructor(
        private _compare: CompareFunc<T> = (a, b) => a == b ? 0 : a > b ? 1 : -1
    ) { }

    cmp(a: T, b: T): number {
        return this._compare(a, b)
    }

    eq(a: T, b: T): boolean {
        return this.cmp(a, b) === 0
    }

    lt(a: T, b: T): boolean {
        return this.cmp(a, b) < 0
    }

    gt(a: T, b: T): boolean {
        return this.cmp(a, b) > 0
    }
}