// Estamos obteniendo un rango de valores que va desde 0 hasta 19 inclusive
var numeroAleatorioEntre0y19 = Math.floor(Math.random() * 20); // Este método lo que hace es truncar/eliminar la parte decimal del número que se pase por parámetro

console.log(numeroAleatorioEntre0y19);

function generarEnteroAleatorio(limiteSuperior){
    // Generar un entero aleatorio entre 0 y el límite
    // superior (sin incluirlo)
    return Math.floor(Math.random() * limiteSuperior);
}

for (var i = 0; i < 15; i++) {
    console.log(generarEnteroAleatorio(5));
}