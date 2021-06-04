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

    // ho scritto cosi in modo che se, una volta calcolato il costo l'utente vada a mettere 
    // ZERO come valore nei km o tolga il nome o la fascia d'età, la schermata dele biglietto si chiuda 

    // prendiamo il nome
    var generalita = document.getElementById('nome').value;  
    if ((generalita == "") || (generalita == "undefined")) {
        alert("Il campo nome è obbligatorio."); 
        document.getElementById('biglietto').classList.add("d-none");                
        return false;
    }      

    // prendiamo i km
    var km = document.getElementById('km').value;
    var prezzo = km * 0.21; 
    if ((km == "") || (km == "undefined")) {
        alert("Il campo Km è obbligatorio.");  
        document.getElementById('biglietto').classList.add("d-none");                 
        return false;                  
    } else if (km == 0){
        alert("Mettere una quantità superiore a zero");  
        document.getElementById('biglietto').classList.add("d-none");                  
        return false;        
    }
      
    // condizione fascia eta
    var fascia = document.getElementById('fascia-eta').value;     

    if(fascia == 'Minorenne (sconto del 20%)'){
        prezzo = (prezzo - (prezzo / 100 * 20)).toFixed(2); 
        document.getElementById('biglietto').classList.remove("d-none");       
    }

    if(fascia == 'Prezzo standard'){        
        document.getElementById('biglietto').classList.remove("d-none");       
    }

    if (fascia == 'Over65 (sconto del 40%)'){
        prezzo = (prezzo - (prezzo / 100 * 40)).toFixed(2);  
        document.getElementById('biglietto').classList.remove("d-none");      
    } 
    
    if(fascia == 'seleziona'){
        alert("Seleziona la fascia di età"); 
        document.getElementById('biglietto').classList.add("d-none");                  
    }   


    // codice carrozza 
    var carrozza = Math.round(Math.random()*8)+1;

    // codice poltrona
    var numeroPoltrona = Math.round(Math.random()*3)+1; // messo 3 per avere massimo 4posti (tipo quelli col tavolo in comune) 
    
    const n=1;    
    var letterList = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (var i=0; i<n; i++){
        letterDellaFila = letterList.charAt(Math.floor(Math.random() * letterList.length));
    }   
    // codice Cp 
    var codiceCp = Math.floor(Math.random() * (100000 - 90000 +1)) + 90000;
    
    // output
    document.getElementById('offerta').innerHTML = fascia;    
    document.getElementById('carrozza').innerHTML = 'n° ' + carrozza;
    document.getElementById('poltrona').innerHTML = numeroPoltrona+letterDellaFila;
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