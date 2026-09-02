const prompt = require("prompt-sync")();
let choix = +prompt("entrer un nombre : ");
switch (choix) {
    case 1:
        console.log("lundi");
        break;
    case 2:
        console.log("mardi");
        break;
    case 3:
        console.log("mercredi");
        break;
    case 4:
        console.log("jeuudi");
        break;
    case 5:
        console.log("vendredi");
        break;
    case 6:
        console.log("samedi");
        break;
    case 7:
        console.log("dimanche");
        break;
    default: console.log("innvalide")
}
