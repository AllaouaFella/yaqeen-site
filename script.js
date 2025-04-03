document.addEventListener('DOMContentLoaded', () => {
    const languageSwitcher = document.getElementById('language-switcher');
    const elements = document.querySelectorAll('[data-en]');

    // Function to update text based on selected language
    function updateLanguage(lang) {
        elements.forEach(element => {
            element.textContent = element.getAttribute(`data-${lang}`);
        });
        updateCurrencyDisplay(lang);
    }

    // Set initial language to English
    updateLanguage('en');

    // Listen for language change
    languageSwitcher.addEventListener('change', (e) => {
        const selectedLang = e.target.value;
        updateLanguage(selectedLang);
    });

    // Currency display toggle
    function updateCurrencyDisplay(lang) {
        const currencyValues = document.querySelectorAll('.currency-value');
        const isUSD = !document.querySelector('.dashboard').classList.contains('dzd');
        currencyValues.forEach(el => {
            const usdValue = el.getAttribute('data-usd');
            const dzdValue = el.getAttribute('data-dzd');
            el.textContent = isUSD ? `$${usdValue}` : `${dzdValue} DZD`;
        });
    }

    // Risk assessment
    const investmentType = document.getElementById('investment-type');
    const riskResult = document.getElementById('risk-result');
    const riskLevels = {
        manufacturing: { en: 'Moderate Risk - High Growth Potential', fr: 'Risque Modéré - Potentiel de Croissance Élevé' },
        'real-estate': { en: 'Low Risk - Stable Returns', fr: 'Faible Risque - Rendements Stables' },
        agriculture: { en: 'Moderate Risk - Sustainable Gains', fr: 'Risque Modéré - Gains Durables' },
        health: { en: 'High Risk - High Reward', fr: 'Risque Élevé - Forte Récompense' }
    };

    investmentType.addEventListener('change', (e) => {
        const selected = e.target.value;
        const lang = languageSwitcher.value;
        riskResult.textContent = riskLevels[selected][lang];
    });
});

// Growth calculator
function calculateGrowth() {
    const investment = parseFloat(document.getElementById('investment').value) || 0;
    const rate = parseFloat(document.getElementById('rate').value) || 0;
    const growthUSD = investment * (rate / 100);
    const growthDZD = growthUSD * 135; // 1 USD = 135 DZD
    const result = document.getElementById('growth-result');
    const lang = document.getElementById('language-switcher').value;
    const isUSD = !document.querySelector('.dashboard').classList.contains('dzd');
    result.textContent = isUSD ?
        (lang === 'en' ? `Projected Growth: $${growthUSD.toFixed(2)}` : `Croissance Projetée : ${growthUSD.toFixed(2)} $`) :
        (lang === 'en' ? `Projected Growth: ${growthDZD.toFixed(2)} DZD` : `Croissance Projetée : ${growthDZD.toFixed(2)} DZD`);
}
