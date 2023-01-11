var miReceta = {
    "descripcion": "mi postre favorito",
    "costo": 15.6,
    "ingredientes": {
        "masa": {
            "harina": "100 grs",
            "sal": "1 cucharadita",
            "agua": "1 taza"
        },
        "cobertura": {
            "azucar": "120 grs",
            "chocolate": "4 cucharadas",
            "mantequilla": "200 grs"
        }
    }
};

//console.log(miReceta.ingredientes);
//console.log(miReceta.ingredientes.masa);
//console.log(miReceta.ingredientes.masa.harina);

console.log(miReceta.ingredientes.masa["harina"]); // Recordemos que la ventaja de usar notación de corchetes es que podemos usar una variable

console.log(miReceta.ingredientes["cobertura"].chocolate); // La notación de corchetes se puede usar en cualquier punto del camino