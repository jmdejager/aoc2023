export function validateSet(sets: { color: string, count: number }[][], limits: Record<string, number>): boolean {
    return !sets.some((set) => {
        return set.some((item) => {
            return limits[item.color] < item.count
        })
    })
}