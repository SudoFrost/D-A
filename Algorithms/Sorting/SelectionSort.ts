import { Comparator, type CompareFunc } from "@/Utils/Comparator"

export default function SelectionSort<T>(arr: T[], compare?: CompareFunc<T>): T[] {
    compare ??= new Comparator(compare).cmp

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