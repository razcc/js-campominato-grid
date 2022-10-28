

function creazioneQaudrato(x) {
    const div = document.createElement("div");
    div.classList.add("quadrato");
    div.innerText = x;
    return div;
}

let difficolta;



function play() {

    difficolta = document.getElementById("dificultSelection").value;
    console.log(difficolta)
    const griglia = document.getElementById("areaDiGioco");

    if (difficolta == "easy") {
        for (let i = 0; i < 100; i++) {

            // Creazione del quadrato
            let activeElement = creazioneQaudrato(i + 1);

            // Rendo il quadrato cliccabile aggiungendogli la classe
            activeElement.addEventListener('click', function () {
                this.classList.toggle('quadratoSelezionato');
                let numeroCliccato = this.innerText;
                console.log(numeroCliccato);

            })


            griglia.append(activeElement);
        }

    }
    else if (difficolta == "normal") {

        for (let i = 0; i < 81; i++) {

            // Creazione del quadrato
            let activeElement = creazioneQaudrato(i + 1);
            activeElement.classList.remove("quadrato");
            activeElement.classList.add("quadratoLevelNormal");

            // Rendo il quadrato cliccabile aggiungendogli la classe
            activeElement.addEventListener('click', function () {

                this.classList.toggle('quadratoSelezionato');

                let numeroCliccato = this.innerText;
                console.log(numeroCliccato);

            })


            griglia.append(activeElement);
        }
    }
    else {

        for (let i = 0; i < 49; i++) {

            // Creazione del quadrato
            let activeElement = creazioneQaudrato(i + 1);
            activeElement.classList.remove("quadrato");
            activeElement.classList.add("quadratoLevelHard");

            // Rendo il quadrato cliccabile aggiungendogli la classe
            activeElement.addEventListener('click', function () {

                this.classList.toggle('quadratoSelezionato');

                let numeroCliccato = this.innerText;
                console.log(numeroCliccato);

            })


            griglia.append(activeElement);
        }
    }



}
