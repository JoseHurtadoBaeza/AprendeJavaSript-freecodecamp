// Este operador hace exactamente lo contrario al operador REST

const numeros = [1,2,3];

function sumar(x,y,z){
    console.log(x);
    console.log(y);
    console.log(z);
    return x+y+z;
}

console.log(sumar(...numeros)); // Aquí lo usamos en la llamada a la función