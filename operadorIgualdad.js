console.log(5 == 5); // true
console.log(6 == 5); // false
console.log("Hola" == "Hola"); // true
console.log("Hola" == "hola"); // false
console.log([1,2,3] == [1,2,3]); // Es false porque este operador cuando se aplica a los arrays no compara los elementos,
// sino que compara si los arrays en la memoria representan el mismo objeto. Con lo que nos tenemos que quedar es con 
// que no deberíamos comparar arrays con este operador.