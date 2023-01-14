let colores = {
    "verde": "#10e04b",
    "azul": "1b50e0",
    "negro": "#000000",
    "blanco": "#ffffff"
}

Object.freeze(colores); // Con este método se congela el objeto

colores.amarillo = "#fff200"; // Error al añadir una nueva propiedad
colores.verde = "#345sg5"; // Error al modificar una propiedad existente

delete colores.verde; // Error al borrar una propiedad existente

console.log(colores);