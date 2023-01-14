/*const sumarTres = function(x){
    return x + 3;
};*/

// Refactorizamos la función
const sumarTres = (x) => x + 3;

console.log(sumarTres(4));



/*const concatenarArrays = function(arr1, arr2){
    return arr1.concat(arr2);
};*/

// Refactorizamos la función
const concatenarArrays = (arr1, arr2) => arr1.concat(arr2);

console.log(concatenarArrays([1, 2], [3, 4, 5]));


// Si la función original tiene más de 1 línea tenemos que mantener las llaves
/*const sumar = function (a, b){
    let num = 6;
    return a + b + num;
};*/

// Refactorizamos la función
const sumar = (a, b) => {
    let num = 6; 
    return a + b + num;
};

console.log(sumar(1, 1));