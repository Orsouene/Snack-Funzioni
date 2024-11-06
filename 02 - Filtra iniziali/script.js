/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];

let lettera = prompt("inserisce una lettera ").toUpperCase();
// // Dichiara la funzione qui.
function myArray(names, lettera) {
  //   // Invoca la funzione qui e stampa il risultato in console
  let newArray = [];

  for (let i = 0; i < names.length; i++) {
    if (names[i].charAt(0) === lettera) {
      newArray.push(names[i]);
    }
  }
  return newArray;
}
// //Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]
const finalArray = myArray(names, lettera);
console.log(finalArray);

///////////////////////// ARROW FUNCTION//////////////////////////
const namesArrow = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];

let letteraArrow = prompt("inserisce una lettera ").toUpperCase();
const myArray = (namesArrow, letteraArrow) => {
  let newArray = [];

  for (let i = 0; i < namesArrow.length; i++) {
    if (namesArrow[i].charAt(0) === letteraArrow) {
      newArray.push(namesArrow[i]);
    }
  }
  return newArray;
};

const finalArrayArrow = myArray(namesArrow, letteraArrow);
console.log(finalArrayArrow);
