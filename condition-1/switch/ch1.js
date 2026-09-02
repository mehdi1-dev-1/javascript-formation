
const prompt = require("prompt-sync")();
console.log("1 → Afficher le profil")
console.log("2 → Afficher les paramètres")
console.log("3 → Afficher les notifications")
console.log("4 → Se déconnecter")
let choix = +prompt("Quel est votre choix ? ");
 switch(choix){
    case 1: 
    console.log("Afficher le profil");
    break;
    case 2:
    console.log("Afficher le parramettres");
    break;
    case 3:
    console.log(" Afficher le notoficationn");
    break;
    case 4:
    console.log("deconnexionn");
    default:console.log("invvvalide");
 }