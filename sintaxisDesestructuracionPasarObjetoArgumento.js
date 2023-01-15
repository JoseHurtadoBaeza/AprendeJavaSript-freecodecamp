var nuevoPerfilCliente = {
    nombre: "Jane Doe",
    edad: 24,
    nacionalidad: "Española",
    ubicacion: "España"
};

const actualizarPerfil = ({nombre, edad}) => {
    console.log(nombre);
    console.log(edad);
};

actualizarPerfil(nuevoPerfilCliente);

// Otro ejemplo
const estadisticas = {
    max: 56.87,
    desviacionEstandar: 4.34,
    mediana: 34.54,
    moda: 23.97,
    min: -0.75,
    promedio: 35.85
};

const mitad = ({max, min}) => (max + min) / 2.0;

console.log(mitad(estadisticas));