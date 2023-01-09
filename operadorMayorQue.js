console.log(6 > 5); // true
console.log(3 > 10); // false

console.log("B" > "A"); // true porque B va después de A en orden alfabético
console.log("ACB" > "ABC"); // true porque javascript compara cada uno de los caracteres en su secuencia
// entonces, como C va después que B en la segunda comparación ya toma el valor true

console.log("AB" > "A"); // true porque tiene más caracteres

console.log("Mundo" > "Hola"); // true porque M va después que H en el diccionarioç
console.log("M" > "A"); // true

var a = 15;
var b = 7;

console.log(a > b); // true
console.log(b > a); // false