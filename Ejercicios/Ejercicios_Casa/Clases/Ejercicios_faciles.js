/**
 * Información de un deportista
    getAge() returns "name is age age"
    getHeight() returns "name is heightcm"
    getWeight() returns "name weighs weightkg"

    p1 = new Player("David Jones", 25, 175, 75)

    p1.getAge() ➞ "David Jones is age 25"
    p1.getHeight() ➞ "David Jones is 175cm"
    p1.getWeight() ➞ "David Jones weighs 75kg"
 */

 class Infdep{
     //Constructor
     constructor(nombre,año,altura,anchura){
         this.nombre = nombre;
         this.año = año;
         this.altura = altura;
         this.anchura = anchura;
     }
     //Get
     get getAge(){
         return `${this.nombre} is age ${this.año} `;         
     }
     get getHeight(){
         return `${this.nombre} is ${this.altura}`;
     }
     get getWeight(){
         return `${this.nombre} weighs ${this.anchura}`;
     }
 }
 let dep1 = new Infdep('Paco',25,176,78);
 document.write(`${dep1.getAge} <br>`);
 document.write(`${dep1.getHeight} <br>`);
 document.write(`${dep1.getWeight} <br>`);
 
 /**
  * Comparar la edad de personas
    p1 = Person("Samuel", 24)
    p2 = Person("Joel", 36)
    p3 = Person("Lily", 24)
    p1.compareAge(p2) ➞ "Joel is older than me."
    p2.compareAge(p1) ➞ "Samuel is younger than me."
    p1.compareAge(p3) ➞ "Lily is the same age as me."
  */
 class Edadper{
    //Constructor
    constructor(nomb,edad){
        this.nombre = nomb;
        this.edad = edad;
    }

    //Get
    get getEdad(){return this.edad;}
    get getNomb(){return this.nombre;}

    //Method
    compareAge(Edadper){
        let result;
        if(this.edad < Edadper.getEdad){
            result = `${Edadper.getNomb} es mas viejo que yo.<br>`;
        }else if(this.edad > Edadper.getEdad) {
            result = `Yo soy mas viejo que ${Edadper.getNomb}. <br>`;
        } else{
            result = `${Edadper.getNomb} tiene la misma edad que yo. <br>`;
        }
        return result;         
    }
}
let p1 = new Edadper("Samuel", 24)
let p2 = new Edadper("Joel", 36)
let p3 = new Edadper("Lily", 24)
document.write(p1.compareAge(p2));
document.write(p2.compareAge(p1));
document.write(p3.compareAge(p1));

 /**
  * Información de libros
  * Create a Book constructor that has two properties :

Title
Author
and two methods:

A method named getTitle that returns: "Title: " + the instance title.
A method named getAuthor that returns: "Author: " + the instance author.

    HP.title ➞ "Harry Potter"
    HP.author ➞ "J.K. Rowling"
    HP.getTitle() ➞ "Title: Harry Potter"
    HP.getAuthor() ➞ "Author: J.K. Rowling"
  */
 class Infolib{
    //Constructor
    constructor(titulo,autor){
        this.titulo = titulo;
        this.autor = autor;
    }

    //Method
    getTitulo(){
        return `Titulo: ${this.titulo}. <br>`;
    }
    getAutor(){
        return `Autor: ${this.autor}. <br>`;
    }
    
}
let book1 = new Infolib('Harry Pocimas','Rafael');
let book2 = new Infolib('EL Caliz','Pepe');
let book3 = new Infolib('El Trafeo','Paco');
document.write(`${book1.titulo}<br>`);
document.write(`${book1.autor}<br>`);
document.write(`${book1.getTitulo()}`);
document.write(`${book1.getAutor()}`);
document.write(`${book2.titulo}<br>`);
document.write(`${book2.autor}<br>`);
document.write(`${book2.getTitulo()}`);
document.write(`${book2.getAutor()}`);
document.write(`${book3.titulo}<br>`);
document.write(`${book3.autor}<br>`);
document.write(`${book3.getTitulo()}`);
document.write(`${book3.getAutor()}`);


