// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Form Submission
const contactForm = document.querySelector('form');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        console.log('Form submitted:', { name, email, message });
        alert('Thank you for your message! I will get back to you soon.');
        this.reset();
    });
}

// Send Email function (for the onclick in HTML)
function sendEmail(name, message) {
    let mailto = "mailto:vivekyadav138001@gmail.com?subject=New Message from " + name + "&body=" + message;
    window.location.href = mailto;
}

// === Dark Mode Toggle ===
function initDarkMode() {
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const body = document.body;
    const navbar = document.querySelector('.navbar');

    if (!themeToggle || !themeIcon || !navbar) return;

    function setThemeUI(isDark) {
        if (isDark) {
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
            themeToggle.setAttribute('aria-label', 'Switch to light mode');
            navbar.classList.add('navbar-dark');
            navbar.classList.remove('navbar-light');
        } else {
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
            themeToggle.setAttribute('aria-label', 'Switch to dark mode');
            navbar.classList.add('navbar-light');
            navbar.classList.remove('navbar-dark');
        }
        themeIcon.classList.add('fa-solid'); // Always keep fa-solid
    }

    function loadTheme() {
        const saved = localStorage.getItem('theme');
        const isDark = saved === 'dark';
        body.classList.toggle('dark-mode', isDark);
        setThemeUI(isDark);
    }

    function toggleTheme() {
        const isDark = !body.classList.contains('dark-mode');
        body.classList.toggle('dark-mode');
        setThemeUI(isDark);
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    }

    themeToggle.addEventListener('click', function (e) {
        e.preventDefault();
        toggleTheme();
    });

    loadTheme();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initDarkMode);
} else {
    initDarkMode();
}