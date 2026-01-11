// Contact Form Handler
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');

    if (!contactForm) return;

    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();

        // Get form data
        const formData = new FormData(contactForm);
        const submitBtn = contactForm.querySelector('.submit-btn');

        // Disable submit button
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending...';

        // Clear previous messages
        formMessage.className = 'form-message';
        formMessage.textContent = '';

        try {
            const response = await fetch('contact-handler.php', {
                method: 'POST',
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                // Show success message
                formMessage.className = 'form-message success';
                formMessage.textContent = data.message;

                // Reset form
                contactForm.reset();
            } else {
                // Show error message
                formMessage.className = 'form-message error';
                formMessage.textContent = data.message;
            }
        } catch (error) {
            // Show error message
            formMessage.className = 'form-message error';
            formMessage.textContent = 'An error occurred. Please try again or contact us directly.';
            console.error('Form submission error:', error);
        } finally {
            // Re-enable submit button
            submitBtn.disabled = false;
            submitBtn.textContent = 'Send Message';
        }
    });
});
