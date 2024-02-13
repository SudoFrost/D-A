
export type Compare<T> = (a: T, b: T) => number

export function BinarySearch<T>(arr: T[], target: T, { compare }: { compare?: Compare<T> } = {}): number {
    let left = 0
    let right = arr.length - 1
    let mid = Math.floor(right / 2)

    compare ??= (a: T, b: T) => (a == b) ? 0 : ((a > b) ? 1 : -1)

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

