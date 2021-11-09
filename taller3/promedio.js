const lista1 = [
  100,
  200,
  300,
  500,
]

function calcularMediaAritmetica(lista){
  let sumaLista = 0;

  for (let i = 0;i < lista.length; i++ ) {
    sumaLista = sumaLista + lista[i];
  }

  // const sumaLista = lista.reduce(
  //   function (valorAcumulado = 0, elementoNuevo) {
  //     return valorAcumulado + elementoNuevo
  //   }
  // );

  return sumaLista / lista.length;
}



// const promedioLista1 = sumaLista1 / lista1.length

// console.log(sumaLista1)
// console.log(promedioLista1)
