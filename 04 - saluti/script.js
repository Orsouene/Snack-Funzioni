/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const name = "Mario";

let nome = prompt("Scrive il tuo nome ");
let saluto = "";
// Dichiara la funzione qui.
const salutare = (nome, saluto) =>
  // Invoca la funzione qui e stampa il risultato in console
  (saluto = "Ciao " + nome);

//Risultato atteso se si passa 'Mario': // ciao Mario
const resultato = salutare(nome);
console.log(resultato);
