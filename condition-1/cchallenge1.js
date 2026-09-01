const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("entrer votre age : " , (answer) => {
let age = Number(answer);
if (age < 18 )
    {console.log("acces pas autorise : "  );}
else
     {console.log("acce autorise : "  );}

});
