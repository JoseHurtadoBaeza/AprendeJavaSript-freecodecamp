var miArray = [[1,2,3], [4,5,6], [7,8,9]];

for (var i = 0; i < miArray.length; i++){
    console.log("> Nueva iteración");
    var arrayAnidado = miArray[i]; // Array
    console.log("Array: " + arrayAnidado);

    for(var j = 0; j < arrayAnidado.length; j++){
        console.log(">>> Ciclo anidado");
        console.log("Elemento:");
        console.log(arrayAnidado[j]); // Elemento
    }
}