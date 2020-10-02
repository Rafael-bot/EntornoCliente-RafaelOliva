const usertext = prompt('Introduce una frase:');
const vocal = ['a', 'e', 'i', 'o', 'u'];

function vocal_cont(text) {
    let total = 0;

    for (let cont = 0; cont <= text.length; cont += 1) {
        const char = text.charAt(cont);
        if (char === vocal[0] || char === vocal[1] || char === vocal[2] || char === vocal[3] || char === vocal[4]) {
            total += 1;
        }
    }

    document.write(`Hay ${total} vocales.`);
}

function vocal_neg(text) {

    for (let cont = 0; cont <= text.length; cont += 1) {
        const char = text.charAt(cont);
        if (char === vocal[0] || char === vocal[1] || char === vocal[2] || char === vocal[3] || char === vocal[4]) {
            document.write(`<b>${char}</b>`);
        } else {
            document.write(char);
        }
    }
}

function vocal_color_random(text) {
    const colores = ['red', 'yellow', 'blue', 'orange', 'purple'];

    for (let cont = 0; cont <= text.length; cont += 1) {
        const char = text.charAt(cont);
        let numRandom = Math.floor(Math.random() * (4 - 0));
        if (char === vocal[0] || char === vocal[1] || char === vocal[2] || char === vocal[3] || char === vocal[4]) {
            document.write(char.fontcolor(colores[numRandom]));
        } else {
            document.write(char);
        }
    }

}

function vocal_color(text) {

    for (let cont = 0; cont <= text.length; cont += 1) {
        const char = text.charAt(cont);
        if (char === vocal[0] || char === vocal[1] || char === vocal[2] || char === vocal[3] || char === vocal[4]) {
            if(char === vocal[0]){
                document.write(char.fontcolor('red'));
            } else if(char === vocal[1]){
                document.write(char.fontcolor('yellow'));
            } else if(char === vocal[2]){
                document.write(char.fontcolor('blue'));
            } else if(char === vocal[3]){
                document.write(char.fontcolor('orange'));
            } else if(char === vocal[4]){
                document.write(char.fontcolor('purple'));
            }
        } else {
            document.write(char);
        }
    }

}


//document.getElementById("cont_vocal").innerHTML = `Hay ${vocal_cont(usertext)} vocales.`;
vocal_cont(usertext);
document.write('<br>');
vocal_neg(usertext)+'.';
document.write('<br>');
vocal_color_random(usertext)+'.';
document.write('<br>');
vocal_color(usertext)+'.';
