const prompt = require("prompt-sync")();
let nombre = +prompt("Entrez un nombre : ");

for (let i = 1; i <= nombre; i++) {
    console.log("nobre dee partisipant est : " + i );
}