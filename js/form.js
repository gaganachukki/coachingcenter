document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        const nameInput = document.getElementById('contactName');
        const emailInput = document.getElementById('contactEmail');
        const msgInput = document.getElementById('contactMessage');
        
        const nameError = document.getElementById('nameError');
        const emailError = document.getElementById('emailError');
        const msgError = document.getElementById('msgError');

        // Helper to show error
        const showError = (input, errorDiv, message) => {
            input.style.borderColor = '#ef4444';
            errorDiv.textContent = message;
            errorDiv.style.display = 'block';
        };

        // Helper to clear error
        const clearError = (input, errorDiv) => {
            input.style.borderColor = 'var(--border-color)';
            errorDiv.textContent = '';
            errorDiv.style.display = 'none';
        };

        // Email validation regex
        const isValidEmail = (email) => {
            const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(String(email).toLowerCase());
        };

        // Real-time validation clearing and sanitization on input (delegated for safety)
        document.addEventListener('input', function(e) {
            if (e.target && e.target.id === 'contactName') {
                e.target.value = e.target.value.replace(/[^a-zA-Z\s]/g, '');
            }
        });

        [nameInput, emailInput, msgInput].forEach(input => {
            if(input) {
                input.addEventListener('input', function() {
                    const errorDiv = document.getElementById(this.id.replace('contact', '').toLowerCase() + 'Error') || 
                                     (this.id === 'contactMessage' ? msgError : null);
                    if(errorDiv) clearError(this, errorDiv);
                });
            }
        });

        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            let isValid = true;
            
            // Validate Name
            if (!nameInput.value.trim()) {
                showError(nameInput, nameError, 'Please enter your full name.');
                isValid = false;
            } else if (nameInput.value.trim().length < 2) {
                showError(nameInput, nameError, 'Name must be at least 2 characters long.');
                isValid = false;
            } else {
                clearError(nameInput, nameError);
            }

            // Validate Email
            if (!emailInput.value.trim()) {
                showError(emailInput, emailError, 'Please enter your email address.');
                isValid = false;
            } else if (!isValidEmail(emailInput.value.trim())) {
                showError(emailInput, emailError, 'Please enter a valid email address.');
                isValid = false;
            } else {
                clearError(emailInput, emailError);
            }

            // Validate Message
            if (!msgInput.value.trim()) {
                showError(msgInput, msgError, 'Please enter your message.');
                isValid = false;
            } else if (msgInput.value.trim().length < 10) {
                showError(msgInput, msgError, 'Message must be at least 10 characters long.');
                isValid = false;
            } else {
                clearError(msgInput, msgError);
            }

            // If valid, redirect to 404
            if (isValid) {
                window.location.href = '404.html';
            }
        });
    }
});