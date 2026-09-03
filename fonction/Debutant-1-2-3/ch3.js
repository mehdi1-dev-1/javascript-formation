
const prompt =require("prompt-sync")();
const nom = prompt("veuiller saisire votre nom : ").toLowerCase();
const prenom = prompt("veuiller saisire votre prenom : ").toLowerCase();
function genererEmail(nom , prenom)
{
    return ( nom + "." + prenom + "@entreprise.com")
}
console.log(genererEmail(nom,prenom));