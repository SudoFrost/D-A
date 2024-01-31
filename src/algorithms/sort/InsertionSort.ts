export type Comparator<T> = (a: T, b: T) => number

export default function InsertionSort<T>(arr: T[], compare?: Comparator<T>): T[] {
    compare ??= (a, b) => a == b ? 0 : a > b ? 1 : -1

    for (let i = 1; i < arr.length; i++) {
        const tmp = arr[i]
        for (let j = i - 1; j >= 0; j--) {
            if (compare(tmp, arr[j]) >= 0) break
            arr[j + 1] = arr[j]
            arr[j] = tmp
        }
    }

    return arr
}
