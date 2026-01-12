// Utility Functions for Formatting Data

function formatCurrency(amount) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(amount);
}

function formatAvailabilityDate(dateString) {
    const date = new Date(dateString);
    if (date.getDate() === 1) {
        return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long' });
    } else {
        return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    }
}

function getAmenityIcon(amenity) {
    if (amenity.toLowerCase().includes('internet') || amenity.toLowerCase().includes('wifi')) return '📶';
    if (amenity.toLowerCase().includes('tv')) return '📺';
    if (amenity.toLowerCase().includes('landscap')) return '🌿';
    if (amenity.toLowerCase().includes('pest')) return '🐛';
    return '🏡';
}

// Convert any YouTube URL format to embed format
function getYouTubeEmbedUrl(url) {
    if (!url) return null;

    // Already an embed URL
    if (url.includes('youtube.com/embed/')) {
        return url;
    }

    let videoId = null;

    // Extract video ID from various YouTube URL formats
    // Format: https://youtu.be/VIDEO_ID
    if (url.includes('youtu.be/')) {
        videoId = url.split('youtu.be/')[1].split('?')[0];
    }
    // Format: https://www.youtube.com/watch?v=VIDEO_ID
    else if (url.includes('youtube.com/watch')) {
        const urlParams = new URLSearchParams(url.split('?')[1]);
        videoId = urlParams.get('v');
    }
    // Format: https://www.youtube.com/v/VIDEO_ID
    else if (url.includes('youtube.com/v/')) {
        videoId = url.split('youtube.com/v/')[1].split('?')[0];
    }

    // Return embed URL if we found a video ID
    return videoId ? `https://www.youtube.com/embed/${videoId}` : url;
}

// Make functions globally accessible
window.formatCurrency = formatCurrency;
window.formatAvailabilityDate = formatAvailabilityDate;
window.getAmenityIcon = getAmenityIcon;
window.getYouTubeEmbedUrl = getYouTubeEmbedUrl;
