class Libro {
    constructor(autor){
        this._autor = autor; // Por convención en JavaScript el _ se usa para indicar que la variable es privada aunque en la práctica no lo sea
    }

    get autor(){
        console.log("Getter");
        return this._autor;
    }

    set autor(nuevoAutor){ 
        // Aquí podríamos añadir un condicional para chequear el nuevo valor que se quiere dar a la propiedad del objeto
        console.log("Setter");
        this._autor = nuevoAutor;
    }

}

const libro = new Libro("anónimo");
console.log(libro.autor); // Estamos llamando al getter

libro.autor = "Gino Smith"; // Estamos llamando al setter cuando cambiamos el valor
console.log(libro.autor);