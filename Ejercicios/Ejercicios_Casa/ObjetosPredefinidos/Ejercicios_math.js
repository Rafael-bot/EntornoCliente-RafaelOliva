/**Pasar años a días
 * Create a function that takes the age and return the age in days.
calcAge(65) ➞ 23725
calcAge(0) ➞ 0
calcAge(20) ➞ 7300
*/
const result_años_dias = (año) => {return año*365}
const año = 20;
document.write(`El año ${año} son ${result_años_dias(año)} días. <br>`);

/**Volumen de un cono
 * Create a function that takes the height and radius of a cone as arguments and returns the volume of the cone rounded to the nearest hundredth.
 coneVolume(3, 2) ➞ 12.57
 coneVolume(15, 6) ➞ 565.49
 coneVolume(18, 0) ➞ 0
 
function conoVolu(h,r){
    return Math.round(1/3*h*Math.PI*Math.pow(r,2)*100)/100;
}*/
const conoVolu = (h,r) => {return Math.round(1/3*h*Math.PI*Math.pow(r,2)*100)/100}/*Con esta parte *100)/100 lo que hacemos es que el redondeo te coja dos decimas*/
const h = 15;
const r = 6;
document.write(`Altura: ${h}. <br>`);
document.write(`Radio: ${r}. <br>`);
document.write(`El volumen del cono es ${conoVolu(h,r)}. <br>`);

