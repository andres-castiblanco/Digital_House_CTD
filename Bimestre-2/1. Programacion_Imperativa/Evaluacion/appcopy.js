// let matriz = [
//     ["0-0", "0-1", "0-2", "0-3", "0-4"],
//     ["1-0", "1-1", "1.2", "1-3", "1-4"],
//     ["2-0", "2-1", "2.2", "2-3", "2-4"],
//     ["3-0", "3-1", "3.2", "3-3", "3-4"],
//     ["4-0", "4-1", "4.2", "4-3", "4-4"]
// ]

// console.table(matriz);

// for (let fila = 0 ; fila < matriz.length; fila++){
//     for (let columna = 0; columna < matriz[fila].length; columna++){
//         //console.log(matriz[fila][columna]);
//     }
// }

// console.log(matriz[2][3]);

// Desarrollar una funcion que genere una matriz, debera recibir por parametros la cantidad de filas y columnas
// y retornar con valores secuenciales numericos.
// 3x4 debe retornar del 1 al 12

// function crearMatriz(filas, columnas){
//     let matriz =[];// declarar la variable
//     let contador = 1;
//     for(let i = 0; i < filas; i++){ //crear un for por filas y como tenemos 3 filas i debe ser < a 3, dado que el i iniciliza en 0
//         let columna = []
//         for (let j = 0; j < columnas; j++){ // for que recorre las columnas en este caso 4 columnas
//                 columna.push(contador++)// hacer un push en cada columna
//         }
//     }
//     matriz.push(columnas);
// }

// console.log(
//     crearMatriz(3,4)
//     );

// crea una funcion para calcular la nota final de la materia BD

function NotaFinal(item1, item2, item3, item4) {
    let porcentaje1 = (item1 * 0.60);
    let porcentaje2 = (item2 * 0.15);
    let porcentaje3 = (item3 * 0.15);
    let porcentaje4 = (item4 * 0.10);
    
    let notaFinal = (porcentaje1 + porcentaje2 + porcentaje3 + porcentaje4);
    return notaFinal;
    }

let notaFinal = NotaFinal(100, 100, 100, 100);
console.log("La nota final es: " + notaFinal);