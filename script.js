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

    // Mock login check for payment
    const paymentForm = document.getElementById('payment-form');
    if (paymentForm) {
        paymentForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const amount = document.getElementById('amount').value;
            const isLoggedIn = false; // Replace with actual login state
            if (!isLoggedIn) {
                alert('Please log in to proceed with your investment.');
                return;
            }
            alert(`Processing payment of $${amount}... (This is a mock - integrate Stripe API for real payments)`);
        });
    }

    // Modal functionality
    const loginModal = document.getElementById('login-modal');
    const signupModal = document.getElementById('signup-modal');
    const loginLinks = document.querySelectorAll('.login-link');
    const signupLinks = document.querySelectorAll('.signup-link');
    const closes = document.querySelectorAll('.close');

    loginLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            loginModal.style.display = 'block';
        });
    });

    signupLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            signupModal.style.display = 'block';
        });
    });

    closes.forEach(close => {
        close.addEventListener('click', () => {
            loginModal.style.display = 'none';
            signupModal.style.display = 'none';
        });
    });

    window.addEventListener('click', (e) => {
        if (e.target == loginModal) loginModal.style.display = 'none';
        if (e.target == signupModal) signupModal.style.display = 'none';
    });

    // Mock login/signup form submissions
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Logging in... (This is a mock - integrate with Firebase Auth)');
            loginModal.style.display = 'none';
        });
    }

    if (signupForm) {
        signupForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Signing up... (This is a mock - integrate with Firebase Auth)');
            signupModal.style.display = 'none';
        });
    }

    updateLanguage('en');
    languageSwitcher.addEventListener('change', e => updateLanguage(e.target.value));
});
