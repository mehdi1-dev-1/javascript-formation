const prompt = require("prompt-sync")();
let nombre = Number(prompt("ENTRER UN NOMBRE : "));
let i = 1;
let somme = 0;
let nbrvlr = 0;
while(nombre !== 0) {
   somme = somme + nombre;
    nbrvlr++;
    nombre = Number(prompt("Saisie autre nombre : "));
}
 
console.log("Nombre de valeurs : " + nbrvlr);
console.log("Somme : " + somme);