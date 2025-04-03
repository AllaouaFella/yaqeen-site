document.addEventListener('DOMContentLoaded', () => {
    const languageSwitcher = document.getElementById('language-switcher');
    const elements = document.querySelectorAll('[data-en]');

    function updateLanguage(lang) {
        elements.forEach(el => {
            el.textContent = el.getAttribute(`data-${lang}`);
        });
        updateCurrencyDisplay(lang);
    }

    function updateCurrencyDisplay(lang) {
        const currencyValues = document.querySelectorAll('.currency-value');
        const isUSD = !document.querySelector('.dashboard')?.classList.contains('dzd');
        currencyValues.forEach(el => {
            const usdValue = el.getAttribute('data-usd');
            const dzdValue = el.getAttribute('data-dzd');
            el.textContent = isUSD ? `$${usdValue}` : `${dzdValue} DZD`;
        });
    }

    updateLanguage('en');
    languageSwitcher.addEventListener('change', e => updateLanguage(e.target.value));
});
