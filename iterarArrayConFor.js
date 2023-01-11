var miArray = [4, 6, 8, 2];
var total = 0;

for(var i = 0; i < miArray.length; i++){
    console.log("Iteración " + i);
    console.log(miArray[i]);
    total += miArray[i];
}

console.log(total);

var lenguajes = ["JavaScript", "Python", "Java", "C++"];

for (var i = 0; i < lenguajes.length; i++){
    console.log(lenguajes[i].toUpperCase());
}

function contarNumerosPares(array){
    var total = 0;

    for(var i = 0; i < array.length; i++){
        if (array[i] % 2 == 0){
            total++;
        }
    }

    return total;
}

console.log(contarNumerosPares([5, 3, 1, 2, 4, 8]));