const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("entrer la dure de film : git " , (answer) => {
let duree = Number(answer);
console.log("Durée : " + duree );

if (duree < 60){
    console.log("categorie  est court metrage "  )}

else if (duree >= 60 && duree <= 120)
{console.log("categorie est standard  "  )}

else  (duree > 120)
{console.log("categorie est  film long "  )}

rl.close();
});
