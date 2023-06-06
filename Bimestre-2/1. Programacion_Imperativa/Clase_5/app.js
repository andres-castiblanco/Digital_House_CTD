const prompt = require("prompt-sync")({sigint: true});

// function test1(x,y){
//     return y - x
// }
// test1(10,40)

// console.log(test1)

// 1. Crear una función que convierta pulgadas en centímetros.
// let pul = parseFloat(prompt('Ingrese las pulgadas: '));

// function pulACm(pul) {
//     let cent = pul * 2.54;
//     return cent;
// }

// console.log(`El valor en Centimetros es:  ${pulACm(pul)}`);

// 2. Crear una función que recibe un string y lo convierte en una URL.
// let nombre = prompt("Ingrese el nombre de la pagina web: ");

// function url(nombre) {
//     return  "https://www." + nombre + ".com"
// }

// console.log(url(nombre));

// 3. Crear una función que recibe un string y devuelve la misma frase pero con admiración.
// let frase = prompt("Ingrese la frase: ");

// function fraseConAdmiracion(frase) {
//     return frase + "!!!";
// }
// console.log(fraseConAdmiracion(frase))

// 4. Crear una función que calcule la edad de los perros, considerando que 1 año para nosotros son 7 de ellos.
// let tiempoHumano = prompt("Ingrese los años del HUMANO: ");

// function edadHumAPerro(tiempoHumano) {
//     let tiempoPerro= tiempoHumano * 7;
//     return tiempoPerro;
// }

// console.log(`La conversion del tiempo humano al tiempo de perro es: ${edadHumAPerro(tiempoHumano)}`);

// 5. Crear una función que calcule el valor de tu hora de trabajo, introduciendo tu sueldo mensual como parámetro. PD: considerá que tu mes de trabajo tiene 40 horas.
// let sueldo = parseInt(prompt("Ingrese su sueldo: "));

// function valorHoraTrabajoMes(sueldo) {
//     let x = sueldo / 40;
//     return x;
// }
// console.log(`El valor hora de su sueldo es: ${valorHoraTrabajoMes(sueldo)}`);

// 6.Crear la función calculadorIMC() que reciba la altura en metros y el peso en kilogramos y calcule el IMC de una persona. Luego, ejecutar la función probando diferentes valores.
// let alturaMts = parseFloat(prompt("Ingrese la altura en metros: "));
// let pesokg = parseFloat(prompt("Ingrese el peso en kilogramos: "));

// function IMC(alturaMts, pesokg){
//     let IndiceMasaCorporal = pesokg / Math.pow(alturaMts, 2);
//     return IndiceMasaCorporal;
// }

// console.log(`El valor del Indice de Masa Corporal es: ${IMC(alturaMts,pesokg)}`);

// 7. Crear una función que recibe un string en minúscula, lo convierta a mayúsculas y lo retorne. Investigá qué hace el método de strings .toUpperCase()
// let fraseMinuscula = prompt("Ingrese la frase en minuscula: ");

// function minAMayus(fraseMinuscula) {
//     let fraseMayuscula = fraseMinuscula.toUpperCase();
//     return fraseMayuscula;
// }

// console.log(minAMayus(fraseMinuscula));

// 8. Crear una función que recibe un parámetro y devuelve qué tipo de dato es ese parámetro.
// let tipodato = parseInt(parseFloat(prompt("Ingrese una frase o un numero: ")));
// let tipodato = prompt("Ingrese una frase o un numero: ");

function deParametroAtipoDato(tipodato) {return typeof tipodato;}
console.log(deParametroAtipoDato(2.32));
//console.log(deParametroAtipoDato(tipodato));

// 9. Crear una función que le pasamos el radio de un círculo y nos devuelve la circunferencia.
// let radio = parseFloat(prompt("Ingrese el radio del circulo: "));

// function circunferencia(radio) {
//     let cir = 2*Math.PI*radio;
//     return cir;
// }

// console.log(`La circunferencia del circulo es: ${circunferencia(radio)}`);
// // console.log(circunferencia(radio));