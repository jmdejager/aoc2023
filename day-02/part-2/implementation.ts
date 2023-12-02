import * as readline from "readline";
import * as fs from "fs";
import {getGameData} from "../get-game-data";
import {calculateLineScore} from "../calculate-line-score";

const input = 'day-02/part-1/input.txt';

let total: number = 0

const lineReader = readline.createInterface({
    input: fs.createReadStream(input)
});

lineReader.on('line', function (line) {
    const gameData = getGameData(line);
    const score = calculateLineScore(gameData);
    total += score;
});

lineReader.on('close', function () {
    console.log(total);
});


