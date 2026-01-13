// Testimonials Show More/Less functionality

document.addEventListener('DOMContentLoaded', function() {
    const showMoreBtn = document.getElementById('show-more-testimonials');

    if (showMoreBtn) {
        showMoreBtn.addEventListener('click', function() {
            const hiddenTestimonials = document.querySelectorAll('.hidden-testimonial');
            const isShowing = hiddenTestimonials[0].style.display === 'flex';

            hiddenTestimonials.forEach(testimonial => {
                if (isShowing) {
                    testimonial.style.display = 'none';
                } else {
                    testimonial.style.display = 'flex';
                }
            });

            // Update button text
            this.textContent = isShowing ? 'Show More Reviews' : 'Show Fewer Reviews';

            // Scroll to testimonials section if closing
            if (isShowing) {
                document.getElementById('testimonials').scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }
});
