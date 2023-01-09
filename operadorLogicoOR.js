/*
    Tabla de verdad del operador OR
    Para: X || Y
    | X | Y | X || Y |
    ------------------
    | T | T |   T    |
    | T | F |   T    |
    | F | T |   T    |
    | F | F |   F    |
    La expresión es verdadera si alguno de los dos operandos o ambos son verdaderos.
*/

console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

var a = 5;

console.log((a == 5) || (a > 15));
