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
    });
});

// Calculator function
function calculateReturns() {
    const investment = parseFloat(document.getElementById('investment').value) || 0;
    const rate = parseFloat(document.getElementById('rate').value) || 0;
    const earnings = (investment * rate) / 100;
    const result = document.getElementById('result');
    const lang = document.getElementById('language-switcher').value;
    result.textContent = lang === 'en' ? `Estimated Earnings: $${earnings.toFixed(2)}` : `Gains Estimés : ${earnings.toFixed(2)} $`;
}
