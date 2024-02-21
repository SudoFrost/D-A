import { Comparator, type CompareFunc } from "@/Utils/Comparator"

export default function InsertionSort<T>(arr: T[], compare?: CompareFunc<T>): T[] {
    compare ??= new Comparator(compare).cmp

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
