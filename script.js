
console.log("Benvenuto in Coding & Color!");

// Funzione per elaborare i dati
function elabora() {

    // Recupero i valori inseriti
    let numero = document.getElementById("inNumber").value;
    let testo = document.getElementById("inText").value;

    // Recupero gli elementi di output
    let output = document.getElementById("outText");
    let error = document.getElementById("error");

    // Cancello i messaggi precedenti
    error.textContent = "";
    output.textContent = "";

    // Controllo che i campi non siano vuoti
    if (numero.trim() === "" || testo.trim() === "") {
        error.textContent = "Errore: devi compilare tutti i campi!";
        return;
    }

    // Controllo il formato RGB
    let regex = /^\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*$/;

    let risultato = numero.match(regex);

    if (risultato === null) {
        error.textContent = "Errore: inserisci tre numeri RGB separati da virgole!";
        return;
    }

    // Recupero i tre colori
    let r = Number(risultato[1]);
    let g = Number(risultato[2]);
    let b = Number(risultato[3]);

    // Controllo che i valori siano compresi tra 0 e 255
    if (r > 255 || g > 255 || b > 255) {
        error.textContent = "Errore: i valori RGB devono essere tra 0 e 255!";
        return;
    }

    // Visualizzo il testo con il colore scelto
    output.textContent = testo;
    output.style.color = "rgb(" + r + "," + g + "," + b + ")";

    console.log("Testo visualizzato correttamente!");
}


// Funzione per cancellare i dati
function reset() {

    document.getElementById("inNumber").value = "";
    document.getElementById("inText").value = "";

    document.getElementById("outText").textContent = "Output";
    document.getElementById("outText").style.color = "black";

    document.getElementById("error").textContent = "";

    console.log("Campi cancellati!");
}
