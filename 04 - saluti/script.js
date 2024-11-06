/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const name = "Mario";

let nome = prompt("Scrive il tuo nome ");
// // Dichiara la funzione qui.

function salutare(nome) {
  // Invoca la funzione qui e stampa il risultato in console
  let saluto = "Ciao " + nome;
  return saluto;
}

//Risultato atteso se si passa 'Mario': // ciao Mario
const resultato = salutare(nome);
console.log(resultato);
/////////////////////// Arrow function/////////////////////////////////
const nameArrow = "Mario";

let nomeArrow = prompt("Scrive il tuo nome ");

const salutareArrow = (nomeArrow) => {
  let salutoArrow = "Ciao " + nomeArrow;
  return salutoArrow;
};
const resultatoArrow = salutareArrow(nomeArrow);
console.log(resultatoArrow);
