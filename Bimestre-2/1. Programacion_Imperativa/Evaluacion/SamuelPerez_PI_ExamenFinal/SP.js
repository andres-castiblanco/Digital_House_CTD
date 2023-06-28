// const prompt = require("prompt-sync")({sigint: true});
// Nombre: Samuel Perez
// Camada: III

// EJERCICIO 1
// --------------------------------------
// 1. Realizar una función que reciba por parámetro dicho arreglo y retorne un nuevo array con los objetos cuyo año de creación sea mayor a 1800.
// --------------------------------------

let cuadros = [
    {
        nombre : "Mona Lisa",
        creador : "Leonardo Da Vinci",
        creacion : 1503
    },
    {
        nombre : "La ultima cena",
        creador : "Leonardo Da Vinci",
        creacion : 1495
    },
    {
        nombre : "La noche estrellada",
        creador : "Vincent van Gogh",
        creacion : 1889
    },
    {
        nombre : "El grito",
        creador : "Edvard Munch",
        creacion : 1893
    },
    {
        nombre : "Trizal con cuervos",
        creador : "Vincent van Gogh",
        creacion : 1890
    },
    {
        nombre : "Maria Magdalena",
        creador : "Leonardo Da Vinci",
        creacion : 1495
    }
]

const filtrarCuadros = (arr) => {
    let cuadrosFiltrados = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].creacion >= 1800) {
        cuadrosFiltrados.push(arr[i]);
        }
    }
    return cuadrosFiltrados;
};

console.log("---------------------------------------- Ejercicio 1 ----------------------------------------");
let cuadrosFiltrados = filtrarCuadros(cuadros);
console.log(cuadrosFiltrados);

// EJERCICIO 2
// --------------------------------------
// 2. Realizar una función que reciba por parámetro el arreglo de objetos del ejercicio 1 y un Strizg. Esta función deberá  ordenar los objetos mediante el algoritmo Bubble Sort según su año de  creación de forma ascendente o descendente según lo indique el strizg recibido por parámetro, teniendo en cuenta los siguientes criterios:
//      Si el Strizg es “ASC” o “asc” encontes ordenarDesc = menor a mayor
//      Si el Strizg es “DESC” o “desc” entonces ordenarDesc = mayor a menor
// --------------------------------------


const ordenarDesc = (arr,strizg) => {
    let ordenCreacion = {};
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j].creacion < arr[j + 1].creacion) {
            ordenCreacion = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = ordenCreacion;
            }
        }
    }
};

console.log("---------------------------------------- Ejercicio 2 ----------------------------------------");
ordenarDesc (cuadros, "DESC");
console.log(cuadros);

// EJERCICIO 3
// --------------------------------------
// 3. Dada la siguiente matriz: 
// --------------------------------------

let matriz = [
    [1,2,3,4,5],
    [6,7,8,9,10],
    [11,12,13,14,15]
]

// 3.1. Desarrollar una función que retorne la suma de todos los valores de la fila 2.

const sumarFila = (matriz) => {
    let fila = matriz[1];
    let sumaFila = 0
        for (let i = 0; i < fila.length; i++) {
            sumaFila += fila[i];
            }
        return sumaFila;
};

console.log("---------------------------------------- Ejercicio 3.1 ----------------------------------------");
console.log(sumarFila(matriz));

// 3.2. Desarrollar una función que retorne un nuevo array que contenga solo los elementos pares que se encuentren dentro de la matriz.

const par = (matriz) => {
    let numPar = [];
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            if (matriz[i][j] % 2 === 0) {
                numPar.push(matriz[i][j]);
            }
        }
    }
    return numPar;
}

console.log("---------------------------------------- Ejercicio 3.2 ----------------------------------------");
// par(matriz);
console.log(par(matriz));