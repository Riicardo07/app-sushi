// --- MODELO (Los datos) ---
const model = {
    sushi: 0,
    others: 0,
    getTotal() {
        return this.sushi + this.others;
    }
};

const controller = {
    increment(type) {
        if (type === 'sushi') model.sushi++;
        else model.others++;
        view.updateDisplay();
    },

    finishGame() {
        view.showModal(model.sushi, model.others, model.getTotal());
    },

    compare() {
        const rivalScore = parseInt(document.getElementById('rival-score').value);
        const myScore = model.getTotal();
        
        if (isNaN(rivalScore)) {
            alert("Por favor, introduce un número ");
            return;
        }
        
        if (rivalScore < 0) {
        alert("No puedes haber comido piezas negativas, ¡eso es imposible!");
        rivalInput.value = ""; // Limpiamos el input para que lo intente de nuevo
        return;
    }

        let message = "";
        if (myScore > rivalScore) message = "¡Ganaste!";
        else if (myScore < rivalScore) message = " Perdiste... Te gané";
        else message = "¡Empate!";

        view.showWinner(message);
    }
};

// --- VISTA (Actualización del DOM) ---
const view = {
    updateDisplay() {
        document.getElementById('count-sushi').innerText = model.sushi;
        document.getElementById('count-others').innerText = model.others;
    },

    showModal(sushi, others, total) {
        document.getElementById('modal').style.display = 'flex';
        document.getElementById('result-summary').innerHTML = `
            <p>Piezas de Sushi: <strong>${sushi}</strong></p>
            <p>Otras piezas: <strong>${others}</strong></p>
            <p>Tu total: <strong>${total}</strong></p>
        `;
    },

    showWinner(msg) {
        document.getElementById('winner-message').innerText = msg;
    }
};