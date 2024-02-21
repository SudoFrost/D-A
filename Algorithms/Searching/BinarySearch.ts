import { Comparator, type CompareFunc } from "@/Utils/Comparator"

export function BinarySearch<T>(arr: T[], target: T, { compare }: { compare?: CompareFunc<T> } = {}): number {
    let left = 0
    let right = arr.length - 1
    let mid = Math.floor(right / 2)

    compare ??= new Comparator(compare).cmp

    while (left <= right) {
        const res = compare(target, arr[mid])

        if (res == 0) return mid

        if (res > 0) {
            left = mid + 1
        } else {
            right = mid - 1
        }

        mid = left + (Math.floor((right - left) / 2))
    }

    return -1
}

