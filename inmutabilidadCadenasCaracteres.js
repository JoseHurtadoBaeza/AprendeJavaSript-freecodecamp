// Inmutabilidad

var miCadena = "Jola, Mundo";

console.log(miCadena);

miCadena[0] = "H"; // No salta el error en la última versión, pero Las cadenas son inmutables, no puedes cambiar los caracteres individuales de la cadena

miCadena = "Hola, Mundo";

console.log(miCadena);