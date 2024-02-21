import { Comparator, type CompareFunc } from "@/Utils/Comparator"

export default function BubbleSort<T>(arr: T[], compare?: CompareFunc<T>): T[] {
    compare ??= new Comparator(compare).cmp

    for (let i = 0; i < arr.length; i++) {
        let swap = false
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (compare(arr[j], arr[j + 1]) > 0) {
                swap = true
                const tmp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = tmp
            }
        }
        if (!swap) break
    }

    return arr
}
