// ---------------------------Codigo del cradrado
console.group('Codigo del cuadrado')

// const ladoCuadrado = 5;
// console.log("los lados del cuadrado miden: " + ladoCuadrado + "cm")

function areaCuadrado(lado) {
  return lado * 4;
}
// console.log("El area del cuadrado es: " + areaCuadrado + "cm")

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
// console.log('El perimtreo del triangulo es: ' + areaTriangulo + "cm");

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
function areaCirculo(radio){
  const diametro = diametroCirculo(radio);
  return diametro * 2;
}
// const areaCirculo = diametroCirculo * PI;
// console.log('El area del circulo es: ' + areaCirculo + "cm" );

// Area
function areaCirculo(radio){
  return (radio * radio) * 2;
}
// const areaCirculo = (radioCirculo * radioCirculo) * PI;
// console.log('El area del circulo es: ' + areaCirculo + "cm^2" );

console.groupEnd();

// ----------------------------------conexion de JS con HTML

function calcularareaCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;
  console.log(typeof(value))
  const area = areaCuadrado(value);
  alert(area);
}

function calcularAreaCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;
  const area = areaCuadrado(value);
  alert(area);
}

function calcularPerimetroTriangulo(){
  const ladoUno = document.getElementById('InputLado1');
  const ladoDos = document.getElementById('InputLado2');
  const ladoBase = document.getElementById('InputBase');
  const valueUno = parseInt(ladoUno.value, 10);
  const valueDos = parseInt(ladoDos.value, 10) ;
  const valueBase = parseInt(ladoBase.value, 10);
  const areaTriangulo1 = perimetroTriangulo(valueUno, valueDos, valueBase);
  alert(areaTriangulo1);
}

function calcularAreaTriangulo(){
  const ladoBase = document.getElementById('InputBase');
  const altura = document.getElementById('InputAltura');
  const valueBase = parseInt(ladoBase.value, 10);
  const valueAltura = parseInt(altura.value, 10);
  const areaTriangulo1 = areaTriangulo(valueBase, valueAltura);
  alert(areaTriangulo1);
}


