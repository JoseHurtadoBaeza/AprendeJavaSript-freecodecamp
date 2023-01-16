/*const persona = {
    nombre: "Isabel",
    presentarse: function() {
        return `¡Hola! Mi nombre es ${this.nombre}`;
    }
};

console.log(persona.presentarse());*/

// Hay una forma de simplificarlo un poco más
const persona = {
    nombre: "Isabel",
    presentarse() {
        return `¡Hola! Mi nombre es ${this.nombre}`;
    }
};

console.log(persona.presentarse());