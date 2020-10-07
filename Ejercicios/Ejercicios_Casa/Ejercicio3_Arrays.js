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
    document.write(`<br> <br>`);// Saltos d linea

    let user_frase = prompt('Introduce un texto:');//Aqui el usuario va a introducir la frase 

    if (user_frase == '') {
        alert('No has escrito nada');//Si el usuario no ha escrito nada le saldra este alert.
    } else {
        let array_palabras = user_frase.split(' ');//Dividimos las palabras y se alamcena en un array
        /** 
         * Quitamos los primeros y ultimos espacios con el trim.
         * Separamos las palabras y con el lenght las contamos
        */
        document.write(`Hay ${user_frase.trim().split(' ').length} palabras. <br>`);
        document.write(`La primera palabra es ${array_palabras[0]}. <br>`);//Mostramos la primera palabra de la lista
        document.write(`La ultima palabra es ${array_palabras.reverse()[0]}. <br>`);// Invertimos la lista y mostramos la primera palabra, que es la ultima.
        document.write(`Palabras al reves: ${user_frase.split('').reverse().join('')}. <br>`);//Dividimos las palabras y volvemos a meter la palabra invertida y la mostramos
        document.write(`Palabras ordenadas de la a la z: ${array_palabras.sort()}. <br>`);//La ordenamos con el sort
        document.write(`Palabras ordenadas de z a la a: ${array_palabras.sort().reverse()}.`);//La ordenamos con el sort y con el reverse invertimos el orden
    }

    document.write('<br> <br>');
}

/**
 * 
 */

arrayTexto();