/* Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma */

//1 . Chiedere all'utente di inserire una parola
const word = prompt("Inserisci una parola");
//2 creare una funzione per capire invertire la parola selezionata
function reversedword(word){
//creare una variabile in cui andiamo ad incapsulare la parola scelta
    let reversed = "";
//creare il ciclo per determinare la posizione di ogni lettera e stamparla al contrario
    for(i = word.length - 1; i >= 0; i--){
        reversed += word[i];
    }
    return reversed
}

function isPalindroma(word) {
        if(word === reversedword(word)){
            return true
        } else {
            return false
        }
    }

if(isPalindroma(word) === true){
    alert( `La parola ${word} è palindroma`)
    } else
    alert(`la parola ${word} non è palindroma`)
    {
}


