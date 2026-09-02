const prompt = require("prompt-sync")();
let code = prompt("e,trer votre Code : ").toUpperCase();

switch (code) {
case "A":
    console.log("Catégorie : Électronique");
    console.log("Exemple : Smartphone");
    break;
case "B":
    console.log("Catégorie : Vêtements");
    console.log("Exemple : T-shirt");
    break;
case "C":
    console.log("Catégorie : Alimentation");
    console.log("Exemple : Pain");
    break;
case "D":
    console.log("Catégorie : Maison");
    console.log("Exemple : Chaise");
    break;
case "E":
    console.log("Catégorie : Sport");
    console.log("Exemple : Ballon");
    break;
default:
    console.log("Catégorie inconnue.");


}
