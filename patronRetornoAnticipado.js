function miFuncion(){
    console.log("Hola");
    return "Mundo"; // Retorno anticipado
    console.log("Adiós");
}

console.log(miFuncion());

function calcularRaizCuadrada(num){
    if (num < 0){
        return undefined; // Retorno anticipado
    }
    return Math.sqrt(num);
}

console.log(calcularRaizCuadrada(25));
console.log(calcularRaizCuadrada(-5));
