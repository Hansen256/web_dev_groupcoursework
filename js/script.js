// Form Validation
function validateForm() {
    const name = document.querySelector('input[name="name"]');
    const email = document.querySelector('input[name="email"]');
    const message = document.querySelector('textarea[name="message"]');

    // Clear previous error messages
    clearErrors();

    let isValid = true;

    // Validate name
    if (!name || name.value.trim() === '') {
        showError(name, 'Name is required');
        isValid = false;
    } else if (name.value.trim().length < 2) {
        showError(name, 'Name must be at least 2 characters long');
        isValid = false;
    }

    // Validate email
    if (!email || email.value.trim() === '') {
        showError(email, 'Email is required');
        isValid = false;
    } else if (!isValidEmail(email.value)) {
        showError(email, 'Please enter a valid email address');
        isValid = false;
    }

    // Validate message
    if (!message || message.value.trim() === '') {
        showError(message, 'Message is required');
        isValid = false;
    } else if (message.value.trim().length < 10) {
        showError(message, 'Message must be at least 10 characters long');
        isValid = false;
    }

    if (isValid) {
        alert('Thank you for your message! We will get back to you soon.');
        document.querySelector('form[name="contactForm"]').reset();
    }

    return isValid;
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showError(element, message) {
    if (!element) return;
    element.style.borderColor = '#d32f2f';
    element.style.backgroundColor = '#ffebee';
    
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.style.color = '#d32f2f';
    errorDiv.style.fontSize = '12px';
    errorDiv.style.marginTop = '4px';
    errorDiv.textContent = message;
    element.parentNode.insertBefore(errorDiv, element.nextSibling);
}

function clearErrors() {
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(msg => msg.remove());
    
    const inputs = document.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.style.borderColor = '';
        input.style.backgroundColor = '';
    });
}

// Gallery Lightbox
document.addEventListener('DOMContentLoaded', function() {
    // Gallery lightbox functionality
    const galleryImages = document.querySelectorAll('.gallery-grid img');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = lightbox ? lightbox.querySelector('img') : null;

    if (galleryImages.length > 0 && lightbox) {
        // Add click handlers to gallery images
        galleryImages.forEach(img => {
            img.style.cursor = 'pointer';
            img.addEventListener('click', function() {
                if (lightboxImg) {
                    lightboxImg.src = this.src;
                    lightboxImg.alt = this.alt;
                    lightbox.style.display = 'flex';
                    lightbox.style.justifyContent = 'center';
                    lightbox.style.alignItems = 'center';
                    lightbox.style.position = 'fixed';
                    lightbox.style.top = '0';
                    lightbox.style.left = '0';
                    lightbox.style.width = '100%';
                    lightbox.style.height = '100%';
                    lightbox.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
                    lightbox.style.zIndex = '1000';
                    lightboxImg.style.maxWidth = '90%';
                    lightboxImg.style.maxHeight = '90%';
                }
            });
        });

        // Close lightbox on click
        lightbox.addEventListener('click', function(e) {
            if (e.target === lightbox) {
                lightbox.style.display = 'none';
            }
        });

        // Close lightbox on Escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && lightbox.style.display === 'flex') {
                lightbox.style.display = 'none';
            }
        });
    }

    // Smooth scroll for navigation links
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
});
