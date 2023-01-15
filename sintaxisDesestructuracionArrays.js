var a;
var b;
var c;

/*[a,b,c] = [1,2,3];

console.log(a);
console.log(b);
console.log(c);*/

// Si queremos sólo asignar los 2 primeros valores del array por ejemplo
[a,b] = [1,2,3,4,5,6];

//console.log(a);
//console.log(b);

// También podemos saltar posiciones para asignar un valor, en este caso vamos a asignar el valor de la posición 5 a C
[a, b,,, c] = [1,2,3,4,5,6];

console.log(a);
console.log(b);
console.log(c);

// Ahora veamos cómo intercambiar los valores de dos variables
var a = 8;
var b = 6;

[b,a] = [a,b];

console.log("a: " + a);
console.log("b: " + b);