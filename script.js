function elabora() {
    let colore = document.getElementById("inNumber").value;
    let testo = document.getElementById("inText").value;
    let out = document.getElementById("outText");
    let err = document.getElementById("error");
    if (testo.trim() === "") {
        err.textContent = "Inserisci un testo";
        return;
    }
    let parti = colore.split(",");
    if (parti.length !== 3) {
        err.textContent = "Inserisci 3 numeri (es. 255, 0, 0)";
        return;
    }
    let r = Number(parti[0]);
    let g = Number(parti[1]);
    let b = Number(parti[2]);
    if (isNaN(r) || isNaN(g) || isNaN(b) || r < 0 || r > 255 || g < 0 || g > 255 || b < 0 || b > 255) {
        err.textContent = "I valori devono essere numeri tra 0 e 255";
        return;
    }
    out.textContent = testo;
    out.style.color = "rgb(" + r + "," + g + "," + b + ")";
}
function reset() {
    document.getElementById("inNumber").value = "";
    document.getElementById("inText").value = "";
    document.getElementById("outText").textContent = "Output";
    document.getElementById("outText").style.color = "";
    document.getElementById("error").textContent = "Errori";
}
