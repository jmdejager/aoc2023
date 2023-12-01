const numberMap: Record<string, string> = {
    'one': '1',
    'two': '2',
    'three': '3',
    'four': '4',
    'five': '5',
    'six': '6',
    'seven': '7',
    'eight': '8',
    'nine': '9',
}

export function addNumberToWord(line: string): string{
    let result = line;
    Object.entries(numberMap).forEach(([word, nr]) => {
        result = result.replaceAll(word, word + nr + word);
    })
    return result;
}