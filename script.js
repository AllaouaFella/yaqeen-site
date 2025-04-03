document.addEventListener('DOMContentLoaded', () => {
    const languageSwitcher = document.getElementById('language-switcher');
    const elements = document.querySelectorAll('[data-en]');

    // Function to update text based on selected language
    function updateLanguage(lang) {
        elements.forEach(element => {
            element.textContent = element.getAttribute(`data-${lang}`);
        });
    }

    // Set initial language to English
    updateLanguage('en');

    // Listen for language change
    languageSwitcher.addEventListener('change', (e) => {
        const selectedLang = e.target.value;
        updateLanguage(selectedLang);
        updateCountdown(selectedLang);
        updateCalculatorResult(selectedLang);
    });

    // Countdown timer (e.g., 30 days from April 03, 2025)
    const endDate = new Date('May 03, 2025 00:00:00').getTime();
    function updateCountdown(lang) {
        const now = new Date().getTime();
        const distance = endDate - now;
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const countdown = document.getElementById('countdown');
        countdown.textContent = `${lang === 'en' ? 'Time to Act: ' : 'Temps d’agir : '}${days}d ${hours}h ${minutes}m`;
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
    };
});

// Calculator function
function calculateReturns() {
    const investment = parseFloat(document.getElementById('investment').value) || 0;
    const rate = parseFloat(document.getElementById('rate').value) || 0;
    const earningsUSD = (investment * rate) / 100;
    const earningsDZD = earningsUSD * 135; // Assuming 1 USD = 135 DZD
    const result = document.getElementById('result');
    const lang = document.getElementById('language-switcher').value;
    const currency = document.querySelector('.currency-btn.active').textContent;
    result.textContent = currency === 'USD' ?
        (lang === 'en' ? `Estimated Earnings: $${earningsUSD.toFixed(2)}` : `Gains Estimés : ${earningsUSD.toFixed(2)} $`) :
        (lang === 'en' ? `Estimated Earnings: ${earningsDZD.toFixed(2)} DZD` : `Gains Estimés : ${earningsDZD.toFixed(2)} DZD`);
}

function updateCalculatorResult(lang) {
    const result = document.getElementById('result');
    const currentText = result.textContent;
    if (currentText.includes('$')) {
        result.textContent = lang === 'en' ? currentText.replace('Gains Estimés', 'Estimated Earnings') : currentText.replace('Estimated Earnings', 'Gains Estimés');
    }
}
