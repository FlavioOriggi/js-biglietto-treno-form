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

    document.getElementById('biglietto').classList.remove("d-none");
    // prendiamo il nome
    var generalita = document.getElementById('nome').value;
    console.log(generalita);    

    // prendiamo i km
    var km = document.getElementById('km').value;
    var prezzo = km * 0.21;
    console.log(prezzo);

    // condizione fascia eta
    var fascia = document.getElementById('fascia-eta').value;
    console.log(fascia);    

    if(fascia == 'Minorenne'){
        prezzo = (prezzo - (prezzo / 100 * 20)).toFixed(2);        
    }

    if (fascia == 'Over65'){
        prezzo = (prezzo - (prezzo / 100 * 40)).toFixed(2);        
    } 
    
    if(fascia == 'seleziona'){
        alert("Seleziona la fascia di età"); 
           
    }

    // carrozza e codice Cp devono poi essere calcolati random
    var carrozza = Math.round(Math.random()*8)+1;

    var codiceCp = Math.floor(Math.random() * (100000 - 90000 +1)) + 90000;

    // output
    document.getElementById('offerta').innerHTML = fascia;    
    document.getElementById('carrozza').innerHTML = 'n° ' + carrozza;
    document.getElementById('codice-cp').innerHTML = codiceCp;
    document.getElementById('costo').innerHTML = prezzo +' €';
    document.getElementById('utente').innerHTML = generalita;
});

// button reset
var annulla = document.getElementById('annulla');
annulla.addEventListener("click", function(){
    document.getElementById('biglietto').classList.add("d-none");
    document.getElementById('nome').value = "";
    document.getElementById('fascia-eta').value = "";
    document.getElementById('km').value = "";
});