
document.addEventListener("DOMContentLoaded", function () {

    const btnLimpiar = document.getElementById("btnLimpiar");

    btnLimpiar.addEventListener("click", function() {
        document.getElementById("num1").value = "";
        document.getElementById("num2").value = "";
        document.getElementById("Resultado").value = "";
    });

});