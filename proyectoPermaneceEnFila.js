/* Próximo en la Fila

En informática una cola (queue) es una estructura de datos abstracta
en la cual los elementos se mantienen en orden. Los nuevos elementos se pueden
añadir al final de la cola y los elementos previos se retiran del principio de la cola.

Define una función proximoEnLaFila que tome un array (array) y un número (elemento)
como argumentos. Agrega el número al final del array y luego elimina el primer
elemento del array. La función proximoEnLaFila debe retornar el elemento
que fue removido.
*/

function proximoEnLaFila(array, elemento){
    array.push(elemento); // Agregar al final del array
    var elementoRemovido = array.shift(); // Elimina el primer elemento del array y lo retorna
    return elementoRemovido;
}

var miArray = [1,2,3,4,5];

console.log("Antes: " + JSON.stringify(miArray));

console.log(proximoEnLaFila(miArray, 6));

console.log("Después: " + JSON.stringify(miArray));