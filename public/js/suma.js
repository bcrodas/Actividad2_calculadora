// capturar valores de caja de texto
let num_uno = document.getElementById("num1");
let num_dos = document.getElementById("num2");

let btn_Sumar = document.getElementById("btnSumar");

let resultado = document.getElementById("Resultado");

let total_suma = 0;

// Aplicar la operacion en el boton 
btn_Sumar.addEventListener("click", function(evt) {
    total_suma = parseFloat(num_uno.value) + parseFloat(num_dos.value);
    resultado.value = total_suma;
});


