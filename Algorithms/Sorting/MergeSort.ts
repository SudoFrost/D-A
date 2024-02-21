import { Comparator, type CompareFunc } from "@/Utils/Comparator"

export default function MergeSort<T>(arr: T[], compare?: CompareFunc<T>): T[] {
    compare ??= new Comparator(compare).cmp

    let root = Math.ceil(Math.sqrt(arr.length))
    let i = 0
    while (i <= root) {
        const size = (2 ** i)

        let low = 0
        let high = size * 2

        while (high - size < arr.length) {
            high = high > arr.length ? arr.length : high
            let sub1 = arr.slice(low, low + size)
            let sub2 = arr.slice(low + size, high)
            let s1 = 0
            let s2 = 0
            let i = low
            while (i < high) {
                if (s2 >= sub2.length) {
                    arr[i] = sub1[s1++]
                } else if (s1 >= sub1.length) {
                    arr[i] = sub2[s2++]
                } else if (compare(sub1[s1], sub2[s2]) <= 0) {
                    arr[i] = sub1[s1++]
                } else {
                    arr[i] = sub2[s2++]
                }
                i++
            }
            low = high
            high = low + size * 2
        }
        i++
    }

    return arr
}
