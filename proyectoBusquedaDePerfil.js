var contactos = [
    {
        "nombre": "Nora",
        "apellido": "Nav",
        "numero": "0543236543",
        "gustos": ["Pizza", "Programación"]
    },
    {
        "nombre": "Harry",
        "apellido": "Potter",
        "numero": "0994372684",
        "gustos": ["Hogwarts", "Magia"]
    },
    {
        "nombre": "Sherlock",
        "apellido": "Holmes",
        "numero": "0487345643",
        "gustos": ["Casas interesantes", "Violín"]
    }
];

function buscarPerfil(nombre, propiedad){
    for(var i = 0; i < contactos.length; i++){
        if(contactos[i].nombre === nombre){
            return contactos[i][propiedad] || "La propiedad no existe."; // El operador OR nos sirve para comprobar si una variable es undefined y en tal caso tomar el valor de respaldo
        }
    }
    return "El contacto no está en la lista.";
}

console.log(buscarPerfil("Nora", "gustos"));
console.log(buscarPerfil("Harry", "apellido"));
console.log(buscarPerfil("Sherlock", "numero"));
console.log(buscarPerfil("Nora", "direccion"));
console.log(buscarPerfil("Bob", "numero"));
