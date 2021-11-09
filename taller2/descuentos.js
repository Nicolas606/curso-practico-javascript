// const precioOriginal = 120;
// const descuento = 18;

function calcularPrecioConDescuento(precio, descuento){
  const porcentajePrecioConDescuento = 100 - descuento;
  const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
  return precioConDescuento
}


function PriceDiscount(){
  const inputPrice = document.getElementById("InputPrice");
  const priceValue = inputPrice.value;

  const inputDiscount = document.getElementById("InputDiscount");
  const priceDiscount = inputDiscount.value;

  const price = calcularPrecioConDescuento(priceValue, priceDiscount);
  const resultP = document.getElementById("parrafoPrecio");

  resultP.innerHTML = "El precio de su producto es de $ " + price ;
}










// console.log({
//   precioOriginal,
//   descuento,
//   porcentajePrecioConDescuento,
//   precioConDescuento,
// })


