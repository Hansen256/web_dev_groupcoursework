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
});
