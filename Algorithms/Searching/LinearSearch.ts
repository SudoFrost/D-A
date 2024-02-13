
export type SearchCallback<T> = (item: T) => boolean

export default function LinearSearch<T>(arr: T[], search: T | SearchCallback<T>): number {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == search) return i
        if (search instanceof Function && search(arr[i])) return i
    }

    return -1
}