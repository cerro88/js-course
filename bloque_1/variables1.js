// Prueba 1
// Intercambiar los valores de x e y

var x = 2;
var y = 3;

//variable temporal
var temp = x;

console.log(x = y);
console.log(y = temp);


let a = 2;
let b = 3;

// Intercambia los valores en una sola línea (destructuring valido solo con let y const)
[a, b] = [b, a]; 

console.log(a);
console.log(b);