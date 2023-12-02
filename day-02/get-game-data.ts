export function getGameData(line: string): { game: number, sets: { color: string, count: number }[][] } {
    const [, game, ...sets] = line.split(' ');
    const setsString = sets.join(' ');
    const setStrings = setsString.split(';')
    return {
        game: parseInt(game),
        sets: setStrings.map((setString) => {
            const sets = setString.split(',')
            return sets.map((setItems) => {
                const [count, color] = setItems.trim().split(' ');
                return {count: parseInt(count), color}
            });
        })
    }
}