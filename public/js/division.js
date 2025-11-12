// division.js - Script para realizar operaciones de división por Isaac Mera
document.addEventListener('DOMContentLoaded', function() {
    const btnDividir = document.getElementById('btnDividir');
    
    if (btnDividir) {
        btnDividir.addEventListener('click', function() {
            // Obtener los valores de los inputs
            const num1 = parseFloat(document.getElementById('num1').value);
            const num2 = parseFloat(document.getElementById('num2').value);
            const resultadoInput = document.getElementById('Resultado');
            
            // Validar que ambos campos tengan valores
            if (isNaN(num1) || isNaN(num2)) {
                resultadoInput.value = "Error: Ingresa ambos números";
                return;
            }
            
            // Validar división por cero
            if (num2 === 0) {
                resultadoInput.value = "Error: No se puede dividir por cero";
                return;
            }
            
            // Realizar la división
            const resultado = num1 / num2;
            
            // Mostrar el resultado
            resultadoInput.value = resultado;
        });
    }
});