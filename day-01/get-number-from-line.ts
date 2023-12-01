export function getNumberFromLine(line: string): number {
    const numbers = [...line].filter(Number);
    const first = numbers[0];
    const last = numbers[numbers.length -1];
    return parseInt(first + last);
}