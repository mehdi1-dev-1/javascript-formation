const prompt =require("prompt-sync")();
let tage = input();
 tage = verifierAge(tage);

function input (){
const tage =+prompt("veuiler saisire un age : ")
return tage ;
}
function verifierAge(age) {
if (age <18) {
return true;
}
else { 
    return false;
}
}
 tage ? console.log("mineur") : console.log("majeur")