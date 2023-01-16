class TransbordadorEspacial { // Por convención en JavaScript los nombres de las clases empiezan en letra mayúscula
    constructor(planeta){
        this.planeta = planeta;
    }
}

var zeus = new TransbordadorEspacial("Júpiter");
console.log(zeus.planeta);

var apolo = new TransbordadorEspacial("Marte");
console.log(apolo.planeta);

// Otro ejemplo
class Mascota {
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }
}

var miMascota = new Mascota("Nora", 5);
var tuMascota = new Mascota("Gino", 2);