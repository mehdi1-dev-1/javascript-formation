const prompt = require("prompt-sync")();
let base = Number(prompt("Base : "));
let exposant = Number(prompt("Exposant : "));
let i = 1;
let resultat = 1;

while (i <= exposant) {
    resultat = resultat * base;
    i++;
}

console.log("Résultat : " + resultat);