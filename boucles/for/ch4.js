const prompt = require("prompt-sync")();
let nombre = +prompt("Entrez un nombre N : ");
let multiplication = 0
console.log("nombre :" + nombre)
for(let i = 1 ; i<=10 ; i++)
    { multiplication = nombre * i ;
console.log(nombre + "*" + i + "=" + multiplication)
    }
