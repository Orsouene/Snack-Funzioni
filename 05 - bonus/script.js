/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = "Mario";
let nome = prompt("Scrive il tuo nome ");
const d = new Date();
// Dichiara la funzione qui.
function salutare(nome) {
  // Invoca la funzione qui e stampa il risultato in console
  let saluto = "";
  let hour = d.getHours();
  if (hour > 4 && hour < 13) {
    saluto = "buongiorno " + nome;
  } else if (hour > 13 && hour < 17) {
    saluto = "buon pomeriggio " + nome;
  } else if (hour > 17 && hour < 4) {
    saluto = "buonasera " + nome;
  }
  return saluto;
}
//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.
const resultato = salutare(nome);
console.log(resultato);
