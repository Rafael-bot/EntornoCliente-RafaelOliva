/**
 * Función que invierta clave y valor { "z": "q", "w": "f" }) → { "q":"z", "f": "w" }
 */
const objeto1 = { z: "q", sda: "f", hola: "dsa" };
function invert_clave_valor(objt) {
  /**
   * Con el entries sacamos los elementos del objeto {key,value}
   * con lo que nos da el entries creamos un array con el metodo map, y dentro del map le intercambiamos lo valores
   * y por ultimos con el fromEntries transformamos el array creado por el map, lo transformamos en un objeto.
   */
  const result = Object.fromEntries(
    //([key, value]) con key representamos la key del elemento y con value representamos el valor del elemento
    Object.entries(objt).map(([key, value]) => [value, key]) //Ponemos entre parentesis ([key, value]) para que lo detecte como una unica variable, y los corchetes para que lo detectes como un array.
  );
  //Con el JSON.stringify convertimos un valor u objeto en una cadena de texto tipo JSON.
  document.write(JSON.stringify(result)); //Lo mostramos en consola
}
invert_clave_valor(objeto1);

/**
  * Función que recoge un array de objetos con el nombre del alumno y un array de notas { name: 'John', notes: [3, 5, 4]} , y devuelve el nombre y
    la nota más alta { name: "John", topNote: 5 }
  */
const objeto2 = { name: "Rafael", notes: [45.8,12,45] };
function recoge_array_onjetos(objt) {
    const result = {
        'name': objt.name,//Aqui almacenamos el nombre
        'notes': Math.max(...objt.notes)//Con los tres puntos lo convertimos en un caracter. Y obtenemos el numero mayo
    }
    //Con el JSON.stringify convertimos un valor u objeto en una cadena de texto tipo JSON.
    document.write(JSON.stringify(result));
}
recoge_array_onjetos(objeto2);
