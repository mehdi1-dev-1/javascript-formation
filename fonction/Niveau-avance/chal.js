
const prompt=require("prompt-sync")();
let mdps = prompt("veiller saisire un mots de passe :");

function verifierMotDePasse(MotDePasse){
    if(MotDePasse.length>8 && MotDePasse.includes("@"))
        return true;
    else 
        return false;
}
console.log(verifierMotDePasse(mdps))