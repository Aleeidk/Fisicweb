function calcularEntalpia() {
    // Obtener los valores de energía interna, presión y volumen
    var energiaInterna = parseFloat(document.getElementById('energia_interna').value);
    var presion = parseFloat(document.getElementById('presion').value);
    var volumen = parseFloat(document.getElementById('volumen').value);

    // Verificar si los valores son válidos
    if (isNaN(energiaInterna) || isNaN(presion) || isNaN(volumen)) {
        alert('Por favor, ingrese valores válidos para la energía interna, la presión y el volumen.');
        return;
    }

    // Calcular la entalpía usando la fórmula H = U + PV
    var entalpia = energiaInterna + (presion * volumen);

    // Mostrar el resultado
    document.getElementById('resultado').innerText = 'La entalpía es: ' + entalpia + ' J';
}