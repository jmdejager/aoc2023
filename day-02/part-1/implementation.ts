import * as readline from "readline";
import * as fs from "fs";
import {getGameData} from "../get-game-data";
import {validateSet} from "../validate-set";

const input = 'day-02/part-1/input.txt';

let total: number = 0;
let limits: Record<string, number> = {
    'red': 12,
    'green': 13,
    'blue': 14
}

const lineReader = readline.createInterface({
    input: fs.createReadStream(input)
});

lineReader.on('line', function (line) {
    const gameData = getGameData(line);
    if(validateSet(gameData.sets, limits)){
        total += gameData.game;
    }
});

lineReader.on('close', function () {
    console.log(total);
});
