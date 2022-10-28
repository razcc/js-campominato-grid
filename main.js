let controllo = false;

function creazioneQaudrato(x) {
    const div = document.createElement("div");
    div.classList.add("quadrato");
    div.innerText = x;
    return div;
}

function play() {
    controllo = true;
    const griglia = document.getElementById("areaDiGioco");

    for (let i = 0; i < 100; i++) {

        // Creazione del quadrato
        let activeElement = creazioneQaudrato(i+1);

        // Rendo il quadrato cliccabile aggiungendogli la classe
        activeElement.addEventListener('click', function () {
            this.classList.toggle('quadratoSelezionato');
        })

        griglia.append(activeElement);

    }

}
