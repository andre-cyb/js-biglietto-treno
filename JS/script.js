let userKm = prompt("inserisci qui i Km che devi percorrere");
let userAge = prompt("inserisci qui la tua età");



const ticketPrice = (userKm * 0.21);
alert("il prezzo del biglietto è di " + ticketPrice + " EUR.");


let discountUnder = ((ticketPrice / 100) * 20);
let discountOver = ((ticketPrice / 100) * 40);
console.log("prezzo biglietto: " + ticketPrice);


if (userAge < 18) {
    alert("ti verrà applicato uno sconto del 20% ovvero " + discountUnder + " EUR.");
    console.log("sconto in EUR: " + discountUnder);

} else if (userAge > 65) {
    alert("ti verrà applicato uno sconto del 40% ovvero " + discountOver + " EUR.");
    console.log("sconto in EUR: " + discountOver);

}



let nuovoPrezzoUnder = (ticketPrice - discountUnder);
let nuovoPrezzoOver = (ticketPrice - discountOver);

let prezzoUnder = (nuovoPrezzoUnder.toFixed(2));
console.log(prezzoUnder);
let prezzoOver = (nuovoPrezzoOver.toFixed(2));
console.log(prezzoOver);

if (userAge < 18) {
    alert("il prezzo del tuo biglietto scontato è di: " + prezzoUnder + " EUR.");
    console.log("prezzo finale scontato: " + prezzoUnder + " EUR.");

} else if (userAge > 65) {
    alert("il prezzo del tuo biglietto scontato è di: " + prezzoOver + " EUR.");
    console.log("prezzo finale scontato: " + prezzoOver + " EUR.");

}



alert("Buon viaggio!");
