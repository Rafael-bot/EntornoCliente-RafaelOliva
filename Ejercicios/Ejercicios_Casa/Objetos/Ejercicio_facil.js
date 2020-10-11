const objeto_array = { num1: 145, num2: 78, num3: 98 };//Objeto que vamos a usar para las funciones

/**
 * Transformar un objeto en un array, cada elemento será clave-valor: { a:1, b: 2 } → [["a", 1], ["b", 2]]
 */

function transformar_objeto_array_1(objeto_array) {
  document.write(`${Object.entries(objeto_array)} <br>`);//El metodo entries te devuelve un array enumerado, con la key  y el valor --> [key,value]
}
transformar_objeto_array_1(objeto_array);

/**
 * Transformar un objeto en un array con dos elementos [claves, valores] : { a: 1, b: 2, c: 3 }) → [["a", "b", "c"], [1, 2, 3]]
 */
function transformar_objeto_array_2(objeto_array) {
  let array_objeto = [
    Object.keys(objeto_array),//Obtenemos todas las keys de los elementos del objeto, Nos lo da en formato array
    Object.values(objeto_array)];//Obtenemos todos los valores de los elementos del objeto, Nos lo da en formato array
  document.write(`${array_objeto} <br>`);
}
transformar_objeto_array_2(objeto_array);
