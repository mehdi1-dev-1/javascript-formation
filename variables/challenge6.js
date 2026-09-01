const readline = require('readline');
const rl = readline.createInterface({ 
input:  process.stdin,
output: process.stdout
});
rl.question("entrer la score 1 :" , (answer1) => {
let score1 = Number(answer1);
rl.question("entrer le score 2 :" , (answer2) => {
let score2 = Number(answer2);
rl.question("entrer le score 3 :" , (answer3) => {
let score3   = Number(answer3);
rl.question("entrer le score 4 :" , (answer4) => {
let score4 = Number(answer4);
console.log("partie1 1 : " + answer1 )
console.log("partie1 2 : " + answer2 )
console.log("partie1 3 : " + answer3)
console.log("partie1 4 : " + answer4 )
console.log("score total est : " + (score1 + score2 + score3 + score4) )
console.log("score moyen est : " + (score1 + score2 + score3 + score4)/4 )
rl.close();;
}); }); });});
