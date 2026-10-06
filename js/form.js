document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Validate form
            let isValid = true;
            // Add custom toast notification here
            if (isValid) {
                if(window.showToast) window.showToast('Message sent successfully!');
                contactForm.reset();
            }
        });
    }
});\n