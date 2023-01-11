/* 
Tenemos un objeto que representa parte de una colección 
de álbumes musicales.

Cada álbum tiene un número de identificación único (id)
asociado a otras propiedades.

No todos los álbumes tienen la información completa.
*/

var coleccionDeDiscos = {
    7853: {
        tituloDelAlbum: "Bee Gees Greatest",
        artista: "Bee Gees",
        canciones: ["Stayin' Alive"]
    },
    5439: {
        tituloDelAlbum: "ABBA Gold"
    }
}

/*
Define una función actualizarDiscos que tome los siguientes parámetros:
- discos (el objeto que representa la colección de discos).
- id
- propiedad ("artista" o "canciones")
- valor

Tu meta es completar la función implementando las siguientes reglas
para modificar el objeto pasado a la función:

- Si "valor" es una cadena vacía, elimina la "propiedad"
del álbum correspondiente.

- Si "propiedad" es igual a la cadena de caracteres "canciones" pero
el álbum no tiene una propiedad llamada "canciones", crea un array 
vacío y agrega "valor" a ese array.

- Si "propiedad" es igual a la cadena de caracteres "canciones" y
"valor" no es una cadena vacía, agrega "valor" al final del array 
de canciones del álbum correspondiente.

- Si "valor" no es una cadena vacía y "propiedad" no es igual a
"canciones", asigna el valor del parámetro "valor" a la propiedad.
Si la propiedad no existe, debes crearla y asignar ese valor.

*/

function actualizarDiscos(discos, id, propiedad, valor){
    if (valor === ""){
        delete discos[id][propiedad];
    } else if (propiedad === "canciones"){
        discos[id][propiedad] = discos[id][propiedad] || []; // El operador OR aquí lo que hace es que si discos[id][propiedad] es undefined se tomará el valor de respaldo, en este caso el array vacío
        discos[id][propiedad].push(valor);
    } else {
        discos[id][propiedad] = valor;
    }
}

console.log(coleccionDeDiscos[7853].tituloDelAlbum);

actualizarDiscos(coleccionDeDiscos, 7853, "tituloDelAlbum", "");

console.log(coleccionDeDiscos[7853].tituloDelAlbum);


console.log(coleccionDeDiscos[5439].canciones);

actualizarDiscos(coleccionDeDiscos, 5439, "canciones", "Mamma Mia");

console.log(coleccionDeDiscos[5439].canciones);

console.log(coleccionDeDiscos[5439].artista);

actualizarDiscos(coleccionDeDiscos, 5439, "artista", "ABBA");

console.log(coleccionDeDiscos[5439].artista);