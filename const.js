const MI_CONSTANTE = 35; // Por convención las constantes se ponen en mayúsculas

console.log(MI_CONSTANTE);

MI_CONSTANTE = 15; // Error, miConstante es read-only

// Esto no se podría hacer porque las declaraciones const requiren un valor de inicialización
/*const hojas;

hojas = 4;*/

function calcularAreaCirculo(radio){
    const PI = 3.14;

    if (radio < 0){
        return undefined;
    }

    return PI * (radio ** 2);
}

console.log(calcularAreaCirculo(10));