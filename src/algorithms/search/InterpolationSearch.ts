
function getProb(target: number, ILow: number, IHigh: number, low: number, high: number) {
    return Math.floor(
        ILow
        + ((target - low) * (IHigh - ILow))
        / (high - low)
    )
}

export default function InterpolationSearch<T>(arr: T[], target: T, get?: ((i: T) => number)) {
    let low = 0
    let high = arr.length - 1

    get ??= (i: T) => i as unknown as number;

    while (low <= high) {
        const prob = getProb(get(target), low, high, get(arr[low]), get(arr[high]))

        if (arr[prob] && get(arr[prob]) === get(target)) {
            return prob
        } else if (arr[prob] > target) {
            high = prob - 1
        } else {
            low = prob + 1
        }
    }

    return -1
}