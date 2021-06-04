// Creiamo un finto biglietto del treno con:
//  -Nome passeggero
//  -Codice treno (numero casuale tra 90000 e 100000 escluso)
//  -Numero carrozza (numero casuale tra 1 e 9 incluso)
//  -Prezzo calcolato in base all'esercizio visto in precedenza
//  -Categoria selezionata dall'utente
//  -Al click su "Genera" appare la schermata con le caratteristiche del biglietto.
//  -Al click su "Annulla" dobbiamo ripulire il form e far sparire la sezione che calcola il prezzo del biglietto.



// prendere valori da una casella di input
var submit = document.getElementById('submit');

submit.addEventListener("click", function(){

    document.getElementById('biglietto').className = "show";
    // prendiamo il nome
    var generalita = document.getElementById('nome').nodeValue;
    console.log(generalita);    

    // prendiamo i km
    var km = document.getElementById('km').value;
    var prezzo = km * 0.21;
    console.log(prezzo);

    // condizione fascia eta
    var fascia = document.getElementById('fascia-eta').value;
    console.log(fascia);    

    if(fascia == 'minorenne'){
        prezzo = (prezzo - (prezzo / 100 * 20)).toFixed(2);        
    } else if (fascia == 'over65'){
        prezzo = (prezzo - (prezzo / 100 * 40)).toFixed(2);        
    } else{
        prezzo
    }

    // carrozza e codice Cp devono poi essere calcolati random
    var carrozza = 3;
    var codiceCp = 97654;

    // output
    document.getElementById('offerta').innerHTML = fascia;    
    document.getElementById('carrozza').innerHTML = carrozza;
    document.getElementById('codice-cp').innerHTML = codiceCp;
    document.getElementById('costo').innerHTML = prezzo;
    document.getElementById('utente').innerHTML = generalita;






});

// button reset
var annulla = document.getElementById('annulla');

annulla.addEventListener("click", function(){
    document.getElementById('biglietto').value = "hidden";

    document.getElementById('nome').value = "";
    document.getElementById('age').value = "";
    document.getElementById('km').value = "";
});