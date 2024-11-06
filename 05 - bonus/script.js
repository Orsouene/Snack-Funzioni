/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = "Mario";
let nome = prompt("Scrive il tuo nome ");
const d = new Date();
// // Dichiara la funzione qui.
function salutare(nome) {
  //   // Invoca la funzione qui e stampa il risultato in console
  let saluto = "";
  let hour = d.getHours();
  if (hour > 4 && hour < 13) {
    saluto = "buongiorno " + nome;
  } else if (hour > 13 && hour < 17) {
    saluto = "buon pomeriggio " + nome;
  } else if (hour >= 17 && hour < 24) {
    saluto = "buonasera " + nome;
  }
  return saluto;
}
// //Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.
const resultato = salutare(nome);
console.log(resultato);

////////////////// arrow function//////////////////////////////////

let nomeArrow = prompt("Scrive il tuo nome ");
const dArrow = new Date();
const salutareArrow = (nomeArrow) => {
  let salutoArrow = "";
  let hourArrow = dArrow.getHours();
  if (hourArrow > 4 && hourArrow < 13) {
    salutoArrow = "buongiorno " + nomeArrow;
  } else if (hourArrow > 13 && hourArrow < 17) {
    salutoArrow = "buon pomeriggio " + nomeArrow;
  } else if (hourArrow > 17 && hourArrow < 24) {
    salutoArrow = "buonasera " + nomeArrow;
  }
  return salutoArrow;
};
const resultatoArrow = salutareArrow(nomeArrow);
console.log(resultatoArrow);
