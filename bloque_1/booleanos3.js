// == (IGUALDAD) solo valor '10' = 10
// === (IGUALDAD) ayuda a comparar string de valor num 'tipo de variable'
// != (DESIGUALDAD)
// !== (DESIGUALDAD)

//

// && AND 
/* TABLA DE VERDAD (Solo si todas son igual es verdad, si solo una es falsa todo lo es)
  1 && 1 : 1
  1 && 0 : 0
  0 && 1 : 0
  0 && 0 : 1
  */
// || OR
/* TABLA DE VERDAD (Si alguna es verdad todas lo son, solo si ambas son falsas es false)
  1 || 1 : 1
  1 || 0 : 1
  0 || 1 : 1
  0 || 0 : 0
  */

// ! NOT
/*
 1:0
  */
  //let TrabajoHecho = true;
  //let notaFinal = 10;
  //let faltaTecnica = false;
//
  //let apruebaCurso = (TrabajoHecho || notaFinal >= 5) && !faltaTecnica;
  //console.log(apruebaCurso);

//Realizar un programa que, dadas dos lineas en una dimensión (dos rangos)
// (a, b), (c, d) comprobar que las lineas se solapan o no se solapan


let a = 5;
let b = 20;
let c = 10;
let d = 25;



// Se considera que no hay solape si una 
// línea termina antes o justo cuando empieza la otra
let noSolapan = b <= c || d <= a;
let siSolapan = !noSolapan;

console.log('¿Solapan? ', siSolapan);
