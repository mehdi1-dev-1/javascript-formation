const prompt = require("prompt-sync")();
let montant = +prompt("Montant de la commande : ");

if (montant >= 500) {
console.log("Livraison : Gratuite");
console.log("Total à payer : " + montant + " DH");
} else {
let fraisLivraison = 40;
console.log("Livraison : " + fraisLivraison + " DH");
console.log("Total à payer : " + (fraisLivraison + montant) + " DH");
}
