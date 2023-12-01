import {getNumberFromLine} from "../get-number-from-line";
import {addNumberToWord} from "../add-number-to-word";
import readline from "readline";
import fs from "fs";

const input = 'day-01/part-2/input.txt';

let total: number = 0;

const lineReader = readline.createInterface({
    input: fs.createReadStream(input)
});

lineReader.on('line', function (line) {
    line = addNumberToWord(line);
    total += getNumberFromLine(line);
});

lineReader.on('close', function () {
    console.log(total);
});