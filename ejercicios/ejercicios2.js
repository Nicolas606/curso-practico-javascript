const coupons = [
    "JuanDC_es_Batman",
    "pero_no_le_digas_a_nadie",
    "es_un_secreto",
];

function calcularPrecioConDescuento(precio, descuento){
  const porcentajePrecioConDescuento = 100 - descuento;
  const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
  return precioConDescuento
}

function PriceDiscount(){
  const inputPrice = document.getElementById("InputPrice");
  const priceValue = inputPrice.value;

  const inputCupon = document.getElementById("InputCupon");
  const cuponValue = inputCupon.value;

  let descuento = 0;

  switch(cuponValue){
    case coupons[0]:
      descuento = 15;
    break;
    case coupons[1]:
      descuento = 30;
    break;
    case coupons[2]:
      descuento = 25;
    break;
  }



  const price = calcularPrecioConDescuento(priceValue, descuento);
  const resultP = document.getElementById("parrafoPrecio");

  resultP.innerHTML = "El precio de su producto con descuento es de $ " + price ;
}
