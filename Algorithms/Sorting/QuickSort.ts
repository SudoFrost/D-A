import { Comparator, type CompareFunc } from "@/Utils/Comparator"

export default function QuickSort<T>(arr: T[], compare?: CompareFunc<T>, left?: number, right?: number): T[] {
    compare ??= new Comparator(compare).cmp

    if (left === undefined || right === undefined) {
        left = 0
        right = arr.length - 1
    }

    if (left > right) return arr

    let pivot = right

    let i = left - 1
    let j = left

    while (j <= pivot) {
        if (compare(arr[j], arr[pivot]) <= 0) {
            i++
            const tmp = arr[j]
            arr[j] = arr[i]
            arr[i] = tmp
        }
        j++
    }

    QuickSort(arr, compare, left, i - 1)
    QuickSort(arr, compare, i + 1, right)
    return arr
}
