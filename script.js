function elaboraColoreRGB(inputColore) {
    let pulito = inputColore.trim().toLowerCase();
    if (pulito.startsWith("rgb(") && pulito.endsWith(")")) {
        pulito = pulito.slice(4, -1);
    }
    const parti = pulito.split(",");
    if (parti.length !== 3) {
        throw new Error("Inserisci 3 valori (es. 255, 100, 50)");
    }

    const valoriNumerici = [];

    for (let i = 0; i < parti.length; i++) {
        const val = parti[i].trim();
        if (val === "" || isNaN(val) || !Number.isInteger(Number(val))) {
            throw new Error("Ogni componente RGB deve essere un numero intero");
        }
        const num = Number(val);

        if (num < 0 || num > 255) {
            throw new Error("I valori RGB devono essere compresi tra 0 e 255");
        }

        valoriNumerici.push(num);
    }

    return `rgb(${valoriNumerici[0]}, ${valoriNumerici[1]}, ${valoriNumerici[2]})`;
}

function gestisciClick() {
    const inputColore = document.getElementById("coloreRGB").value;
    const inputTesto = document.getElementById("testoUtente").value;
    const paragrafoOut = document.getElementById("out");
    const paragrafoError = document.getElementById("error");
    paragrafoOut.textContent = "";
    paragrafoError.textContent = "";

    console.log("Tentativo di elaborazione -> Colore:", inputColore, "| Testo:", inputTesto);

    try {
        if (inputTesto.trim() === "") {
            throw new Error("Inserisci un testo");
        }

        const coloreValido = elaboraColoreRGB(inputColore);

        paragrafoOut.textContent = inputTesto;
        paragrafoOut.style.color = coloreValido;
        
        console.log("Successo! Colore applicato:", coloreValido);

    } catch (errore) {
        paragrafoError.textContent = "Errore: " + errore.message;
        console.error("Errore di validazione:", errore.message);
    }
}
