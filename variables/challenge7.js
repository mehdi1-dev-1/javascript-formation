const readline = require('readline');
const rl = readline.createInterface({ 
input:  process.stdin,
output: process.stdout
});
rl.question("entrer la note  1 :" , (answer1) => {
let note1 = Number(answer1);
rl.question("entrer le note 2 :" , (answer2) => {
let note2 = Number(answer2);
rl.question("entrer le note 3 :" , (answer3) => {
let note3   = Number(answer3);
let notefinale = (note1 * 2 + note2 * 3 + note3 * 5) / 10
console.log("cotrole cotinue : " + note1 );
console.log("projet : " + note2 );
console.log("exam : " + note3 );
console.log("cotrole cotinue : " + notefinale );
}); }); });