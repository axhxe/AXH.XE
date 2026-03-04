// Function to open different pages based on card clicked
function openPage(pageName) {
    // You can customize these URLs based on your actual pages
    const pages = {
        'APK': 'apk.html',
        'Elements': 'elements.html',
        'Edited Videos': 'edited-videos.html',
        'Pack': 'pack.html',
        'Tutorial': 'tutorial.html'
    };
    
    // Navigate to the corresponding page
    window.location.href = pages[pageName] || '#';
}

// Add click event listeners to all cards
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
        card.addEventListener('click', function() {
            const cardTitle = this.querySelector('h2').textContent;
            openPage(cardTitle);
        });
    });
});

// Loader backup to ensure it disappears
window.addEventListener('load', function() {
    setTimeout(function() {
        const loader = document.querySelector('.loader');
        if (loader) {
            loader.style.display = 'none';
        }
    }, 2500); // Slightly longer than CSS animation as backup
});

// Optional: Add touch support for mobile devices
if ('ontouchstart' in window) {
    document.addEventListener('touchstart', function() {}, {passive: true});
}
