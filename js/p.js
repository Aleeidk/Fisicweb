var fuerza = document.getElementById("fuerza");
    var area = document.getElementById("area");
    var calcular = document.getElementById("calcular");
    var resultado = document.getElementById("resultado");

    // Definir la función que calcula la presión
    function calcularPresion() {
      // Obtener los valores de los inputs
      var f = parseFloat(fuerza.value);
      var a = parseFloat(area.value);
      
        // Calcular la presión usando la fórmula $$P = \frac{F}{A}$$
        var p = f / a;

        // Mostrar el resultado con dos decimales
        resultado.textContent = "La presión es " + p.toFixed(2) + " pascal";
        resultado.style.color = "green";
      
    }

    // Asignar la función al evento click del botón
    calcular.addEventListener("click", calcularPresion);