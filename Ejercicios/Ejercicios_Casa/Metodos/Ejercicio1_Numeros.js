/**
 * Crea una función que genere 100 números aleatorios entre 1 y 1000 que no se repitan y luego muestralos por pantalla
 */

function num_random(max, min) {
    let numeros = [100]; //Array donde se va a almacenar los numeros
    let num; // Aqui se va a almacenar el ultimo numero para compararlo
    for (let cont = 0; cont <= 99; cont += 1) { //Va a generar 100 numeros
        let numRandom = Math.floor(Math.random() * (max - min)); //Esta variable va a generar un numero del 1 a 1000

        if (numRandom == num) { //Si es igual al ultimo numero, se genera otro numero
            numRandom = Math.floor(Math.random() * (max - min));
            num = numRandom; //Almacenamos el numero
            numeros[cont] = numRandom; //Añadimos al array de numeros
        } else {
            num = numRandom; //Almacenamos el numero
            numeros[cont] = numRandom; //Añadimos al array de numeros
        }
    }
    return numeros; //Retornamos el array de numeros
}

/**
 * Numeros: Crea una función que devuelva el número PI con dos decimales. Utiliza la variable PI que ya existe en javascript
 */

function num_pi() {
    return Math.PI.toFixed(2); //Returnanmos en numero Pi, y con el toFixed(2) le indicamos que sean dos decimales.
}

document.write(num_random(1000, 1) + '<br>'); //Se va a escribir el documento html
document.write(num_pi());