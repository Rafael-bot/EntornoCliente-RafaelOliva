/** Detectar si la última letras es una ‘N’
 * Cree una función que tome una cadena (un nombre aleatorio). Si el último carácter del nombre es una "n", devuelve verdadero; de lo contrario, devuelve falso.
isLastCharacterN("Aiden") ➞ true
isLastCharacterN("Piet") ➞ false
isLastCharacterN("Bert") ➞ false
isLastCharacterN("Dean") ➞ true
 */
const result = (palabra) => {
  /*Solucion 1
  return palabra.toLowerCase()[palabra.length - 1] === "n";//[palabra.length-1] le indicamos la ultima posicion y la comparamos.*/
  //Solucion 2
  let r = /n$/;//Esta expresion indica que el ultimo caracter es n.
  return r.test(palabra.toLowerCase());//con el metodo test probamos si el ultimo caracter es n, si lo es retornara true si no retornara false.
}; 
const palabra1 = "Aiden";
document.write(`${result(palabra1)}`);
