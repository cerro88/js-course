
/* EJERCICIOS BUCLE while */
console.log("EJERCICIOS BUCLE WHILE");

console.log("1. Cuenta del 10 al 1 (cuenta atrás)");
// Escribe aquí tu código

let p = 11;

while(p <= 11 && p > 1){
    console.log(p -=1);
}

console.log("Fin del ejercicio 1\n");


console.log("2. Pedir un número mayor que 0 (simulado)");

const prompt = require('prompt-sync')();
let respuesta = 0;

while (respuesta <= 0) {
    respuesta = parseFloat(prompt("Introduce un número mayor que 0: "));

}

console.log("Fin del ejercicio 2\n");



console.log("3. Sumar números del 1 en adelante hasta que la suma supere 100");
// Escribe aquí tu código


console.log("Fin del ejercicio 3\n");