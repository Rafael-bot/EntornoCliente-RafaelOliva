/**
 * Leer una cadena de texto en un formulario y generar un array con la función split(). Mostrar la siguiente información:
– Número de palabras
– primera palabra
– última palabra
– las palabras colocadas en orden inverso
– las palabras ordenadas de la a la z
– las palabras ordenadas de la z a la a
 */

function arrayTexto() {
  document.write(`<br>`); // Saltos d linea
  try {
    let user_frase = prompt("Introduce un texto:"); //Aqui el usuario va a introducir la frase

    if (user_frase == "") {
      alert("No has escrito nada"); //Si el usuario no ha escrito nada le saldra este alert.
    } else {
      let array_palabras = user_frase.split(" "); //Dividimos las palabras y se alamcena en un array
      /**
       * Quitamos los primeros y ultimos espacios con el trim.
       * Separamos las palabras y con el lenght las contamos
       */
      document.write(
        `Hay ${user_frase.trim().split(" ").length} palabras. <br>`
      );
      document.write(`La primera palabra es ${array_palabras[0]}. <br>`); //Mostramos la primera palabra de la lista
      document.write(
        `La ultima palabra es ${array_palabras.reverse()[0]}. <br>`
      ); // Invertimos la lista y mostramos la primera palabra, que es la ultima.
      document.write(
        `Palabras al reves: ${user_frase.split("").reverse().join("")}. <br>`
      ); //Dividimos las palabras y volvemos a meter la palabra invertida y la mostramos
      document.write(
        `Palabras ordenadas de la a la z: ${array_palabras.sort()}. <br>`
      ); //La ordenamos con el sort
      document.write(
        `Palabras ordenadas de z a la a: ${array_palabras.sort().reverse()}.`
      ); //La ordenamos con el sort y con el reverse invertimos el orden
    }
  } catch {
    alert("No has introducido nada.");
  }

  document.write("<br>");
}

/**
 * Crear función que cuente cuantas cuantos valores de una array son ‘true’. Devuelve 0 si el array está vacio.
 */

function contadorValoresTrues(array_booleans) {
  document.write(`<br>`);

  let veces_repetidas = array_booleans.filter((bolean) => bolean == true).length; //Con el metodo filter estamos filtrando los elementos trues y despues lo contamos con el metodo length.
  if (array_booleans.length > 0) {
    document.write(`Hay ${veces_repetidas} trues.`);
  } else {
    document.write(`Hay 0 trues.`);
  }

  document.write(`<br>`);
}

/**
  * Función que busque un 7 en un array:
    – Si existe escribe ‘Boom!’
    – Si no hay escribe ‘No hay 7 en el array’
  */

function busca_siete(array_num) {
  document.write(`<br>`);
  if (array_num.indexOf(7) == -1) {
    //Si el 7 no esta en el array el numero que dara sera -1, y imprimira lo siguiente.
    document.write("No hay 7 en el array.");
  } else {
    //Si no, significa que lo ha encontrado.
    document.write("Boom!");
  }
  document.write(`<br>`);
}

/**
 * Duplicar los elementos de un array usando: forEach(), map() y reduce().
 */

function array_duplicado(array_dup) {
  document.write(`<br>`);

  document.write(
    `${array_dup} => ${array_dup.map(function (num) {
      return num * 2;
    })}`
  ); //con el metodo map() le estamos aplicando una funcion a cada elemento del array, y despues imprimimos el array ya cambiadp

  document.write(`<br>`);
}

arrayTexto();
const array_siete = [8, 66, 7, 1];
busca_siete(array_siete);
const array_dup = [8, 6, 2, 6.3, 8, 2.2];
array_duplicado(array_dup);
const array_trues = [true, false, true, true];
contadorValoresTrues(array_trues);
