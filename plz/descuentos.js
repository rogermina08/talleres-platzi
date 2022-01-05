
function calcularPrecioConDescuento (precio,descuento){
  const porcentajePrecioConDescuento = 100 - descuento;
  const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
  
  return precioConDescuento;
}

function onClickButtonPriceDiscount(){
    const inputPrice = document.getElementById("InputPrice");

    const PriceValue = inputPrice.value;

    const inputDiscount = document.getElementById("InputDiscount");
    
    const discountValue = inputDiscount.value;

    const precioConDescuento = calcularPrecioConDescuento(PriceValue,discountValue);

    const resultP = document.getElementById("ResultP");

    resultP.innerText = "El precio con descuento: $" + precioConDescuento; 

}
//console.log({
   // precioOriginal,
    //descuento,
    //porcentajePrecioConDescuento,
    //precioCondescuento,
//});