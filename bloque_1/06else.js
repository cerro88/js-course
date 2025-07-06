/*
//Control de flujo

//Condicionales
let condition = true;
let condition2 = false;

//si esto se cumple
if (condition) {
    //ejecuto esto
//si no
} else {
    //ejecuto esto
}



//se pueden concatenar
if (condition) {

} else if (condition){

} else if (condition2) {

} else  {
    
}

//se pueden anidar
if (condition) {
    if (condition2) {

    }
} else {

}

*/

/*TAREA

Se debe realizar un programa que, dados dos números, 
imprima por pantalla si el primer número es múltiplo del segundo.

Con las siguientes variables:*/

let primer = 25;
let segundo = 2;

if (primer % segundo) {
    console.log( primer +', NO es multiplo de '+ segundo);
} else {
    console.log ( primer +', es multiplo de '+ segundo) ;
}
