const prompt = require("prompt-sync")({sigint: true});
//Nombre: Samuel Perez
//Camada: III

// EJERCICIO 1
// --------------------------------------
// 1. Que reciba por parámetro 1 número, le sume 10, y verifique que si ese resultado 
// es múltiplo de 5. Si lo es, tiene que retornar la frase:  ‘[número] + 10 es múltiplo de 5’, 
// sino, retornará ‘[número] + 10 no es múltiplo de 5’.
// --------------------------------------

// let numero = parseInt(prompt("Ingrese el numero: "));

// function multiplo (numero) {
//     let numeroMasDiez = numero + 10;
//     if (numeroMasDiez % 5 === 0){
//         return numero + ' + 10 es multiplo de 5';
//     }else{
//         return numero + ' + 10 NO es multiplo de 5';
//     }
// }

// console.log(`El resultado es: ${multiplo(numero)}`);

// --------------------------------------
// 2. Que reciba por parámetro dos números enteros y retorne la multiplicación de ambos.
// --------------------------------------

// let entero1 = parseInt(prompt("Ingrese el 1er numero entero: "));
// let entero2 = parseInt(prompt("Ingrese el 2do numero entero: "));

// function multiplicar(entero1,entero2) {
//     let z = entero1*entero2;
//     return z;
// }

// console.log(`La multipliacion de los numeros enteros es: ${multiplicar(entero1,entero2)}`);

// --------------------------------------
// 3. Que acepte un arreglo de números y devuelva la suma de todos ellos
// --------------------------------------

// let numeros = [1, 2, 3, 4, 5];
// let resultado = sumarNumeros(numeros);

// function sumarNumeros(arr) {
// let sum = 0;

//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum;
//     }

// console.log(resultado);

// EJERCICIO 2
// --------------------------------------
// 1. Deberás escribir un objeto literal llamado empresa que contenga las siguientes propiedades que deberás completar con tus datos:
//nombre
//actividad
//sueldos
// --------------------------------------

// const empresa = { 
//     nombre: "Samuel_Perez",
//     actividad: "Developer", 
//     sueldos: [100000, 200000, 300000, 400000, 500000, 600000, 700000, 800000, 900000, 1000000] 
// };

// 2. Teniendo en cuenta los datos del punto número 1:
// A. Crear un método del objeto que calcule los sueldos que paga la empresa y si supera los 200.000 retornará:  
// ‘La empresa [nombre] se encuentra en quiebra ya que su pago de sueldos es de  [sueldos] por lo tanto, 
// necesita hacer un ajuste en sus empleados’ , y si no retornará: ‘La empresa [nombre] esta bien economicamente, 
// ya que su pago de sueldos es de [sueldos] por lo tanto, NO necesita hacer un ajuste en sus empleados’

// let empresa = {
//     nombre: 'Empresa123',
//     empleados: [
//         { nombre: 'Fulano', sueldo: 30000 },
//         { nombre: 'Sultano', sueldo: 60000 },
//         { nombre: 'Mengano', sueldo: 70000 },
//     ],
//     calcularSueldos: function() {
//         let Totales = 0;

//         for (var i = 0; i < this.empleados.length; i++) {
//         Totales += this.empleados[i].sueldo;
//     }

//         if (Totales > 200000) {
//         return 'La empresa ' + this.nombre + ' se encuentra en quiebra ya que su pago de sueldos es de $' + Totales + ', por lo tanto, necesita hacer un ajuste en sus empleados.';
//         } else {
//         return 'La empresa ' + this.nombre + ' está bien económicamente, ya que su pago de sueldos es de $' + Totales + ', por lo tanto, NO necesita hacer un ajuste en sus empleados.';
//         }
//     }
// };

// let resultadoCalculoSueldos = empresa.calcularSueldos();
// console.log(resultadoCalculoSueldos);



// EJERCICIO 3
// --------------------------------------
// 1. Crear un array vacío, que tenga el nombre libros. Usando estos 4 objetos:

let libros = [
    {
        nombre: "historiasInconscientes",
        anio  : 2013,
        autor : "Gabriel Rolón",
        paginas: 352,
    },
    {
        nombre: "elAlquimista",
        anio  : 1988,
        autor : "Paulo Coehlo",
        paginas: 192,
    },
    {
        nombre: "elCampamento",
        anio  : 2021,
        autor : "Blue Jeans",
        paginas: 480,
    },
    {
        nombre: "operacionMasacre",
        anio: 2009,
        autor: "Rodolfo Walsh",
        paginas: 236,
    },
];

// // 2. Mostrar por consola el array para ver que contenga esos objetos
// console.log(libros);

// 3. Deberás crear una función que reciba el array libros como parámetro, 
// y si el año de lanzamiento es anterior a 2020, deberá agregar una propiedad a 
// cada objeto que se llame época y tenga el valor pre-pandemia, si el año es 
// posterior o igual a 2020 el valor de la propiedad época será post-pandemia.

function agregarEpoca(libros) {
    libros.forEach(function(libro) {
        if (libro.anio < 2020) {
        libro.epoca = "pre-pandemia";
        } else {
        libro.epoca = "post-pandemia";
        }
    });
    return libros;
}

let librosConEpoca = agregarEpoca(libros);
// console.log(librosConEpoca);

console.log(libros);


