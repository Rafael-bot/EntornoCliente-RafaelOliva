//Palabras que hay que adivinar
const WORD1 = 'mirada';
const WORD2 = 'swing';

//Palabra que el usuario introducira
let userWord;

let fin = 0;

while(fin <= 2){
    userWord = prompt('Introduce las palabras correctas.');

    if(userWord == WORD1){
        document.getElementById("word1").innerHTML = WORD1;
        fin+=1;
    } 
    if(userWord == WORD2){
        document.getElementById("word2+").innerHTML = WORD2;
        fin+=1;
    }

}

