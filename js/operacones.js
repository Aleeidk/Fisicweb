
        function calcularPresion() {
            const calculo = document.getElementById('calculo').value;
            let resultado;

            if (calculo === 'presion') {
                const fuerza = parseFloat(document.getElementById('fuerza').value);
                const area = parseFloat(document.getElementById('area').value);
                if (!isNaN(fuerza) && !isNaN(area)) {
                    resultado = fuerza / area;
                    document.getElementById('resultado').textContent = `La presión es: ${resultado} Pa`;
                } else {
                    alert('Ingresa valores válidos para la fuerza y el área.');
                }
            } else if (calculo === 'fuerza') {
                const presion = parseFloat(document.getElementById('presion').value);
                const area = parseFloat(document.getElementById('area').value);
                if (!isNaN(presion) && !isNaN(area)) {
                    resultado = presion * area;
                    document.getElementById('resultado').textContent = `La fuerza es: ${resultado} N`;
                } else {
                    alert('Ingresa valores válidos para la presión y el área.');
                }
            } else if (calculo === 'area') {
                const presion = parseFloat(document.getElementById('presion').value);
                const fuerza = parseFloat(document.getElementById('fuerza').value);
                if (!isNaN(presion) && !isNaN(fuerza)) {
                    resultado = fuerza / presion;
                    document.getElementById('resultado').textContent = `El área es: ${resultado} m²`;
                } else {
                    alert('Ingresa valores válidos para la presión y la fuerza.');
                }
            }
        }

        function limpiarValores() {
            document.getElementById('presion').value = '';
            document.getElementById('fuerza').value = '';
            document.getElementById('area').value = '';
            document.getElementById('resultado').textContent = '';
        }

        document.getElementById('calculo').addEventListener('change', function () {
            const calculo = this.value;
            const calculoPresion = document.getElementById('presion');
            const calculoFuerza = document.getElementById('fuerza');
            const calculoArea = document.getElementById('area');

            if (calculo === 'presion') {
                calculoPresion.disabled = true;
                calculoFuerza.disabled = false;
                calculoArea.disabled = false;
            } else if (calculo === 'fuerza') {
                calculoPresion.disabled = false;
                calculoFuerza.disabled = true;
                calculoArea.disabled = false;
            } else if (calculo === 'area') {
                calculoPresion.disabled = false;
                calculoFuerza.disabled = false;
                calculoArea.disabled = true;
            }
        });
        function cambiarExplicacion() {
            var calculo = document.getElementById('calculo').value;
            var explicacion = document.getElementById('explicacion');

            if (calculo === 'presion') {
                explicacion.value = "Aquí va la explicación de cómo calcular la presión.<p>entonces esto cambi";
            } else if (calculo === 'fuerza') {
                explicacion.value = "Aquí va la explicación de cómo calcular la fuerza.";
            } else if (calculo === 'area') {
                explicacion.value = "Aquí va la explicación de cómo calcular el área.";
            }
        }
    
    