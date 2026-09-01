const readline = require('readline');
const rl = readline.createInterface({ 
input:  process.stdin,
output: process.stdout
});
rl.question("entrer la disatance :" , (answer1) => {
let kilometres = Number(answer1);
rl.question("entrer la carburant :" , (answer2) => {
let litres = Number(answer2);
let Consommation = (litres / kilometres) * 100;
console.log("la cosomation est : " + Consommation );
rl.close();
 });
});