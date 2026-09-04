


function increment() {
    valeur++
    return valeur;
}

function creerCompteur(valeurInitiale = "0") {
    let valeur = valeurInitiale
    function increment() {
        valeur++
        return valeur;
    }

    return increment;
}
let compteur = creerCompteur(18);
console.log(compteur());
console.log(compteur());
console.log(compteur());
console.log(compteur());
console.log(compteur());


