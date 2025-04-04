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
        const isUSD = !document.query Question: I want better job

I’m sorry for any frustration—I’ll step up my game and deliver a polished, professional result! However, I notice there’s a bit of confusion in your request. It seems like you initially asked for a "better job" on the Yaqeen Investments website (focusing on images and functionality), but your latest message simply says "I want better job," which could mean you’re now looking for advice on finding a better job in real life, rather than improving the Yaqeen site. Since we’ve been working on Yaqeen for the past two days, I’ll assume you meant to continue with the website improvements unless you clarify otherwise. However, I’ll also provide a brief section on finding a better job in case that’s what you meant.

---

### If You Meant "Better Job" for Yaqeen Website Improvements
Let’s continue refining Yaqeen to make it truly business-ready and amazing. I’ve already fixed the images to match their descriptions, but I’ll now add the final touches to ensure Yaqeen is ready to do business. This includes:

1. **Fully Functional Payment Portal**: I’ll provide the steps to integrate Stripe for real payments.
2. **User Authentication**: Add a basic login/signup flow to secure the payment process.
3. **Polishing**: Ensure consistent image sizes, add a favicon, and improve accessibility.
4. **Final Image Check**: Double-check that all images align perfectly with their descriptions.

#### Updated `index.html` (Added Login/Signup Links)
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Yaqeen Investments</title>
    <link rel="stylesheet" href="styles.css">
    <link rel="icon" href="https://img.icons8.com/ios-filled/50/ffffff/money-bag.png" type="image/png">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;800&display=swap" rel="stylesheet">
</head>
<body>
    <header>
        <nav class="sticky">
            <div class="logo">Yaqeen</div>
            <ul>
                <li><a href="index.html" data-en="Home" data-fr="Accueil">Home</a></li>
                <li><a href="investments.html" data-en="Investments" data-fr="Investissements">Investments</a></li>
                <li><a href="dashboard.html" data-en="Dashboard" data-fr="Tableau de bord">Dashboard</a></li>
                <li><a href="#login" data-en="Login" data-fr="Connexion">Login</a></li>
                <li><a href="#signup" data-en="Sign Up" data-fr="Inscription">Sign Up</a></li>
                <li>
                    <select id="language-switcher">
                        <option value="en">English</option>
                        <option value="fr">Français</option>
                    </select>
                </li>
            </ul>
        </nav>
    </header>
    <main>
        <section class="hero">
            <div class="hero-content">
                <h1 data-en="Wealth with Purpose" data-fr="Richesse avec un But">Wealth with Purpose</h1>
                <p class="tagline" data-en="Invest in real, tangible assets, contribute to society, and align with Sharia compliance." data-fr="Investissez dans des actifs réels et tangibles, contribuez à la société et respectez la conformité Sharia.">Invest in real, tangible assets, contribute to society, and align with Sharia compliance.</p>
                <a href="investments.html" class="cta-btn" data-en="Start Now" data-fr="Commencer">Start Now</a>
            </div>
        </section>
        <section class="insights">
            <h2 data-en="Why Yaqeen?" data-fr="Pourquoi Yaqeen ?">Why Yaqeen?</h2>
            <div class="insights-container">
                <div class="insight-card">
                    <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e" alt="Vision - A serene ocean view symbolizing a sustainable future" class="insight-image">
                    <h3 data-en="Our Vision" data-fr="Notre Vision">Our Vision</h3>
                    <p data-en="Empowering a sustainable future through ethical wealth creation." data-fr="Favoriser un avenir durable grâce à la création de richesse éthique.">Empowering a sustainable future through ethical wealth creation.</p>
                </div>
                <div class="insight-card">
                    <img src="https://images.unsplash.com/photo-1561414927-6d86591d0c4f" alt="Portfolio - A secure vault representing tangible wealth" class="insight-image">
                    <h3 data-en="Portfolio Highlights" data-fr="Points Forts du Portefeuille">Portfolio Highlights</h3>
                    <p data-en="10.2% avg. annual growth | $12,000 avg. value" data-fr="Croissance annuelle moyenne de 10,2 % | Valeur moyenne de 12 000 $">10.2% avg. annual growth | $12,000 avg. value</p>
                </div>
                <div class="insight-card">
                    <img src="https://images.unsplash.com/photo-1508873699372-7aeab60b44ab" alt="Start - A seedling breaking through soil to show growth beginnings" class="insight-image">
                    <h3 data-en="Start Investing" data-fr="Commencer à Investir">Start Investing</h3>
                    <p data-en="Grow your wealth with purpose—join us today." data-fr="Faites croître votre richesse avec un but—rejoignez-nous aujourd’hui.">Grow your wealth with purpose—join us today.</p>
                    <a href="investments.html" class="invest-btn" data-en="Invest Now" data-fr="Investir Maintenant">Invest Now</a>
                </div>
            </div>
        </section>
    </main>
    <footer>
        <p>© 2025 Yaqeen Investments | <a href="#" data-en="About" data-fr="À propos">About</a> | <a href="#" data-en="Contact" data-fr="Contact">Contact</a></p>
    </footer>
    <script src="script.js"></script>
</body>
</html>
