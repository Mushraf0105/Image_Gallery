document.addEventListener('DOMContentLoaded', () => {
    const galleryItems = document.querySelectorAll('.gallery-item img');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const closeBtn = document.querySelector('.close-btn');

    // Open lightbox when an image is clicked
    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            const originalSrc = item.src;
            // Fetch a higher resolution image for the lightbox
            const hiResSrc = originalSrc.replace('w=800', 'w=1600');
            
            lightboxImg.src = hiResSrc;
            lightboxCaption.textContent = item.alt; 
            
            lightbox.classList.add('active');
            
            // Prevent body scrolling while modal is open
            document.body.style.overflow = 'hidden';
        });
    });

    // Function to close lightbox
    const closeLightbox = () => {
        lightbox.classList.remove('active');
        
        // Wait for transition to finish before clearing source
        setTimeout(() => {
            if(!lightbox.classList.contains('active')) {
                lightboxImg.src = '';
                lightboxCaption.textContent = '';
            }
        }, 300); 
        
        // Restore body scrolling
        document.body.style.overflow = 'auto';
    };

    // Close on X button click
    closeBtn.addEventListener('click', closeLightbox);

    // Close when clicking outside the image (on the overlay background)
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox || e.target.classList.contains('lightbox-content-wrapper')) {
            closeLightbox();
        }
    });

    // Close on Escape key press
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox.classList.contains('active')) {
            closeLightbox();
        }
    });
});
