export type Comparator<T> = (a: T, b: T) => number

export default function SelectionSort<T>(arr: T[], compare?: Comparator<T>): T[] {
    compare ??= (a, b) => a == b ? 0 : a > b ? 1 : -1

    for (let i = 0; i < arr.length - 1; i++) {
        let min = i
        for (let j = i + 1; j < arr.length; j++) {
            if (compare(arr[j], arr[min]) < 0) {
                min = j
            }
        }
        const tmp = arr[min]
        arr[min] = arr[i]
        arr[i] = tmp
    }
    return arr
}