function ObtenerId(id) {
    return document.getElementById(id);
}

function Presionaboton(p) {
    var resp = ObtenerId("resp");
    if (resp.value == '1620080129') {
        resp.value = p;
    } else {
        resp.value += p;
    }

}

function Respuesta() {
    var resp = ObtenerId("resp");
    resp.value = eval(resp.value);
}
function ImprimirCodigo(c) {
    ObtenerId("resp").value = c;
}