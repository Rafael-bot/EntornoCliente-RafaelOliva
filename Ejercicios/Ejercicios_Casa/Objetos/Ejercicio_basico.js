/**
 * Función que reciba un objeto { bien: N, mal, M } y devuelva el resultado de la resta
 */
const resta = {
    'numero1':4,//Elemento de un objeto
    'numero2':3,
    result: function(numero1, numero2){//una funcion dentro de un elemento de un objeto
        return this.numero1 - this.numero2;//Con el this le estamos indicando que la variable esta dentro. Retornamos el resultado
    },
}
document.write(resta.result()+'<br>');//llamamos al elemento result del objeto resta, que contiene la funcion.

/**
 * Función que reciba las dimensiones de un cubo en un objeto y devuelva el volumen { ancho: 2, largo: 5, alto: 1 }
 */
const volumen = {
    'ancho':2,//Ancho del cubo
    'largo':5,//Largo del cubo
    'alto':1,//Alto del cubo
    result: function(ancho, largo, alto){//Creamos la funcion con los parametros nancho, largo y alto
        return this.ancho * this.largo * this.alto;//retornamos el resultado 
    },
}
document.write(volumen.result()+'<br>');//llamamos a la funcion que esta dentro de un elemento del objeto

/**
  * Recoger el resto de un objeto en la variable ‘rest’. Sólo hay que editar el código
  */
 const div = {
    'numero1':4,//num 1
    'numero2':2,//num 2
}
let rest = div.numero1%div.numero2;//almacenamos en la variable rest el resto, utilizando los elementos del objeto div
document.write(`${rest}<br>`);//mostramos la variable rest
