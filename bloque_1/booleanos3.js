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
  let TrabajoHecho = true;
  let notaFinal = 10;
  let faltaTecnica = false;

  let apruebaCurso = (TrabajoHecho || notaFinal >= 5) && faltaTecnica;
  console.log(apruebaCurso);