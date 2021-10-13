// ---------------------------Codigo del cradrado
console.group('Codigo del cuadrado')

// const ladoCuadrado = 5;
// console.log("los lados del cuadrado miden: " + ladoCuadrado + "cm")

function perimetroCuadrado(lado) {
  return lado * 4;
}
// console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm")

function areaCuadrado(lado) {
  return lado * lado
}
// console.log("El area del cuadrado es: " + areaCuadrado + "cm^2")

console.groupEnd();

// -------------------------------codigo del triangulo

console.group('Codigo del triangulo')

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// console.log(
//   "Loas lados del triangulo miden : "
//   + ladoTriangulo1
//   + "cm, "
//   + ladoTriangulo2
//   + "cm, "
//   + baseTriangulo +
//   "cm"
//   );

  const alturaTriangulo = 5.5;
console.log('La altura del trianguelo es de: ' + alturaTriangulo)

function perimetroTriangulo(lado1, lado2, base){
  return lado1 + lado2 + base;
}
// console.log('El perimtreo del triangulo es: ' + perimetroTriangulo + "cm");

function areaTriangulo(base, altura) {
  return (base * altura) / 2
}
// console.log('El area del triangulo es: ' + areaTriangulo + "cm^2" );

console.groupEnd();

//------------------------------- codigo del circuo

console.group('Codigo del circulo');

// Radio
const radioCirculo = 4;
console.log('El radio del circulo es: ' + radioCirculo + "cm" );

// Diametro
function diametroCirculo(radio) {
  return radio * 2;
}
// console.log('El diametro del circulo es: ' + diametroCirculo + "cm" );

// PI
const PI = Math.PI;
console.log('El PI del circulo es: ' + PI );

// Circunferencia
function perimetroCirculo(radio){
  const diametro = diametroCirculo(radio);
  return diametro * 2;
}
// const perimetroCirculo = diametroCirculo * PI;
// console.log('El perimetro del circulo es: ' + perimetroCirculo + "cm" );

// Area
function areaCirculo(radio){
  return (radio * radio) * 2;
}
// const areaCirculo = (radioCirculo * radioCirculo) * PI;
// console.log('El area del circulo es: ' + areaCirculo + "cm^2" );

console.groupEnd();

