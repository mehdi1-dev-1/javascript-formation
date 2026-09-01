const readline = require('readline');
const rl = readline.createInterface({ 
input:  process.stdin,
output: process.stdout
});
rl.question("entrer la tention  1 :" , (answer1) => {
let note1 = Number(answer1);
rl.question("entrer l intensite 2 :" , (answer2) => {
let note2 = Number(answer2);
rl.question("entrer le temps 3 :" , (answer3) => {
let note3   = Number(answer3);
let notefinale =  note1 * note2 * note3
console.log("t : " + note1 );
console.log("i : " + note2 );
console.log("temps : " + note3 );
console.log(" energie : " + notefinale );
}); }); });