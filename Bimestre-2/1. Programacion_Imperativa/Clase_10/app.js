const prompt = require("prompt-sync")({sigint: true});

//


//1. 
//let numbers =[22, 33, 54, 66, 72]
//console.log(numbers.length)

//let text = "Hola, mundo!";
//console.log(text.length); 

//2. Devuelve iroman en la consola
//let grupoDeAmigos = [ "Harry", "Ron", "Hermione", "Spiderman", "Hulk",
//"Ironman","Penélope Glamour", "Pierre Nodoyuna","Patán" ]
//console.log(grupoDeAmigos[5])

//3. Devuelve "un string cualquiera" porque es el ultimo elemento del array y pide que busque en el indice el 8, el cual no existe
//let str = "un string cualquiera"
//let arrayAleatorio= ["Digital", "House", "true", "string", "123","false", "54", str ]
//console.log(arrayAleatorio[arrayAleatorio.length - 1])

// Colecciones de películas (y más...)

//let peliculas = ["star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"]
//console.log(peliculas[2])



//let peliculas = ["star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"]
//let mayu = Mayusculas(min);

//function Mayusculas (peliculas){
//    return min.ToUpperCase();
//}
//console.log(Mayusculas());

function funcionAMayusculas(array) {
let peliculasMay = array.map(function(elemento) {
    return elemento.toUpperCase();
});

return peliculasMay;
}

let peliculasMin = ["star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"]
let peliculasMay = funcionAMayusculas(peliculasMin);
console.log(peliculasMay);