const prompt = require("prompt-sync")();
let nombre = +prompt("Entrez un nombre N : ");
let somme = 0;
for (let i = 1; i <= nombre; i++) {
    somme = somme + i;
}
console.log("N : " + nombre);
console.log("Somme : " + somme);