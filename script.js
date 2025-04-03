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
        const isUSD = !document.querySelector('.dashboard')?.classList.contains('dzd');
        currencyValues.forEach(el => {
            const usdValue = el.getAttribute('data-usd');
            const dzdValue = el.getAttribute('data-dzd');
            el.textContent = isUSD ? `$${usdValue}` : `${dzdValue} DZD`;
        });
    }
});
