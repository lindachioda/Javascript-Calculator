alert ("calcolatrice");

//funzione per rendere la calcolatrice interattiva:
//Questa riga crea una funzione chiamata scriviInDisplay
//VALORE dentro le parentesi riceve il numero o simbolo del bottone che hai cliccato.
function aggiungiValore(value) {
    //“Trova l’elemento HTML che ha l’id display e salvalo in una variabile chiamata display.”
    let display = document.getElementById("display");
    //display.value rappresenta il testo attualmente scritto dentro l’input
    //L’operatore += significa “aggiungi e aggiorna”:Prendi quello che c’è già nel display e aggiungi il nuovo numero (o simbolo) appena cliccato.
    display.value += value;
}


//funzione per scrivere il risultato:
function mostraRisultato(value) {
    //usa eval per dire alla funzione che quello è il codice
    //identifica il risultato
    let result = eval(document.getElementById("display").value);
    //chiama la funzione
    document.getElementById("display").value = result;
}

//cancella da display + rendi valore 0 quando cancello con C:
let display = document.getElementById("display");

function cancellaValore(value) {
    
    //document.value = ""; // svuota il contenuto del display
    display.value = "0"; // rimette il placeholder a 0
}

