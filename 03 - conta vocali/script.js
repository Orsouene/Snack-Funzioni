/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = "javascript";

let parola = prompt("inserisce una parola");
const vocali = ["a", "e", "i", "o", "u"];

// Dichiara la funzione qui.
function VerificazioneVocali(parola, vocali) {
  // Invoca la funzione qui e stampa il risultato in console
  let liste = [];
  for (let i = 0; i < parola.length; i++) {
    for (let j = 0; j < vocali.length; j++) {
      if (parola[i] === vocali[j]) {
        liste.push(vocali[j]);
      }
    }
  }
  return liste;
}
//Risultato atteso se si passa 'javascript': 3 (a, a, i)
const result = VerificazioneVocali(parola, vocali);
console.log(result);
