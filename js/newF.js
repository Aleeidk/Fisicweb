function calcularFuerza() {
    // Obtener los valores de masa y aceleración
    var masa = parseFloat(document.getElementById('masa').value);
    var aceleracion = parseFloat(document.getElementById('aceleracion').value);

    // Verificar si los valores son válidos
    if (isNaN(masa) || isNaN(aceleracion)) {
        alert('Por favor, ingrese valores válidos para la masa y la aceleración.');
        return;
    }

    // Calcular la fuerza usando la fórmula F = m * a
    var fuerza = masa * aceleracion;

    // Mostrar el resultado
    document.getElementById('resultado').innerText = 'La fuerza es: ' + fuerza + ' N';
}
