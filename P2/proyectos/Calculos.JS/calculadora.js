function operaciones() {
    let n1 = parseInt(document.getElementById("n1").value);
    let n2 = parseInt(document.getElementById("n2").value);
    let tipo = document.getElementById("tipo").value;
    let resul;

    function isNumber(n) {
        return !isNaN(parseInt(n)) && isFinite(n);
    }

    if (isNumber(n1) && isNumber(n2)) {
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
        let respuesta = document.getElementById("resultado");
        respuesta.innerHTML = `<h3>Resultado: ${n1} ${obtenerSimbolo(tipo)} ${n2} = ${resul}</h3>`;
    } else {
        alert("Ingresa solo números por favor");
    }
}

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
