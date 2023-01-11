var curso = {
    "titulo": "Aprende JavaScript desde Cero",
    "idioma": "Español",
    "duracion": 30
}

console.log(curso.duracion); // 30

delete curso.duracion;

console.log(curso.duracion); // undefined

console.log(curso);