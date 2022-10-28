function creazioneQaudrato() {
    const div = document.createElement("div");
    div.classList.add("quadrato");
    return div;
}

function play() {
    const griglia = document.getElementById("areaDiGioco");

    for (let i = 0; i < 100; i++) {
        // Creazione del quadrato
        let activeElement = creazioneQaudrato();

        // Rendo il quadrato cliccabile aggiungendogli la classe
        activeElement.addEventListener('click', function () {
            this.classList.toggle('quadratoSelezionato');
        })

        griglia.append(activeElement);

    }

}