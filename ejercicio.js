/* Ejercicios para saber el nivel de conocimiento de JavaScript */
let nombre = "Nicolas"
let apellido = "Castillo"
let userPlatzi = "Nicolas"
let age = 28
let email = "nicolascastillo@platzi.com"
let money = 30000
let debts = 4657

console.log(nombre + ' ' + apellido)
console.log( money - debts)


const tipoDeSuscripcion = "Free";

function tipoDeSuscripciones(tipoDeSuscripcion){
  if (tipoDeSuscripcion === "Free"){
    console.log("Solo puedes tomar los cursos gratis");
  }
  else if (tipoDeSuscripcion === "Basic" ){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
  }
  else if (tipoDeSuscripcion === "Expert" ){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
  }
  else if (tipoDeSuscripcion === "ExpertPlus"){
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
  }
}

tipoDeSuscripciones(tipoDeSuscripcion);

for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}

let i = 0
while ( i < 5){
  console.log("El valor de i es: " + i);
  i++;
}

for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}

let i = 10
while ( i >= 2){
  console.log("El valor de i es: " + i);
  i--;
}
