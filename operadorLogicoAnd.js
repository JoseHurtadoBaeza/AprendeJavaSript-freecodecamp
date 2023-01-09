/*
    Tabla de verdad del operador AND
    Para: X && Y
    | X | Y | X && Y |
    ------------------
    | T | T |   T    |
    | T | F |   F    |
    | F | T |   F    |
    | F | F |   F    |
    La expresión sólo es verdadera cuando ambos operando son verdaderos.
*/

console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

var a = 15;

console.log((a > 5) && (a == 3));

