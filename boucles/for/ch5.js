const prompt = require("prompt-sync")();
let nombre = +prompt("Entrez un nombre 1 N: ");
let nombre2 = +prompt("Entrez un nombre 2 X: ");
for( let i = 1  ; i<=nombre ; i++)
    {
        if(i % nombre2 === 0)
        console.log(i)
    }