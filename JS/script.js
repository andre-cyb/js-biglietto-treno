

/* NOTA PER CLELIA E FLAVIO: mi sono accorto che il codice è forse troppo lungo e non ottimizzato, cercerò di renderlo più compatto se riesco  */

/**********  Richiesta di KM e età al cliente ***************/
const userKm = prompt("inserisci qui i Km che devi percorrere");
if (isNaN(userKm)) {
    alert("Per favore inserisci un numero valido.");
}

const userAge = prompt("inserisci qui la tua età");
if (isNaN(userAge)) {
    alert("Per favore inserisci un numero valido.");
}

/**********  calcolo prezzo intero ***************/
const ticketPrice = (userKm * 0.21);
alert("il prezzo del biglietto è di " + ticketPrice + " EUR.");

/**********  variabili sconto ***************/
let discountUnder = ((ticketPrice / 100) * 20);
let discountOver = ((ticketPrice / 100) * 40);
console.log("prezzo biglietto: " + ticketPrice);


/**********  alert dello sconto in base all'età ***************/
if (userAge < 18) {
    alert("ti verrà applicato uno sconto del 20% ovvero: " + discountUnder + " EUR.");
    console.log("sconto in EUR: " + discountUnder);

} else if (userAge > 65) {
    alert("ti verrà applicato uno sconto del 40% ovvero: " + discountOver + " EUR.");
    console.log("sconto in EUR: " + discountOver);

}

/**********  calcolo prezzo scontato ***************/
let nuovoPrezzoUnder = (ticketPrice - discountUnder);
let nuovoPrezzoOver = (ticketPrice - discountOver);

/**********  bonus decimali ***************/
let prezzoUnder = (nuovoPrezzoUnder.toFixed(2));
let prezzoOver = (nuovoPrezzoOver.toFixed(2));

/**********  alert prezzo finale scontato ***************/
if (userAge < 18) {
    alert("il prezzo del tuo biglietto scontato è di: " + prezzoUnder + " EUR.");
    console.log("prezzo finale scontato: " + prezzoUnder + " EUR.");

} else if (userAge > 65) {
    alert("il prezzo del tuo biglietto scontato è di: " + prezzoOver + " EUR.");
    console.log("prezzo finale scontato: " + prezzoOver + " EUR.");

}



alert("Buon viaggio!");
