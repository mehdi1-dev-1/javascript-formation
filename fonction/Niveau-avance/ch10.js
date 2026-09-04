
const prompt =require("prompt-sync")();
let text = prompt("veiller ecrire quelque chose : ")
function nettoyerEspaces(texte){
return texte.trim() ;
}
function mettreEnMajuscule( texte ){
return texte.toUpperCase() ;
}
function ajouterPrefixe(texte){
return  "LOG:"+ texte
}
function traiterMessage(texte){
    let resultat = nettoyerEspaces(texte);
resultat = mettreEnMajuscule( resultat );
resultat = ajouterPrefixe(resultat);
return resultat;
}
console.log(traiterMessage(text));

