document.addEventListener('DOMContentLoaded', () => {
    const languageSwitcher = document.getElementById('language-switcher');
    const elements = document.querySelectorAll('[data-en]');

    // Function to update text based on selected language
    function updateLanguage(lang) {
        elements.forEach(element => {
            element.textContent = element.getAttribute(`data-${lang}`);
        });
        animateStats(); // Re-animate stats on language change
    }

    // Set initial language to English
    updateLanguage('en');

    // Listen for language change
    languageSwitcher.addEventListener('change', (e) => {
        const selectedLang = e.target.value;
        updateLanguage(selectedLang);
        updateCountdown(selectedLang);
        updateSimulatorResult(selectedLang);
    });

    // Countdown timer (60 days from April 03, 2025)
    const endDate = new Date('June 02, 2025 00:00:00').getTime();
    function updateCountdown(lang) {
        const now = new Date().getTime();
        const distance = endDate - now;
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const countdown = document.getElementById('countdown');
        countdown.textContent = `${lang === 'en' ? 'Join Before: ' : 'Rejoignez Avant : '}${days}d ${hours}h ${minutes}m`;
    }
    setInterval(() => updateCountdown(languageSwitcher.value), 60000); // Update every minute
    updateCountdown('en');

    // Currency toggle
    window.toggleCurrency = function(currency) {
        const usdElements = document.querySelectorAll('.usd');
        const dzdElements = document.querySelectorAll('.dzd');
        const buttons = document.querySelectorAll('.currency-btn');
        buttons.forEach(btn => btn.classList.remove('active'));
        document.querySelector(`[onclick="toggleCurrency('${currency}')"]`).classList.add('active');
        if (currency === 'USD') {
            usdElements.forEach(el => el.classList.remove('hidden'));
            dzdElements.forEach(el => el.classList.add('hidden'));
        } else {
            usdElements.forEach(el => el.classList.add('hidden'));
            dzdElements.forEach(el => el.classList.remove('hidden'));
        }
        animateStats(); // Re-animate stats on currency change
    };

    // Animate stats
    function animateStats() {
        const statElements = document.querySelectorAll('.stat-card p[data-value]');
        statElements.forEach(el => {
            const target = parseFloat(el.getAttribute('data-value'));
            let current = 0;
            const increment = target / 50; // 50 steps for smooth animation
            const duration = 1500; // 1.5 seconds
            const stepTime = duration / 50;
            el.style.animation = 'none'; // Reset animation
            void el.offsetWidth; // Trigger reflow
            el.style.animation = `countUp 0.8s ease forwards`;

            const updateCount = () => {
                current += increment;
                if (current >= target) {
                    current = target;
                    clearInterval(timer);
                }
                el.textContent = el.classList.contains('usd') || el.classList.contains('dzd') ?
                    (el.classList.contains('usd') ? `$${current.toFixed(2)}` : `${current.toFixed(2)} DZD`) :
                    `${current.toFixed(1)}%`;
            };
            const timer = setInterval(updateCount, stepTime);
            updateCount();
        });
    }
    animateStats(); // Initial animation on load
});

// Growth simulator function
function simulateGrowth() {
    const investment = parseFloat(document.getElementById('investment').value) || 0;
    const rate = parseFloat(document.getElementById('rate').value) || 0;
    const years = parseInt(document.getElementById('years').value) || 0;
    const futureValueUSD = investment * Math.pow(1 + rate / 100, years);
    const futureValueDZD = futureValueUSD * 135; // 1 USD = 135 DZD
    const result = document.getElementById('result');
    const lang = document.getElementById('language-switcher').value;
    const currency = document.querySelector('.currency-btn.active').textContent;
    result.textContent = currency === 'USD' ?
        (lang === 'en' ? `Projected Value: $${futureValueUSD.toFixed(2)}` : `Valeur Projetée : ${futureValueUSD.toFixed(2)} $`) :
        (lang === 'en' ? `Projected Value: ${futureValueDZD.toFixed(2)} DZD` : `Valeur Projetée : ${futureValueDZD.toFixed(2)} DZD`);
}

function updateSimulatorResult(lang) {
    const result = document.getElementById('result');
    const currentText = result.textContent;
    if (currentText.includes('$') || currentText.includes('DZD')) {
        result.textContent = lang === 'en' ? currentText.replace('Valeur Projetée', 'Projected Value') : currentText.replace('Projected Value', 'Valeur Projetée');
    }
}
