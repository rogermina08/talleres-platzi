function PerimetroCuadrado(valor){
var total = valor*4;
return total;
}
function areaCuadrado(valor){
    var total = valor*valor;
    return total;
    }


function CalcularPerimetroCuadrado() {
const input = document.getElementById("InputCuadrado");
const value = input.value;
const perimetro = PerimetroCuadrado(value);
alert (perimetro);
}

function CalcularAreaCuadrado() {
const input = document.getElementById("InputCuadrado");    const value = input.value;
const Area = areaCuadrado(value);
alert (Area);
}
