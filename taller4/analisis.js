/* ----------------FUNCIONES HELPERS-------------------- */

function esPar(numero) {
  return (numero % 2 === 0);
}

function calcularMediaAritmetica(lista){
  let sumaLista = 0;

  for (let i = 0;i < lista.length; i++ ) {
    sumaLista = sumaLista + lista[i];
  }
  return sumaLista / lista.length;
}

/* ----------------//FUNCIONES HELPERS-------------------- */


/* ---------------------- CALCULADORA DE MEDIANAS----------------- */

function medinaSalarios(lista) {
  const mitad = parseInt(lista.length / 2);

  if (esPar(lista.length)){
    const persona1 = lista[mitad - 1]
    const persona2 = lista[mitad]
    const mediana = calcularMediaAritmetica([persona1, persona2])
    return mediana
  } else {
    const mediana = lista[mitad];
    return mediana;
  }

}

/* ---------------------- //CALCULADORA DE MEDIANAS ----------------*/


/* ------------------ MEDIDAS GENERALES_-------------------------- */

const salariosCol = colombia.map(
  function (persona) {
    return persona.salary;
  }
  )

  const salariosColSorted = salariosCol.sort(
    function (salaryA, salaryB) {
      return salaryA - salaryB;
    }
    )


/* ------------------ MEDIDAS GENERALES_-------------------------- */


const mediageneralCol = medinaSalarios(salariosColSorted);


/* ------------------ MEDIANA TOP 10 ORDENADOS */


const spliceStart= (salariosColSorted.length * (100 - 10) / 100);
const spliceCount= salariosColSorted.length - spliceStart;
/* splice()== recibe dos argumentos, el primero donde se coloca el cuchillo y el segundo la cantidad de tajadas que queremos  */
const salarioColTop10 = salariosColSorted.splice(
  spliceStart,
  spliceCount
  )

  const medianaTop10Col = medinaSalarios(salarioColTop10);

/* ------------------ MEDIANA TOP 10 ORDENADOS */

console.log({
  mediageneralCol,
  medianaTop10Col,
})
