function compararNumeros(a, b){
    /*if(a == b){
        return "a y b son iguales";
    } else if (a > b){
        return "a es mayor que b";
    } else {
        return "b es mayor que a";
    }*/

    // Refactorizamos el código de arriba
    return a == b ? "a y b son iguales"
        : a > b ? "a es mayor que b"
        : "b es mayor que a";
}

console.log(compararNumeros(11, 27));
console.log(compararNumeros(20, 8));
console.log(compararNumeros(15, 15));