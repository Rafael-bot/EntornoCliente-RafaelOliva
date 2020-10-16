/**
 * El helado más dulce
Cree una función que tome una serie de instancias de la clase IceCream y devuelva el valor de dulzura del helado más dulce.
La dulzura se calcula a partir del sabor y el número de pizcas. Cada pizca tiene un valor de dulzura de 1, y los valores de dulzura para los sabores son los siguientes:

Flavors	Sweetness Value
Plain	0
Vanilla	5
ChocolateChip	5
Strawberry	10
Chocolate	10

ice1 = IceCream("Chocolate", 13)         // value of 23
ice2 = IceCream("Vanilla", 0)           // value of 5
ice3 = IceCream("Strawberry", 7)        // value of 17
ice4 = IceCream("Plain", 18)             // value of 18
ice5 = IceCream("ChocolateChip", 3)      // value of 8

sweetestIcecream([ice1, ice2, ice3, ice4, ice5]) ➞ 23
sweetestIcecream([ice3, ice1]) ➞ 23
sweetestIcecream([ice3, ice5]) ➞ 17
 */

class IceCream{
    //Constructor
    constructor(sabor,pizca){
        this.sabor = sabor;
        this.pizca = pizca;
    }
    //Get
    get dulzura(){
        return this.calc_dulzura();
    }
    //Method
    calc_dulzura(){
        const valores_dulzura = [0,5,10] 
        if(this.sabor == 'Plain'){
            return this.pizca+valores_dulzura[0];
        } else if(this.sabor == 'Vanilla'){
            return this.pizca+valores_dulzura[1];
        } else if(this.sabor=='ChocolateChip'){
            return this.pizca+valores_dulzura[1];
        } else if(this.sabor=='Strawberry'){
            return this.pizca+valores_dulzura[2];
        } else if(this.sabor=='Chocolate'){
            return this.pizca+valores_dulzura[2];
        } else {
            return 'Este sabor no esta.';
        }
    }
}
function helado_dulce(helados){
    let result = helados.map(function(h) {
        return Math.max(h.dulzura);
    });
     return result[0];
 }

ice1 = new IceCream("Chocolate", 13);       
ice2 = new IceCream("Vanilla", 0);          
ice3 = new IceCream("Strawberry", 7);        
ice4 = new IceCream("Plain", 18);             
ice5 = new IceCream("ChocolateChip", 3);

const helados = [ice1, ice2, ice3, ice4, ice5];
document.write(`${helado_dulce(helados)}`);

