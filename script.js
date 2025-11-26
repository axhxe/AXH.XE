// Add interactive effects to the glass cards
document.addEventListener('DOMContentLoaded', function() {
    const glassCards = document.querySelectorAll('.glass-card');
    
    // Add mousemove effect for enhanced glassmorphism
    glassCards.forEach(card => {
        card.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            // Calculate the center of the card
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            // Calculate the angle for the gradient
            const angle = Math.atan2(y - centerY, x - centerX) * 180 / Math.PI;
            
            // Apply the dynamic gradient
            this.style.background = `linear-gradient(${angle}deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.1) 50%, rgba(255, 255, 255, 0.05) 100%)`;
        });
        
        // Reset the gradient when mouse leaves
        card.addEventListener('mouseleave', function() {
            this.style.background = 'rgba(255, 255, 255, 0.15)';
        });
    });
    
    // Add click animation
    glassCards.forEach(card => {
        card.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });
});
