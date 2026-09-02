const prompt = require("prompt-sync")();
console.log("1-Bus     ");
console.log("2-Train   ");
console.log("3-Tramway ");
console.log("4-Taxi  ");
console.log("5-Vélo   ");
let choix = +prompt("entrer un mooyyen de trannspoort : ");
console.log("moyennne de transport : " + choix )
switch (choix) {
    case 1:
        console.log("prix : 5 DH");
        break;
    case 2:
        console.log("prix :   → 20 DH");
        break;
    case 3:
        console.log("prix : → 6 DH");
        break;
    case 4:
        console.log("prix :    → 15 DH");
        break;
    case 5:
        console.log("prix :    → 10 DH");
        break;
    
    default: console.log("Transport invalide.")
}
