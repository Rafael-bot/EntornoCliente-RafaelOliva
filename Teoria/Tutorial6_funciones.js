function hablar() {
    console.log("Hola!");
}
hablar()

const despedida = "Adios";
function desp() {
    console.log(despedida);
}
desp();

let cortar;
function action() {
    cortar = "cortando";
    console.log(cortar);
}
action();

//Parametros
function sum1(a, b) {
    console.log(a + b);
}
sum1(2, 5);

function sum2(a, b) {
    const TOTAL = a + b;
    return TOTAL;
}
console.log(sum2(2, 2));

function rest(a = 2, b = 3) {
    return a - b;
}
console.log(rest());

//Funcion Anonimas
let digo = function d(word="caracola"){return `Hola ${word}`;}
console.log(digo());
console.log(digo("Carolina"));

//Funcion Arrow o Flecha
let say = (name) => `${name}`; 
console.log(say());
console.log(say("Carolina"));

let notsay = (apellido) => {return `Me llamo Rafael ${apellido}`};
console.log(notsay("Oliva"));

