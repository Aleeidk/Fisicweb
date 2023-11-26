    // Obtener los elementos del formulario
    var vi = document.getElementById("vi");
    var vf = document.getElementById("vf");
    var a = document.getElementById("a");
    var t = document.getElementById("t");
    var d = document.getElementById("d");
    var opcion = document.getElementById("opcion");
    var calcular = document.getElementById("calcular");
    var resultado = document.getElementById("resultado");

    // Definir la función que calcula la velocidad
    function calcularVelocidad() {
      // Obtener los valores de los inputs
      var vi_value = parseFloat(vi.value);
      var vf_value = parseFloat(vf.value);
      var a_value = parseFloat(a.value);
      var t_value = parseFloat(t.value);
      var d_value = parseFloat(d.value);
      var opcion_value = opcion.value;

      // Verificar que los valores sean válidos
      if (isNaN(vi_value) || isNaN(vf_value) || isNaN(a_value) || isNaN(t_value) || isNaN(d_value)) {
        // Mostrar un mensaje de error
        resultado.textContent = "Por favor, introduce los valores que conozcas";
        resultado.style.color = "red";
      } else {
        // Calcular la velocidad usando las fórmulas adecuadas
        var x; // Variable para el valor buscado
        var formula; // Variable para la fórmula usada
        switch (opcion_value) {
          case "vf":
            // Usar la fórmula de velocidad final
            x = vi_value + a_value * t_value;
            formula = "v_f = v_i + at";
            break;
          case "vi":
            // Usar la fórmula de velocidad inicial
            x = vf_value - a_value * t_value;
            formula = "v_i = v_f - at";
            break;
          case "a":
            // Usar la fórmula de aceleración
            x = (vf_value - vi_value) / t_value;
            formula = "a = (v_f - v_i) / t";
            break;
          case "t":
            // Usar la fórmula de tiempo
            x = (vf_value - vi_value) / a_value;
            formula = "t = (v_f - v_i) / a";
            break;
          case "d":
            // Usar la fórmula de distancia
            x = (vi_value + vf_value) / 2 * t_value;
            formula = "d = (v_i + v_f) / 2 * t";
            break;
        }

        // Mostrar el resultado con dos decimales
        resultado.textContent = "El valor de " + opcion_value + " es " + x.toFixed(2) + " m/s. Se ha usado la fórmula: " + formula;
        resultado.style.color = "green";
      }
    }

    // Asignar la función al evento click del botón
    calcular.addEventListener("click", calcularVelocidad);