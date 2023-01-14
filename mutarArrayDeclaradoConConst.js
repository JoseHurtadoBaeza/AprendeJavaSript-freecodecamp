/* Cuando declaramos una variable con const en JavaScript eso no significa que el valor no pueda cambiar 
significa que no podemos asignar un nuevo valor a esa variable.
*/

const MI_ARRAY = [1, 2, 3, 4];

//MI_ARRAY = [5, 6, 7, 8]; // Error

// Modificando de forma individual los elementos del array si podemos modificarlo

MI_ARRAY[0] = 5;
MI_ARRAY[1] = 6;
MI_ARRAY[2] = 7;
MI_ARRAY[3] = 8;

console.log(MI_ARRAY);