/*
    Tabla de verdad del operador NOT
    Para: !X
    | X | !X |
    ------------------
    | T | F |
    | F | T |

    La expresión es verdadera si alguno de los dos operandos o ambos son verdaderos.
*/

console.log(!true); // false
console.log(!false); // true

var a = 8;

console.log(!(a > 5));

console.log(!(a < 5));
