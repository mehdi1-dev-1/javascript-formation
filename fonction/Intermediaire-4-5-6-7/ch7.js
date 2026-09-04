
    function obtenirHeureActuelle() {
    let maintenant = new Date();

    let heure = maintenant.getHours();
    let minutes = maintenant.getMinutes();
    let secondes = maintenant.getSeconds();

    return (heure  + ":" + minutes + ":" + secondes)
}


  console.log(obtenirHeureActuelle());