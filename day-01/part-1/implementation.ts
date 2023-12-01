import {getNumberFromLine} from "../get-number-from-line";
import * as readline from "readline";
import * as fs from "fs";

const input = 'day-01/part-1/input.txt';

let total: number = 0;

const lineReader = readline.createInterface({
    input: fs.createReadStream(input)
});

lineReader.on('line', function (line) {
    total += getNumberFromLine(line);
});

lineReader.on('close', function () {
    console.log(total);
});
