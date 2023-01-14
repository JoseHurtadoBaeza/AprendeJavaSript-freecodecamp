function miFuncion(...args){ // Este operador convierte todos los parámetros en elementos de un sólo array
    console.log(args.length);
}

miFuncion(1,2,3,4,5,6);

const sumar = (...args) => { // Recordemos que no tenemos que poner necesariamente args 
    return args.reduce((a, b) => a + b, 0);
};

console.log(sumar(1,2,3));