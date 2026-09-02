const prompt = require("prompt-sync")();

let resultat = prompt("Quel est votre resultat ? ");

let note = Number(resultat);

if (note < 0 || note > 20) {
console.log("Note invalide");
} else if (note >= 10) {
console.log("Admis");
} else {
console.log("Non admis");
}
