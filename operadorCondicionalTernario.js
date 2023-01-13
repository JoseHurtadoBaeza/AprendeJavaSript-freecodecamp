function retornarMinimo(x, y){
    /*if (x < y){
        return x;
    } else {
        return y;
    }*/

    // Refactorización del código de arriba
    return x < y ? x : y;
}

console.log(retornarMinimo(4, 7));
console.log(retornarMinimo(8, 2));
console.log(retornarMinimo(5, 5));

var a = 5;
var b = 9;

console.log(a > b ? a + 2 : b * 3);