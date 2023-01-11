var curso = {
    "titulo": "Aprende JavaScript desde Cero",
    "idioma": "Español",
    "duracion": 30
}

console.log(curso.visitas); // undefined

curso["vistas"] = 34500; // Agregamos una propiedad

console.log(curso.vistas); // 34500