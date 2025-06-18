////asignación
//let a = 1;
//let b = 2;
//
////suma
//let suma = a + b;
////resta
//let resta = a - b;
////producto
//let producto = a * b;
////division
//let division = a / b;
////modulo o resto 
//let resto = a % b;
////exponenciacion
//let expo = a ** b;
////incremetar el valor de a en 1
//a++;
////decrementar en 1
//a--;
//
//a += 2;
//a -= 2;
//a *= 2;
//a /= 2;
//a %= 2;
//a **= 2;

const { nombre } = require("./variables1");


//let nombre = 'Emma';
//let apellido = 'Torres';
//
////let nombreCompleto = nombre + ' ' + apellido;
////mismo resultado
//nombre += ' ';
//nombre += apellido;
//console.log(nombre);

//Ejercico: Programa que nos diga buenos dias
//RESULTADO: 'BUENOS DIAS NOMBRE'

let texto = 'Buenos dias ';
texto += nombre;

console.log(texto);

