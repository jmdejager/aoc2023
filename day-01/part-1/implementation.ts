import {eachLine} from "line-reader";
import {getNumberFromLine} from "../get-number-from-line";

const input = 'day-01/part-1/input.txt';

let total: number = 0;

eachLine(input , (line) => {
    total += getNumberFromLine(line);
},(err) => {
    if(err) throw new Error(err.message);
    console.log(total);
})
