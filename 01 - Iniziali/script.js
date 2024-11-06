/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];

// // Dichiara la funzione qui.
function arrayOfnames(names) {
  //   // Invoca la funzione qui e stampa il risultato in console
  newarray = [];
  for (let i = 0; i < names.length; i++) {
    newarray.push(names[i].charAt(0));
  }
  return newarray;
}
// // //Risultato atteso: ["A", "L", "M", "A", "G", "A"]
const finalArray = arrayOfnames(names);
console.log(finalArray);

///////////////////////// ARROW FUNCTION//////////////////////////
const namesArrow = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];
const arrayOfnamesArrow = (namesArrow) => {
  newarray = [];
  for (let i = 0; i < namesArrow.length; i++) {
    newarray.push(namesArrow[i].charAt(0));
  }
  return newarray;
};
const finalArrayArrow = arrayOfnamesArrow(namesArrow);
console.log(finalArrayArrow);
