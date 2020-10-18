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
-----
Solucion 1
function conoVolu(h,r){
    return Math.round(1/3*h*Math.PI*Math.pow(r,2)*100)/100;
}*/
/*Solucion 2*/
const conoVolu = (h,r) => {return Math.round(1/3*h*Math.PI*Math.pow(r,2)*100)/100}/*Con esta parte *100)/100 lo que hacemos es que el redondeo te coja dos decimas*/
const h = 15;
const r = 6;
document.write(`Altura: ${h}. <br>`);
document.write(`Radio: ${r}. <br>`);
document.write(`El volumen del cono es ${conoVolu(h,r)}. <br>`);

/**Transformar de segundos al formato de un reloj
 * Write a function that takes the number of seconds and returns the digital format clock time as a string. Time should be counted from 00:00:00.
digitalClock(5025) ➞ "01:23:45"
// 5025 seconds is 1 hour, 23 mins, 45 secs.
digitalClock(61201) ➞ "17:00:01"
// No AM/PM. 24h format.
digitalClock(87000) ➞ "00:10:00"
// It's 00:10 next day.
*/
function segReloj(seguns){
    const fecha = new Date()/*Creamos una variable fecha, donde nos va a decir la fecha y el tiempo actual*/
	const config = {/*Le creamos un objeto con la congiguracion que queremos.*/
       hour12 : false,/*Desactivamos que nos salga el a.m o p.m*/
       hour:  '2-digit',/*Le indicamos que nos de la hora en dos digitos*/
       minute: '2-digit',/*Le indicamos que nos de los minutos en dos digitos*/
       second: '2-digit'/*Le indicamos que nos de los segundos en dos digitos*/
	}
	fecha.setHours(0);/*Le ponemos como valor 0*/
	fecha.setMinutes(0);/*Le ponemos como valor 0*/
	fecha.setSeconds(seguns);/*Solo le damos el valor de segundos para que calcule los de mas datos*/
	
	return fecha.toLocaleString('es-EU',config);/*Retornamos la fecha de españa, pero con la configuracion creada solo nos dara la hora,minutos y segundos del objeto creado*/
}
const seg = 87000;
document.write(`${segReloj(seg)}`);
