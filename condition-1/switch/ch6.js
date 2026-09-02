const prompt = require("prompt-sync")();

const choix = +prompt("Choisir un plat : ");
const choixq = +prompt("Choisir la quantité : ");

switch (choix) {

    case 1:
        let prixUnitaire = 60;
        let total = prixUnitaire * choixq;

        console.log("Plat choisi : Pizza");
        console.log("Prix unitaire : 60 DH");
        console.log("Quantité : " + choixq);
        console.log("Sous-total : " + total + " DH");

        if (total >= 200) {
            let reduction = total * 10 / 100;
            let prixFinal = total - reduction;

            console.log("Réduction : " + reduction + " DH");
            console.log("Prix final : " + prixFinal + " DH");
        } else {
            console.log("Pas de réduction");
            console.log("Prix final : " + total + " DH");
        }

        break;

    case 2:
        let prixUnitaire2 = 45;
        let total2 = prixUnitaire2 * choixq;

        console.log("Plat choisi : Burger");
        console.log("Prix unitaire : 45 DH");
        console.log("Quantité : " + choixq);
        console.log("Sous-total : " + total2 + " DH");

        if (total2 >= 200) {
            let reduction2 = total2 * 10 / 100;
            let prixFinal2 = total2 - reduction2;

            console.log("Réduction : " + reduction2 + " DH");
            console.log("Prix final : " + prixFinal2 + " DH");
        } else {
            console.log("Pas de réduction");
            console.log("Prix final : " + total2 + " DH");
        }

        break;

    case 3:
        let prixUnitaire3 = 40;
        let total3 = prixUnitaire3 * choixq;

        console.log("Plat choisi : Tacos");
        console.log("Prix unitaire : 40 DH");
        console.log("Quantité : " + choixq);
        console.log("Sous-total : " + total3 + " DH");

        if (total3 >= 200) {
            let reduction3 = total3 * 10 / 100;
            let prixFinal3 = total3 - reduction3;

            console.log("Réduction : " + reduction3 + " DH");
            console.log("Prix final : " + prixFinal3 + " DH");
        } else {
            console.log("Pas de réduction");
            console.log("Prix final : " + total3 + " DH");
        }

        break;

    case 4:
        let prixUnitaire4 = 30;
        let total4 = prixUnitaire4 * choixq;

        console.log("Plat choisi : Salade");
        console.log("Prix unitaire : 30 DH");
        console.log("Quantité : " + choixq);
        console.log("Sous-total : " + total4 + " DH");

        if (total4 >= 200) {
            let reduction4 = total4 * 10 / 100;
            let prixFinal4 = total4 - reduction4;

            console.log("Réduction : " + reduction4 + " DH");
            console.log("Prix final : " + prixFinal4 + " DH");
        } else {
            console.log("Pas de réduction");
            console.log("Prix final : " + total4 + " DH");
        }

        break;

    default:
        console.log("Choix invalide.");
}