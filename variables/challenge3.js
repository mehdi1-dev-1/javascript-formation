const readline = require('readline');
const rl = readline.createInterface ({
    input : process.stdin,
    output : process.stdout
});
rl.question("Entrer la valeur en GB : " , (answer) => {
let gb = Number(answer);
let mb = gb * 1024;
console.log("resultat est :" + mb + "  MB" );
rl.close()
});  