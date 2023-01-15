const usuario = {
    johnDoe: {
        edad: 27,
        correo: "johnDoe@freecodecamp.com"
    }
};

/*const {johnDoe: {edad, correo}} = usuario;

console.log(edad);
console.log(correo);*/

// De esta forma podemos cambiar los nombres de las variables a nuestro gusto
const {johnDoe: {edad: edadDelUsuario, correo: correoDelUsuario}} = usuario;

console.log(edadDelUsuario);
console.log(correoDelUsuario);



const PRONOSTICO_LOCAL = {
    "ayer": {
        minima: 61,
        maxima: 75
    },
    "hoy": {
        minima: 64,
        maxima: 77
    },
    "mañana": {
        minima: 68,
        maxima: 80
    }
};

/*const minimaHoy = PRONOSTICO_LOCAL.hoy.minima;
const maximaHoy = PRONOSTICO_LOCAL.hoy.maxima;

console.log(minimaHoy, maximaHoy);*/

// Refactorizamos
const {hoy: {minima: minimaHoy, maxima: maximaHoy}} = PRONOSTICO_LOCAL;
console.log(minimaHoy, maximaHoy);



