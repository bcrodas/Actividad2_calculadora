// resta.js - Script para realizar operaciones de resta
document.addEventListener('DOMContentLoaded', function() {
    const btnRestar = document.getElementById('btnRestar');
    
    btnRestar.addEventListener('click', function() {
        // Obtener los valores de los inputs
        const num1 = parseFloat(document.getElementById('num1').value);
        const num2 = parseFloat(document.getElementById('num2').value);
        const resultadoInput = document.getElementById('Resultado');
        
        // Validar que ambos campos tengan valores
        if (isNaN(num1) || isNaN(num2)) {
            resultadoInput.value = "Error: Ingresa ambos números";
            return;
        }
        
        // Realizar la resta
        const resultado = num1 - num2;
        
        // Mostrar el resultado
        resultadoInput.value = resultado;
    });
});