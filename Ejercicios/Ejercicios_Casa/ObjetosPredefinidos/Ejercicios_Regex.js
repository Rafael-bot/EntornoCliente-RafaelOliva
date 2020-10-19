/** Detectar si la última letras es una ‘N’
 * Cree una función que tome una cadena (un nombre aleatorio). Si el último carácter del nombre es una "n", devuelve verdadero; de lo contrario, devuelve falso.
isLastCharacterN("Aiden") ➞ true
isLastCharacterN("Piet") ➞ false
isLastCharacterN("Bert") ➞ false
isLastCharacterN("Dean") ➞ true
 */
const detectarUltiLetra = (palabra) => {
  /*Solucion 1
  return palabra.toLowerCase()[palabra.length - 1] === "n";//[palabra.length-1] le indicamos la ultima posicion y la comparamos.*/
  //Solucion 2
  let r = /n$/;//Esta expresion indica que el ultimo caracter es n.
  return r.test(palabra.toLowerCase());//con el metodo test probamos si el ultimo caracter es n, si lo es retornara true si no retornara false.
}; 
const palabra1 = "Aiden";
document.write(`${detectarUltiLetra(palabra1)} <br>`);

/**Extraer el nombre de un fichero (con su extensión) de una ruta
 * Cree una función que devuelva el nombre de archivo seleccionado de una ruta. Incluya la extensión en su respuesta.
getFilename("C:/Projects/pil_tests/ascii/edabit.txt") ➞ "edabit.txt"
getFilename("C:/Users/johnsmith/Music/Beethoven_5.mp3") ➞ "Beethoven_5.mp3"
getFilename("ffprobe.exe") ➞ "ffprobe.exe"
 */

const extraerNombFichero = (path) => {
    let result = path.split('/');
    return path.split('/')[result.length-1];
}
let path = "C:/Users/johnsmith/Music/Beethoven_5.mp3";
document.write(`${extraerNombFichero(path)}<br>`);

/**Reemplazar todas las vocales por un caracter dado
 * Cree una función que reemplace todas las vocales de una cadena con un carácter específico.
replaceVowels("the aardvark", "#") ➞ "th# ##rdv#rk"
replaceVowels("minnie mouse", "?") ➞ "m?nn?? m??s?"
replaceVowels("shakespeare", "*") ➞ "sh*k*sp**r*"
 */
const reemplazarVocalesCaracter = (texto,caracter) => {
    return texto.replace(/[aeiou]/gi,caracter);/*con el /[aeiou]/ seleccionamos todas la vocale mayusculas minucular  con tildes etc y lo remplazamo*/
}
const text ='the aardvark';
const caract = '#';
document.write(`${reemplazarVocalesCaracter(text,caract)}`);

