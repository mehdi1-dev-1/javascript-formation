
function additionnerTout(...args) {
    let somme = 0;
    let i = 0;
    while (i < args.length) {
        somme = somme + args[i];
        i++;
    }
    return somme;
}
console.log(additionnerTout(10, 20, 30, 40));