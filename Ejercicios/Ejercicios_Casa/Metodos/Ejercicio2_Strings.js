/**
 * Buscando a Nemo: Introducir una frase y buscar la palabra ‘Nemo’, se deberá imprimir la siguiente frase:
– ‘He encontrado a Nemo en X’ siendo X la posición de la palabra en la frase
– Si no existe, se imprime ‘No he encontrado a Nemo :(’
 */

const user_frase = prompt('Introduce una frase:').toLowerCase(); //Le pedimos al usuario un frase y la convertimos en mininusculas.

function buscando_nemo(user_text) {
    let result; //Resultado final
    let x = user_text.indexOf('nemo'); //Sacamos la posicion de la palabra nemo.

    if (x !== -1) { //Comprobamos si esta la palabra nemo.
        result = `He encontrado a Nemo en ${x} <br>`; //Si esta el resultado sera este.
    } else {
        result = 'No he encontrado a Nemo :( <br>'; //Si no esta el resultado final sera este
    }

    return result;
}

/**
 * Realiza un script que pida una cadena de texto y la muestre poniendo el signo – entre cada 
 * carácter sin usar el método replace. Por ejemplo, si tecleo “hola qué tal”, deberá salir “h-o-l-a-
 * -q-u-e- -t-a-l”.
 */

function frase_guiones(user_text) {
    //let caracteres = Array.from(user_text);//Convertimos la frase en un array de caracteres
    let caracteres = user_text.split(''); //Convertimos la frase en un array de caracteres separando los caracteres
    document.write(caracteres.join('-')); //Con el join le insertamos guiones entre caracter y caracter
}

document.write(buscando_nemo(user_frase)); //Escribimos el resutado final
frase_guiones(user_frase); //Llamamos a la funcion