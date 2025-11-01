
/*
let contador = 0;
let N = 50;

//Bucle while
while (contador < N) {
    console.log(contador);
    contador += 1;
}
*/

/*
//Bucle do while
do {
     //primera iteracion
} while(condicion)

EJEMPLO
let contraseña;

do {
    contraseña = prompt("Introduce tu contraseña:");
} while (contraseña !== "emma2025");

console.log("¡Bienvenida!");

*/

//Bucle for
// valor inicial, condicion por la que el bucle corre, como se incrementa
/*
for (let i = 0; i < 50; ++i) {
    console.log(i);
}
    */

//for (let i = 0; 1 < 50; i += 2) {
  //  console.log(i);
//}


//EJERCICIOS BUCLE for*/
console.log("EJERCICIOS BUCLE FOR");
console.log("1.Imprime los números del 1 al 10");
for (let i = 1; i <= 10; i++){

    console.log(i);
}
console.log('Fin del ejercicio 1')

console.log("2.Muestra la suma de los números del 1 al 5");
let suma = 0;


for (let n = 1; n <= 5; n++) {
    suma += n;  // suma = suma + n
}

console.log("La suma total es:", suma);
console.log('Fin del ejercicio 2')

console.log("3.Muestra la tabla del 5 del 1 al 10");
for( let x = 1; x <= 10; x++){
    console.log(x ,"* 5 = ", x * 5);
    /* correccion mas elegante
    console.log(`${x} x 5 = ${x * 5}`); */
}
console.log('Fin del ejercicio 3')

console.log("4.Imprime solo los números pares entre 1 y 20");
for (let y = 2; y <= 20; y+=2){
    console.log(y);
}
console.log('Fin del ejercicio 4')


