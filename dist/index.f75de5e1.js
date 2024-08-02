document.addEventListener("DOMContentLoaded", ()=>{
    function updateCountdown() {
        const countdownElement = document.getElementById("countdown");
        const targetDate = new Date("2024-08-26T00:00:00");
        const now = new Date();
        const timeDifference = targetDate - now;
        if (timeDifference <= 0) {
            countdownElement.textContent = "A festa j\xe1 come\xe7ou!";
            return;
        }
        const days = Math.floor(timeDifference / 86400000);
        const hours = Math.floor(timeDifference % 86400000 / 3600000);
        const minutes = Math.floor(timeDifference % 3600000 / 60000);
        const seconds = Math.floor(timeDifference % 60000 / 1000);
        countdownElement.textContent = `A minha festa de anivers\xe1rio come\xe7a em ${days}d ${hours}h ${minutes}m ${seconds}s`;
    }
    updateCountdown(); // Atualiza o contador imediatamente
    setInterval(updateCountdown, 1000); // Atualiza o contador a cada segundo
});

//# sourceMappingURL=index.f75de5e1.js.map
