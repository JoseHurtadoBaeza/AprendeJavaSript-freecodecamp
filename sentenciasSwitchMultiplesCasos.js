function clasificarVolumen(valor){
    var volumen;
    switch(valor){
        case 1:
            volumen = "bajo";
            break;
        case 2:
        case 3:
            volumen = "intermedio"; // Se aplica para el case 2 también
            break;
        case 4:
        case 5:
        case 6:
            volumen = "alto"; // Se aplica para los case 4 y 5 también
            break;
    }
    return volumen;
}

console.log(clasificarVolumen(1));
console.log(clasificarVolumen(2));
console.log(clasificarVolumen(3));
console.log(clasificarVolumen(4));
console.log(clasificarVolumen(5));
console.log(clasificarVolumen(6));