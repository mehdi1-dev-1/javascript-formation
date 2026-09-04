function convertirMontant(montant, taux, formatter) {
    let newMontant = montant * taux;
    formatter(newMontant);
    return formatter(newMontant);
}
function formatter(newMontant) {
    return newMontant + " DH"
}
console.log(convertirMontant(10, 10.5, formatter))

