// EJEMPLO 1

var miVariableGlobal = 4;

console.log(miVariableGlobal);

function miFuncion(){
    console.log(miVariableGlobal);

    var miVariableLocal = 8;
    console.log(miVariableLocal);
}

miFuncion();

console.log(miVariableGlobal);
//console.log(miVariableLocal); // Error

// EJEMPLO 2

for (var i = 0; i < 3; i++) { // La variable que se define en el ciclo tendrá el ámbito en el que se encuentre dicho ciclo, en este caso el global
    console.log(i);
}

console.log("Variable: " + i);

for (let j = 0; j < 3; j++) { 
    console.log(j);
}

//console.log("Variable: " + j); // Error porque la variable al haber sido declarada con let sólo existe en el bloque de código del for


// EJEMPLO 3

var mostrarColor = true;

if (mostrarColor){
    var color = "verde";
    console.log("Mi color favorito es: " + color);
}

console.log(color);