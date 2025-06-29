//Otra forma de controlar el flujo condicional
//Podemos simplificar un if:
let statuS = 0;
if ( statuS === 0) {
    //hago a
} else if (statuS === 1) {
    //hago b
} else if (statuS === 2) {
    //hago c
}

//podemos escribirlo como:
switch (statuS ) {
    case 0:
        //hago a
        break;
    case 1:
        //hago b
        break;
    case 2:
        //...
        break;
    default:
        //...
        break;
}


//es mas legible y mas eficiente


/*
TAREA: El Planificador de Viajes Espaciales

Escribe un programa en Node.js que utilice la estructura switch 
para planificar un viaje espacial ficticio. 
El programa pedirá al usuario que introduzca un destino planetario 
(por ejemplo, Marte, Júpiter, Saturno, etc.) y, en función del destino, 
proporcionará detalles sobre el viaje, como la duración estimada del viaje, 
la distancia al planeta, y alguna curiosidad interesante sobre el destino.

Siéntete libre para ser creativo con los datos y 
la información que incluyes para cada destino.
 */

// He tenido que instalar 'prompt-sync'( npm install prompt-sync) 
// desde Git Bash porque desde el terminal de Visual Studio (en Windows) no me funcionaba bien con bash.
// Esto sirve para poder pedirle datos al usuario desde la consola, 
// como si usáramos prompt() en el navegador.
const prompt = require('prompt-sync')();

let destino0 = 'Venus';
let destino1 = 'Jupiter';
let destino2 = 'Saturno';
let destino3 = 'Urano';


console.log("Elige tu destino planetario:\n0 - Venus\n1 - Jupiter\n2 - Saturno\n3 - Urano\n");
// Uso toLocaleLowerCase() para que no me dé error si escribe con mayúsculas
// (como "Venus" o "VENUS").
// Así todo se pasa a minúsculas y puedo compararlo más fácil luego en el switch.
let respuesta = prompt("Respuesta: ").toLocaleLowerCase();

switch (respuesta) {
    case '0':
        console.log('Has elegido Venus. Su distancia aprox. es de 41 millones de Km.');
        console.log('Puedes tardar entre 3 a 5 meses en llegar. ¡Trae unos buenos libros!');
        console.log('Su atmósfera está compuesta casi totalmente de dióxido de carbono y nubes de ácido sulfúrico.');
        console.log('Curiosidad: Gira al revés y un día dura más que su año.');
        console.log("¡Buen viaje, explorador del espacio!");
        break;

    case '1':
        console.log('Has elegido Júpiter. Su distancia aprox. es de 588 millones de Km.');
        console.log('Puedes tardar entre 13 meses a 6 años en llegar, según la ruta. ¿Cuanto tiempo tienes?');
        console.log('Su atmósfera está compuesta de hidrógeno y helio, y tiene la Gran Mancha Roja, una tormenta gigante.');
        console.log('Curiosidad: Emite más energía de la que recibe del Sol.');
        console.log("¡Buen viaje, explorador del espacio!");
        break;

    case '2':
        console.log('Has elegido Saturno. Su distancia aprox. es de 1.200 millones de Km.');
        console.log('Puedes tardar entre 3 a 7 años en llegar... ¡Sorpresa!');
        console.log('Su atmósfera está formada por hidrógeno, helio, amoníaco y vapor de agua.');
        console.log('Curiosidad: Flotaría en agua y tiene un hexágono perfecto en el polo norte.');
        console.log("¡Buen viaje, explorador del espacio!");
        break;

    case '3':
        console.log('Has elegido Urano. Su distancia aprox. es de 2.600 millones de Km.');
        console.log('Puedes tardar entre 8 a 15 años en llegar!!!');
        console.log('Su atmósfera contiene hidrógeno, helio y metano, que le da su color azul.');
        console.log('Curiosidad: Gira de lado, como si rodara por el espacio.');
        console.log("¡Buen viaje, explorador del espacio!");
        break;

    default:
        console.log('Destino no válido. Escribe un número del 0 al 3 ');
        break;
}