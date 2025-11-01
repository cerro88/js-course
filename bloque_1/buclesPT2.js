//ARRAYS


let array = [10, 20, 30] //la longitud de la array es 0 1 2 (3)

let estudiantes = [
    {
        nombre: 'estudiante 1',
        nota: 5
    },

    {
        nombre: 'estudiante 2',
        nota: 8
    },

    {
        nombre: 'estudiante 3',
        nota: 1
    }


]
for (let i = 0; i < array.length; i += 1) {
    console.log(estudiantes[i].nombre,estudiantes[i].nota);
}

//iteración real de una array de objetos

//manera más directa for of for in (simplificado)

//Iterar sobre vectores y objetos
//vector = nombre de la variable
//for (let item of vector) {
//
//}
//el estudiante , o sea la interacción es cada estudiante que 
// guardamos en una variable directamente que seria como hacer let estudiante = estudiantes[i]
for ( let estudiante of estudiantes) {
    console.log(estudiante.nombre, estudiante.nota);
}

//for in

let estudianteAuxiliar =  {
    nombre: 'Estudiante 1',
    nota: 5
}

//for...in sirve para recorrer las claves (keys) de un objeto.

for (let key in estudianteAuxiliar) {
    console.log(key);
}

//muestra clave + valor
for (let key in estudianteAuxiliar) {
    console.log(key, estudianteAuxiliar[key]);
}