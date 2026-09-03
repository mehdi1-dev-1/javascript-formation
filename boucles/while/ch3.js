const prompt = require("prompt-sync")();

let nombre = Number(prompt("Nombre de missions : "));
let i = 1;
let score = 0;

while (i <= nombre) {
    score = score + 100;

    console.log("Mission " + i + " → Score : " + score);

    i++;
}