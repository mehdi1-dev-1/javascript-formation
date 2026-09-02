const prompt = require("prompt-sync")();
let nombre = +prompt("Entrez un nombre N : ");
while (nombre >= 0) {
    console.log(nombre);
    nombre--;
}