function esMenorQue(a, b){
    /*if (a < b){
        return true;
    } else {
        return false;
    }*/

    // Refactorizamos a esto
    return a < b;
}

console.log(esMenorQue(3, 6));
console.log(esMenorQue(6, 6));
console.log(esMenorQue(6, 3));