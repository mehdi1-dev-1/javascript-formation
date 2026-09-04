const prompt = require("prompt-sync")();
let pn = +prompt("entrer un  premier nombre : ");
let o = prompt("entrer un  opérateur : ");
let dn = +prompt("entrer un deuxième nombre : ");
console.log( "premier nombre : " + pn)
console.log( "operation : " + o)
console.log( "deuxieme nombre : " + dn)
switch (o) {
    case "+":
        console.log("resultat : " + (pn+dn));
        break;
    case "-":
        console.log("resultat : " + (pn-dn));
        break;
    case "*":
        console.log("resultat : " + (pn*dn));
        break;
        case "/":
       dn == 0 ?  console.log(" on ne peux pas deviser par 0") : console.log("resultat : " + (pn/dn));
        break;
    default: console.log("Opérateur invalide.")
}
