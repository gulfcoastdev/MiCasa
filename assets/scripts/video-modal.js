// Video Modal Functions - Shared across all pages

function openVideoTour(videoUrl, title) {
    const modal = document.getElementById('video-tour-modal');
    const iframe = document.getElementById('video-modal-iframe');
    const modalTitle = document.getElementById('video-modal-title');

    modalTitle.textContent = title;
    iframe.src = videoUrl;
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeVideoTour() {
    const modal = document.getElementById('video-tour-modal');
    const iframe = document.getElementById('video-modal-iframe');

    modal.style.display = 'none';
    iframe.src = ''; // Stop video playback
    document.body.style.overflow = '';
}

// ESC key to close modal
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        const modal = document.getElementById('video-tour-modal');
        if (modal && modal.style.display === 'flex') {
            closeVideoTour();
        }
    }
});

// Make functions globally accessible
window.openVideoTour = openVideoTour;
window.closeVideoTour = closeVideoTour;
