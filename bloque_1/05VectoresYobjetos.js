// orden de elemtos
let array = [" aa", "bb", 3, (1, 2), {nombre: 'Belen', apellido: 'Cerro'}];
console.log(array[0]);

// conjunto de atributos
let objeto = {
    nombre: 'Martin',
    apellido: 'Garcia',
    edad: 26,
    coches: ['seat', 'kia'],
    direccion: {
        calle: 'Carrer',
        numero: 5,
    }

}


//acceso array
let item0 = [0];
let item1 = [1];

let indice = 4;
let item4 = array[indice];


//acceso object
let nombreObjeto = objeto.nombre;
let textodeCalle =objeto.direccion.calle;


//cuantos items tiene un vector
let longitud = array.length