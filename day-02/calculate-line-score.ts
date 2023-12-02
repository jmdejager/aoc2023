export function calculateLineScore(gameData: { game: number; sets: { color: string; count: number }[][] }): number {
    const score: Record<string, number> = {'red': 0, 'green': 0, 'blue': 0}
    gameData.sets.forEach((set) => {
        set.forEach((item) => {
            score[item.color] = Math.max(score[item.color], item.count)
        })
    })
    return Object.values(score).reduce((acc, curr) => acc * curr, 1)
}