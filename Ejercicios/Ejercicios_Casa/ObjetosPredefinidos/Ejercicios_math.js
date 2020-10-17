/**Pasar años a días
 * Create a function that takes the age and return the age in days.
calcAge(65) ➞ 23725
calcAge(0) ➞ 0
calcAge(20) ➞ 7300
*/
const año = 20;
const result = (año) => {return año*365}
document.write(`El año ${año} son ${result(año)} días. <br>`);


