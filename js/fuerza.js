

function calcularFuerza() {
    var q1 = parseFloat(document.getElementById("q1").value);
    var q2 = parseFloat(document.getElementById("q2").value);
    var r = parseFloat(document.getElementById("d").value);

    var k = 9000000000;  // Constante de Coulomb en N m^2/C^2
    var force = (k * (q1 * q2)) / (r * r);

    document.getElementById("resultado").innerHTML = "La fuerza electrica es de " + force.toFixed(2) + " Newtons.";
}



