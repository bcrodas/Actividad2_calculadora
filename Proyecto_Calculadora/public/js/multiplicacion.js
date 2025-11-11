// capturar valores de caja de texto
let num1_mult = document.getElementById("num1");
let num2_mult = document.getElementById("num2");

let btn_Multiplicar = document.getElementById("btnMultiplicar");

let resultado_mult = document.getElementById("Resultado");

let total_multiplicacion = 0;

// Aplicar la operacion en el boton 
btn_Multiplicar.addEventListener("click", function(evt) {
    total_multiplicacion = parseFloat(num1_mult.value) * parseFloat(num2_mult.value);
    resultado_mult.value = total_multiplicacion;
});