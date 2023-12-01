import {eachLine} from "line-reader";
import {getNumberFromLine} from "../get-number-from-line";
import {addNumberToWord} from "../add-number-to-word";

const input = 'day-01/part-2/input.txt';

let total: number = 0;

eachLine(input , (line) => {
    line = addNumberToWord(line);
    total += getNumberFromLine(line);
},(err) => {
    if(err) throw new Error(err.message);
    console.log(total);
})