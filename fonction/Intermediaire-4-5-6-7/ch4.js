const prompt =require("prompt-sync")();
const nom = prompt("veuiller saisire votre nom : ");
const titre = prompt("veuiller saisire votre titre : ");
 function saluerClient(nom,titre = "Client")
 {
    return ("bonjour " + titre + " " + nom)

 }
 console.log(saluerClient(nom,titre));