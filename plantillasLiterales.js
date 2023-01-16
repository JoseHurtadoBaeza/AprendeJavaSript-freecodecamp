/* Plantillas Literales o Plantillas de Cadenas.

Características:
- Se usa el acento invertido (backtick) ` en lugar de comillas.
- Pueden contener comillas simples y dobles.
- Las líneas se preservan como se escriben en el código.
- Para reemplazar una variable se escribe ${variable}.
- Dentro de ${} también puedes escribir expresiones.
*/

// Un ejemplo
var a = 6;
console.log(`El valor de a es ${a}`);

// Otro
var nombre = "Nora";
var edad = 6;

console.log(`Mi nombre es ${nombre} y tengo ${edad} años.`);

// Y otro más
var miArray = [1,2,3,4];

console.log(`El array es ${miArray}`);

// Otra forma de presentar el array de forma más legible.
console.log(`El array es ${JSON.stringify(miArray)}`);

// También podemos reemplazar el valor de las propiedades de un objeto.
var persona = {
    nombre: "Gino Cass",
    edad: 10
};

const SALUDO = `¡Hola! Mi nombre es ${persona.nombre} y tengo ${persona.edad} años.`;

console.log(SALUDO);