var a; 
var b;

[a,b, ...arr] = [1,2,3,4,5,6,7];

console.log(a);
console.log(b);
console.log(arr);

// Veamos otro ejemplo en el que vamos a usar este principio para eliminar los tres primeros elementos de un array
const arrayInicial = [1,2,3,4,5,6,7,8];

function quitarTresPrimerosElementos(array){
    const [ , , , ...nuevoArray] = array;
    return nuevoArray;
}

const arrayFinal = quitarTresPrimerosElementos(arrayInicial);
console.log(arrayFinal);