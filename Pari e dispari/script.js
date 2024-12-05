// Funzione per determinare se un numero è pari
function isEven(number) {
    return number % 2 === 0;
}

// Funzione per generare un numero casuale tra 1 e 5
function getRandomNumber() {
    return Math.floor(Math.random() * 5) + 1;
}

//L'utente sceglie pari o dispari
let userChoice = prompt("Scegli 'pari' o 'dispari':").toLowerCase();
while (userChoice !== "pari" && userChoice !== "dispari") {
    userChoice = prompt("Scelta non valida. Scegli 'pari' o 'dispari':").toLowerCase();
}

//L'utente inserisce un numero da 1 a 5
let userNumber = parseInt(prompt("Inserisci un numero da 1 a 5:"));
while (isNaN(userNumber) && userNumber < 1 && userNumber > 5) {
    userNumber = parseInt(prompt("Numero non valido. Inserisci un numero da 1 a 5:"));
}

//Genera un numero casuale per il computer
let computerNumber = getRandomNumber();
alert(`Il computer ha scelto il numero: ${computerNumber}`);

//Sommiamo i due numeri
let sum = userNumber + computerNumber;
alert(`La somma dei numeri è: ${sum}`);

//Determiniamo se la somma è pari o dispari
let result = isEven(sum) ? "pari" : "dispari";
alert(`La somma è ${result}`);

//Dichiarare il vincitore
if (userChoice === result) {
    alert("Hai vinto!");
} else {
    alert("Hai perso!");
}