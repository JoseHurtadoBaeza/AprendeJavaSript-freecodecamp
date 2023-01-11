var misPlantas = [
    {
        tipo: "flores", // No hace falta rodear las propiedades con comillas siempre y cuando sólo tengan una palabra. Para estos casos el lenguaje se encarga de poner las comillas.
        lista: [
            "rosas",
            "tulipanes",
            "dientes de león"
        ]
    },
    {
        tipo: "árboles", 
        lista: [
            "abeto",
            "pino",
            "abedul"
        ]
    }
]

var primeraFlor = misPlantas[0].lista[0];
console.log(primeraFlor);

var segundoArbol = misPlantas[1].lista[1];
console.log(segundoArbol);