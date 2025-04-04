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

    // Mock login check for payment (replace with real auth system)
    const paymentForm = document.getElementById('payment-form');
    if (paymentForm) {
        paymentForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const amount = document.getElementById('amount').value;
            // Mock login check - replace with real authentication
            const isLoggedIn = false; // Replace with actual login state
            if (!isLoggedIn) {
                alert('Please log in to proceed with your investment.');
                return;
            }
            alert(`Processing payment of $${amount}... (This is a mock - integrate Stripe API for real payments)`);
        });
    }

    updateLanguage('en');
    languageSwitcher.addEventListener('change', e => updateLanguage(e.target.value));
});
