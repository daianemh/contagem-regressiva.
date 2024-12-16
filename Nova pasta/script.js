let countdown;

function startCountdown() {
    const timeInput = document.getElementById("timeInput").value;
    let seconds = parseInt(timeInput);

    if (isNaN(seconds) || seconds <= 0) {
        alert("Por favor, insira um número válido de segundos.");
        return;
    }

    // Atualizar o visor da contagem regressiva
    function updateCountdownDisplay() {
        let hours = Math.floor(seconds / 3600);
        let minutes = Math.floor((seconds % 3600) / 60);
        let remainingSeconds = seconds % 60;

        // Formatar como 00:00:00
        document.getElementById("countdown").textContent = 
            `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
    }

    // Parar a contagem regressiva
    if (countdown) clearInterval(countdown);

    // Atualizar a contagem regressiva a cada segundo
    countdown = setInterval(() => {
        if (seconds <= 0) {
            clearInterval(countdown);
            alert("Tempo esgotado!");
        } else {
            seconds--;
            updateCountdownDisplay();
        }
    }, 1000);

    updateCountdownDisplay();
}
