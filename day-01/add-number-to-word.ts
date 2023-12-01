const numberMap: Record<string, string> = {
    'one': 'o1ne',
    'two': 't2wo',
    'three': 't3hree',
    'four': 'f4our',
    'five': 'f5ive',
    'six': 's6ix',
    'seven': 's7even',
    'eight': 'e8ight',
    'nine': 'n9ine',
}

export function addNumberToWord(line: string): string{
    let result = line;
    Object.entries(numberMap).forEach(([word, nr]) => {
        result = result.replaceAll(word, nr);
    })
    return result;
}