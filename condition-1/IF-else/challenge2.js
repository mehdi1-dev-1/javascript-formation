const readline = require("readline");
const rl = readline.createInterface(
     { input : process.stdin,
    output : process.stdout
     });
rl.question("entrer un nombre : " , (answer) =>{
     let nombre = Number(answer);
     if ( nombre < 0 )
     {console.log("le nombre est negatife");}
     else if( nombre >0)
     {console.log("le nombre est positif");}
        else
            {console.log("le nombre est egale a zero")};
});

