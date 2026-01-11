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

// Make functions globally accessible
window.formatCurrency = formatCurrency;
window.formatAvailabilityDate = formatAvailabilityDate;
window.getAmenityIcon = getAmenityIcon;
