function clasificarValor(valor){
    var respuesta;
    switch (valor){
        case 1:
            respuesta = "alpha";
            break;
        case 2:
            respuesta = "beta";
            break;
        case 3:
            respuesta = "gamma";
            break;
        case 4:
            respuesta = "delta";
            break;
    }
    return respuesta;
}

console.log(clasificarValor(1));
console.log(clasificarValor(2));
console.log(clasificarValor(3));
console.log(clasificarValor(4));

var producto = "helado";

switch (producto){
    case "pizza":
        console.log("La pizza básica cuesta $10.55");
        break;
    case "hamburguesa":
        console.log("Las hamburguesas cuestan $6.78");
        break;
    case "helado":
        console.log("El helado cuesta $2.8");
        break;
}

console.log("Luego de switch");