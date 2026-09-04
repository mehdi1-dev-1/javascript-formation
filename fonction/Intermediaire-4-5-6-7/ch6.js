//Challenge 6 : Validateur de Mot de Passe
//Objectif : Fonction effectuant des vérifications conditionnelles et retournant un booléen.
//Consigne : Écrivez une fonction verifierMotDePasse prenant un paramètre motDePasse. La fonction doit retourner true si le mot de passe contient au moins 8 caractères ET contient le caractère @, sinon elle retourne false.
//Exemple : verifierMotDePasse("code1234") ➔ false, verifierMotDePasse("code@1234") ➔ true.
//Notions : Conditions, méthodes de String (.length, .includes()).
const prompt =require("prompt-sync")();
let motDePasse = input();
 motDePasse = verifierMotDePasse(motDePasse);

function input (){
const motDePasse =prompt("veuiler saisire un mot de passe : ")
return motDePasse ;
}
function verifierMotDePasse(mdps) {
if (mdps.length >= 8 && mdps.includes("@")) {
return true;
}
else { 
    return false;
}
}
 motDePasse ? console.log("true") : console.log("false")