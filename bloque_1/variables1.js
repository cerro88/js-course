// Prueba 1
// Intercambiar los valores de x e y

//var x = 2;
//var y = 3;

//variable temporal
//var temp = x;

//console.log(x = y);
//console.log(y = temp);


let x = 2;
let y = 3;

// Intercambia los valores en una sola línea (destructuring valido solo con let y const)
[x, y] = [y, x]; 

console.log(x);
console.log(y);