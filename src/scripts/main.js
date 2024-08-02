document.addEventListener('DOMContentLoaded', () => {
    function updateCountdown() {
        const countdownElement = document.getElementById('countdown');
        const targetDate = new Date('2024-08-26T00:00:00');
        const now = new Date();
        const timeDifference = targetDate - now;

        if (timeDifference <= 0) {
            countdownElement.textContent = "A festa já começou!";
            return;
        }

        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        countdownElement.textContent = `A minha festa de aniversário começa em ${days}d ${hours}h ${minutes}m ${seconds}s`;
    }

    updateCountdown(); // Atualiza o contador imediatamente
    setInterval(updateCountdown, 1000); // Atualiza o contador a cada segundo
});
