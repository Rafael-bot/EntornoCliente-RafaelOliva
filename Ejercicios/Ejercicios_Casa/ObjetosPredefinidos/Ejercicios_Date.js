/**¿Tiempo de leche y galletas? Detectar si es el día de nochebuena (24 Diciembre)
 * La víspera de Navidad está casi sobre nosotros, ¡así que, naturalmente, necesitamos preparar un poco de leche y galletas para Santa! 
 * Cree una función que acepte un objeto Date y devuelva verdadero si es Nochebuena (24 de diciembre) y falso en caso contrario. 
 * Tenga en cuenta que el mes de fecha de JavaScript se basa en 0, lo que significa que diciembre es el undécimo mes, mientras que enero es 0.
timeForMilkAndCookies(new Date(2013, 11, 24)) ➞ true
timeForMilkAndCookies(new Date(2013, 0, 23)) ➞ false
timeForMilkAndCookies(new Date(3000, 11, 24)) ➞ true
*/
function esNocheBuena(fecha) {
    const fecha_santa = new Date(null,12, 24);
    if (fecha.getMonth() == fecha_santa.getMonth() && fecha.getDate() == fecha_santa.getDate()) {//Comparo los mese y los dias. Si el mes es 12 y el dia es 24, retorna true
        return true;
    } else {//Sino retorna false
        return false;
    }
}
const fecha1 = new Date(2220, 12, 24);
document.write(`${esNocheBuena(fecha1)} <br>`);

/**Cambiar el formato de la fecha dada
 *Cree una función que convierta una fecha formateada como MM / DD / AAAA a AAAADDMM.
 formatDate("11/12/2019") ➞ "20191211"
 formatDate("12/31/2019") ➞ "20193112"
 formatDate("01/15/2019") ➞ "20191501"
 */

function convertFecha(fecha){
    return fecha.split('/').reverse().join('');//con el split dividimos por las barra, lo invertimos con el reverse y lo unimos todo con en join.
}
const fecha2 = "18/12/2219";
document.write(`${convertFecha(fecha2)}`);

