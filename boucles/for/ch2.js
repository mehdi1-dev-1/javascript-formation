const prompt = require("prompt-sync")();
let nombre = +prompt("Entrez un nombre N : ");

for (let i = 1; i <= nombre; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }}