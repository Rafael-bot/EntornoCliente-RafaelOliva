/**
 * Transformar un objeto en un array, cada elemento será clave-valor: { a:1, b: 2 } → [["a", 1], ["b", 2]]
 */
function transformar_objeto_array_1() {
  const objeto_array = { a: 1, b: 2 };//Objeto
  let array_objeto = [
    ["a", objeto_array.a],//Llamamo al valor de a
    ["b", objeto_array.b],//Lamamo al valor de b
  ];
  document.write(`${array_objeto} <br>`);
}
transformar_objeto_array_1();

/**
 * Transformar un objeto en un array con dos elementos [claves, valores] : { a: 1, b: 2, c: 3 }) → [["a", "b", "c"], [1, 2, 3]]
 */
function transformar_objeto_array_2() {
  const objeto_array = { a: 1, b: 2, c: 3 };//Objetos
  let array_objeto = [
    [Object.getOwnPropertyNames(objeto_array)],//Obtenemos todos los nombres de los elementos del objeto
    [Object.values(objeto_array)],//Obtenemos todos los valores de los elementos del objeto
  ];
  document.write(`${array_objeto} <br>`);
}
transformar_objeto_array_2();
