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
  document.write(`<br> <br>`); // Saltos d linea
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

  document.write("<br> <br>");
}

/**
 * Crear función que cuente cuantas cuantos valores de una array son ‘true’. Devuelve 0 si el array está vacio.
 */

function contValoresTrues(array) {
  document.write("<br> <br>"); // Saltos d linea

  if (array === "") {
    console.log("0");
  } else {
    console.log("dentro");
  }

  document.write(`<br> <br>`);
}

/**
  * Función que busque un 7 en un array:
    – Si existe escribe ‘Boom!’
    – Si no hay escribe ‘No hay 7 en el array’
  */

function busca_siete(array_num) {
  document.write(`<br> <br>`);
  if (array_num.indexOf(7) == -1) {//Si el 7 no esta en el array el numero que dara sera -1, y imprimira lo siguiente.
    document.write("No hay 7 en el array.");
  } else {//Si no, significa que lo ha encontrado.
    document.write("Boom!");
  }
  document.write(`<br> <br>`);
}

/**
 * Duplicar los elementos de un array usando: forEach(), map() y reduce().
 */

arrayTexto();

const array_siete = [8, 66, 7, 1];
busca_siete(array_siete);

/*
let array = [,,];
contValoresTrues(array);
*/
