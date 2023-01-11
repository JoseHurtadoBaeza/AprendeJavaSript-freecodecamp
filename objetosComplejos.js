var ordenesDePizzas = [
    {
        "tipo": "margarita",
        "tamaño": "individual",
        "precio": 5.67,
        "toppings": [
            "extra queso",
            "champiñones",
            "piña"
        ],
        "paraLlevar": true
    },
    {
        "tipo": "cuatro quesos",
        "tamaño": "familiar",
        "precio": 18.34,
        "toppings": [
            "extra queso",
            "pimentón"
        ],
        "paraLlevar": false
    },
    { // Añadimos este nuevo objeto al array
        "tipo": "napolitana",
        "tamaño": "individual",
        "precio": 6.78,
        "toppings": [],
        "paraLlevar": true
    }
];

console.log(ordenesDePizzas[0].tipo); // o console.log(ordenesDePizzas[0]["tipo"])
console.log(ordenesDePizzas[2]); // Accedemos al nuevo objeto creado