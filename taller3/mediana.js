function calcularMediaAritmetica(lista){
  let sumaLista = 0;

  for (let i = 0;i < lista.length; i++ ) {
    sumaLista = sumaLista + lista[i];
  }
  return sumaLista / lista.length;
}

const lista1 = [
  100,
  200,
  500,
  400000,
];

const mitadLista1 = parseInt(lista1.length / 2);

function esPar (numero) {
  if (numero % 2 === 0 ){
    return true;
  } else {
    return false;
  }
}

// let mediana;

// if (esPar(lista1.length)){
//   const elemento1 = lista1[mitadLista1 - 1]
//   const elemento2 = lista1[mitadLista1]
//   const resultado = calcularMediaAritmetica([elemento1, elemento2]);
//   mediana = resultado
// } else {
//   mediana = lista1[mitadLista1]
// }


function calcularMediana (lista){
  let mediana;
  const mitadLista = parseInt(lista.length / 2);
  const parInpar = esPar(lista.length)
  if (parInpar){
    const elemento1 = lista[mitadLista - 1];
    const elemento2 = lista[mitadLista];
    const promedio = calcularMediaAritmetica([elemento1, elemento2]);
    mediana = promedio;
    return mediana;
  } else {
    mediana = lista[mitadLista];
    return mediana;
  }
}
