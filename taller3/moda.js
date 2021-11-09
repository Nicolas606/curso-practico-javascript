const lista1 = [
  1,
  2,
  3,
  1,
  2,
  3,
  4,
  5,
  3,
  2,
  3,
  1,
  4,
]


// const lista1Count = {}

// /* -----------------CREAR UN OBJETO ------------------------- */

// lista1.map(
//   function (elemento) {
//     if (lista1Count[elemento]){
//       lista1Count[elemento] += 1;
//     } else {
//       lista1Count[elemento] = 1;
//     };
//   }
// );

// /* ------------------- CONVERTIR EL OBJETO EN UN ARRAY -------------------- */
// const lista1Array = Object.entries(lista1Count).sort(
//   function (valorAcumulado, nuevoValor) {
//     return valorAcumulado[1] - nuevoValor[1]
//   }
// )

// const moda = lista1Array[lista1Array.length - 1]

/* ----------------FUNCION PARA CALCULAR MODA */
function calcularModa (lista){
  const lista1Count = {}
  lista.map(
    function (elemento) {
      if (lista1Count[elemento]){
        lista1Count[elemento] += 1;
      } else {
        lista1Count[elemento] = 1;
      };
    }
  )
  const lista1Array = Object.entries(lista1Count).sort(
    function (valorAcumulado, nuevoValor) {
      return valorAcumulado[1] - nuevoValor[1]
      }
  )
  const moda = lista1Array[lista1Array.length - 1]
  return moda
}




