/*+const crearPersona = (nombre, edad, idioma) => {
    return {
        nombre: nombre,
        edad: edad,
        idioma: idioma
    };
};

console.log(crearPersona("Gino Smith", 28, "Español"));*/

// Vamos a ver una forma más concisa

const crearPersona = (nombre, edad, idioma) => ({nombre, edad, idioma});

console.log(crearPersona("Gino Smith", 28, "Español"));