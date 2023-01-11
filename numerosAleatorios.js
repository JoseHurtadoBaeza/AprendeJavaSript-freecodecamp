function generarFraccionAleatoria(){
    return Math.random(); // [0, 1) el 1 no está incluído en los posibles resultado por eso el paréntesis y no el corchete
}

console.log(generarFraccionAleatoria());
console.log(generarFraccionAleatoria());
console.log(generarFraccionAleatoria());
console.log(generarFraccionAleatoria());
console.log(generarFraccionAleatoria());

// Ejemplo alternativo de uso
var numeroAleatorio = Math.random();

console.log(numeroAleatorio);