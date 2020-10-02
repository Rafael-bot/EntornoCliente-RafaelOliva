//Concatenación
console.log("Hola "+" Mundo!!");
//Template literals
const NAME = "Roberto";
console.log(`Hola ${NAME}`);
//.lenght
console.log(NAME.length);//Nos devuelve el tamaño del texto
//.inlcude
console.log(NAME.includes("ASf"))//No devuelve un boleano
//.slice(inicio,final)
console.log(NAME.slice(1,4));
//.replace("texto","texto por el que se va a sustituir")
console.log(NAME.replace("er","or"));
//.trim()
const TEXT = "    ddssd ad  dasd  ";
console.log(TEXT.trim());//limpia el texto, es decir, quita los primeros espacios y los ultimos
//.split()
const COMPRA = "MAnzana, APpael, asd ,fgssd";
console.log(COMPRA.split("-"));