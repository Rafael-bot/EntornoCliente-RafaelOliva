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
    //Solucion 1
    //return fecha.split('/').reverse().join('');//con el split dividimos por las barra, lo invertimos con el reverse y lo unimos todo con en join.
    //Solucion 2
    let result = new Date(fecha);
    return String(result.getFullYear()) + String(result.getDate()) + String(result.getMonth()+1);//Cuando hagas un getMount siempre hay que sumarle uno mas para que se muertre el mes exacto
}
const fecha2 = "11/12/2019";
document.write(`${fecha2} -> ${convertFecha(fecha2)}<br>`);


/**Extraer el día de la semana de la fecha dada
 * Escriba una función que, dada una fecha (en el formato MM / DD / AAAA), devuelva el día de la semana como una cadena. 
 * El nombre de cada día debe ser una de las siguientes cadenas: "domingo", "lunes", "martes", "miércoles", "jueves", "viernes" o "sábado".
 getDay("12/07/2016") ➞ "Wednesday"
 getDay("09/04/2016") ➞ "Sunday"
 getDay("12/08/2011") ➞ "Thursday"
 */
function diaSemana(fecha){
    let result = new Date(fecha);
    let dias = new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");
    return dias[result.getDay()];//Sacamos con el getDay el nombre del dia de la semana, y lo buscamos en el array creado. Y lo retornamos.
}
const fecha3 = "12/07/2016";
document.write(`${diaSemana(fecha3)}`);
