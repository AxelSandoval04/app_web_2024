function operaciones() {
    let n1 = parseInt(document.getElementById("n1").value);
    let n2 = parseInt(document.getElementById("n2").value);
    let tipo = document.getElementById("tipo").value;
    let resul;
    let respuesta = document.getElementById("resultado");

    // Verificar si los inputs son números válidos
    if (!isNumber(n1) || !isNumber(n2)) {
        respuesta.innerHTML = `<h2>Ingresa solo números por favor</h2>`;
        alert("Ingresa solo números por favor");
        return;
    }

    // Realizar la operación seleccionada
    switch (tipo) {
        case "suma":
            resul = n1 + n2;
            break;
        case "resta":
            resul = n1 - n2;
            break;
        case "division":
            resul = n1 / n2;
            break;
        case "multiplicacion":
            resul = n1 * n2;
            break;
    }

    // Mostrar el resultado en el HTML
    respuesta.innerHTML = `<h3>Resultado: ${n1} ${obtenerSimbolo(tipo)} ${n2} = ${resul}</h3>`;
}

// Función para verificar si un valor es un número
function isNumber(n) {
    return !isNaN(parseInt(n)) && isFinite(n);
}

// Función para obtener el símbolo de la operación
function obtenerSimbolo(tipo) {
    switch (tipo) {
        case "suma":
            return "+";
        case "resta":
            return "-";
        case "division":
            return "/";
        case "multiplicacion":
            return "*";
    }
}
