// Property Detail Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Get property slug from URL
    const urlParams = new URLSearchParams(window.location.search);
    const slug = urlParams.get('slug') || urlParams.get('id');

    if (!slug) {
        showError('No property specified');
        return;
    }

    // Get property data
    const property = getPropertyBySlug(slug);

    if (!property) {
        showError('Property not found');
        return;
    }

    // Render property detail page
    renderPropertyDetail(property);
});

function renderPropertyDetail(property) {
    const container = document.getElementById('property-detail-container');

    // Hero Section
    const heroHTML = property.heroVideo ? renderHeroVideo(property) : renderHeroSlider(property);

    // Property Overview
    const overviewHTML = renderPropertyOverview(property);

    // Units Section
    const unitsHTML = renderUnitsSection(property);

    // CTA Section
    const ctaHTML = renderCTASection(property);

    container.innerHTML = `
        ${heroHTML}
        ${overviewHTML}
        ${unitsHTML}
        ${ctaHTML}
    `;

    // Initialize interactive elements
    initializeVideoToggles();
    initializeUnitSliders();
}

function renderHeroVideo(property) {
    return `
        <section class="property-hero hero-video">
            <video class="hero-video-player" autoplay muted loop playsinline poster="${property.image}">
                <source src="${property.heroVideo}" type="video/mp4">
                Your browser does not support the video tag.
            </video>
            <div class="hero-overlay">
                <div class="container hero-content">
                    <h1 class="property-hero-title">${property.name}</h1>
                    <p class="property-hero-location">${property.location.city}, ${property.location.state}</p>
                    <div class="hero-cta-buttons">
                        <a href="${property.bookingUrl}" target="_blank" class="btn btn-primary">Book Now</a>
                        <button class="btn btn-secondary" onclick="document.getElementById('units-section').scrollIntoView({behavior: 'smooth'})">View Units</button>
                    </div>
                </div>
            </div>
        </section>
    `;
}

function renderHeroSlider(property) {
    const allImages = [property.image, ...property.units.flatMap(u => u.images || [])].filter((v, i, a) => a.indexOf(v) === i);

    const slidesHTML = allImages.map((img, index) => `
        <div class="hero-slide ${index === 0 ? 'active' : ''}">
            <img src="${img}" alt="${property.name}" loading="${index === 0 ? 'eager' : 'lazy'}">
        </div>
    `).join('');

    return `
        <section class="property-hero hero-slider">
            <div class="hero-slider-container">
                ${slidesHTML}
                ${allImages.length > 1 ? `
                    <button class="slider-nav prev" onclick="navigateHeroSlider(-1)">‹</button>
                    <button class="slider-nav next" onclick="navigateHeroSlider(1)">›</button>
                ` : ''}
            </div>
            <div class="hero-overlay">
                <div class="container hero-content">
                    <h1 class="property-hero-title">${property.name}</h1>
                    <p class="property-hero-location">${property.location.city}, ${property.location.state}</p>
                    <div class="hero-cta-buttons">
                        <a href="${property.bookingUrl}" target="_blank" class="btn btn-primary">Book Now</a>
                        <button class="btn btn-secondary" onclick="document.getElementById('units-section').scrollIntoView({behavior: 'smooth'})">View Units</button>
                    </div>
                </div>
            </div>
        </section>
    `;
}

function renderPropertyOverview(property) {
    const maxBeds = Math.max(...property.units.map(u => u.bedrooms));
    const maxBaths = Math.max(...property.units.map(u => u.bathrooms));
    const maxSleeps = Math.max(...property.units.map(u => u.sleeps || 0));

    const amenitiesHTML = property.amenities.slice(0, 6).map(amenity => `
        <li class="amenity-item">
            <span class="amenity-icon">✓</span>
            <span>${amenity}</span>
        </li>
    `).join('');

    return `
        <section class="property-overview-section">
            <div class="container">
                <div class="overview-description">
                    <p>${property.fullDescription || property.description}</p>
                </div>

                <div class="key-facts">
                    <div class="fact-item">
                        <span class="fact-icon">🛏️</span>
                        <span class="fact-label">Up to ${maxBeds} ${maxBeds === 1 ? 'Bed' : 'Beds'}</span>
                    </div>
                    <div class="fact-item">
                        <span class="fact-icon">🚿</span>
                        <span class="fact-label">Up to ${maxBaths} ${maxBaths === 1 ? 'Bath' : 'Baths'}</span>
                    </div>
                    ${maxSleeps ? `
                        <div class="fact-item">
                            <span class="fact-icon">👥</span>
                            <span class="fact-label">Sleeps ${maxSleeps}</span>
                        </div>
                    ` : ''}
                    ${property.parking ? `
                        <div class="fact-item">
                            <span class="fact-icon">🅿️</span>
                            <span class="fact-label">${property.parking}</span>
                        </div>
                    ` : ''}
                    ${property.petPolicy ? `
                        <div class="fact-item">
                            <span class="fact-icon">🐕</span>
                            <span class="fact-label">${property.petPolicy}</span>
                        </div>
                    ` : ''}
                </div>

                ${property.amenities && property.amenities.length > 0 ? `
                    <div class="property-amenities">
                        <h3>Amenities</h3>
                        <ul class="amenities-grid">
                            ${amenitiesHTML}
                        </ul>
                    </div>
                ` : ''}
            </div>
        </section>
    `;
}

function renderUnitsSection(property) {
    const unitsHTML = property.units.map((unit, index) => renderUnitCard(unit, index, property)).join('');

    return `
        <section id="units-section" class="units-section">
            <div class="container">
                <h2>Choose Your Unit</h2>
                <div class="units-grid">
                    ${unitsHTML}
                </div>
            </div>
        </section>
    `;
}

function renderUnitCard(unit, index, property) {
    const images = unit.images || [property.image];
    const hasMultipleImages = images.length > 1;

    const imagesHTML = hasMultipleImages ? `
        <div class="unit-slider" data-unit="${unit.id}">
            ${images.map((img, i) => `
                <div class="unit-slide ${i === 0 ? 'active' : ''}">
                    <img src="${img}" alt="${unit.name}" loading="lazy">
                </div>
            `).join('')}
            <button class="unit-slider-nav prev" onclick="navigateUnitSlider('${unit.id}', -1)">‹</button>
            <button class="unit-slider-nav next" onclick="navigateUnitSlider('${unit.id}', 1)">›</button>
            <div class="unit-slider-dots">
                ${images.map((_, i) => `<span class="dot ${i === 0 ? 'active' : ''}" onclick="goToUnitSlide('${unit.id}', ${i})"></span>`).join('')}
            </div>
        </div>
    ` : `
        <div class="unit-image">
            <img src="${images[0]}" alt="${unit.name}" loading="lazy">
        </div>
    `;

    return `
        <div class="unit-card">
            ${imagesHTML}

            <div class="unit-info">
                <h3 class="unit-name">${unit.name}</h3>
                <div class="unit-details">
                    <span class="unit-detail"><strong>${unit.bedrooms}</strong> bed</span>
                    <span class="unit-detail"><strong>${unit.bathrooms}</strong> bath</span>
                    ${unit.sleeps ? `<span class="unit-detail">Sleeps <strong>${unit.sleeps}</strong></span>` : ''}
                </div>
                <div class="unit-price">
                    <span class="price-amount">${formatCurrency(unit.rent)}</span>
                    <span class="price-period">/month</span>
                </div>

                ${unit.videoTour ? `
                    <button class="video-toggle-btn" onclick="toggleUnitVideo('${unit.id}')">
                        <span class="video-icon">▶</span>
                        Watch Video Tour
                    </button>
                    <div id="video-${unit.id}" class="unit-video-container" style="display: none;">
                        <div class="video-wrapper">
                            <iframe
                                src="${unit.videoTour}"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen
                                loading="lazy"
                            ></iframe>
                        </div>
                    </div>
                ` : ''}

                <a href="${unit.bookingUrl || property.bookingUrl}" target="_blank" class="btn btn-unit-book">
                    Book This Unit
                </a>
            </div>
        </div>
    `;
}

function renderCTASection(property) {
    return `
        <section class="property-cta-section">
            <div class="container">
                <h2>Ready to Book Your Stay?</h2>
                <p>Contact us today to check availability and secure your rental</p>
                <a href="${property.bookingUrl}" target="_blank" class="btn btn-primary btn-large">
                    Check Availability
                </a>
            </div>
        </section>
    `;
}

// Interactive Functions

function toggleUnitVideo(unitId) {
    const videoContainer = document.getElementById(`video-${unitId}`);
    const btn = event.target.closest('.video-toggle-btn');

    if (videoContainer.style.display === 'none') {
        videoContainer.style.display = 'block';
        btn.innerHTML = '<span class="video-icon">✕</span> Close Video';
        btn.classList.add('active');
    } else {
        videoContainer.style.display = 'none';
        btn.innerHTML = '<span class="video-icon">▶</span> Watch Video Tour';
        btn.classList.remove('active');
    }
}

function initializeVideoToggles() {
    // Video toggles are handled by onclick events
}

function initializeUnitSliders() {
    // Sliders are initialized and controlled by navigation functions
}

let currentHeroSlide = 0;

function navigateHeroSlider(direction) {
    const slides = document.querySelectorAll('.property-hero .hero-slide');
    if (slides.length === 0) return;

    slides[currentHeroSlide].classList.remove('active');
    currentHeroSlide = (currentHeroSlide + direction + slides.length) % slides.length;
    slides[currentHeroSlide].classList.add('active');
}

const unitSlideIndexes = {};

function navigateUnitSlider(unitId, direction) {
    const slider = document.querySelector(`.unit-slider[data-unit="${unitId}"]`);
    if (!slider) return;

    const slides = slider.querySelectorAll('.unit-slide');
    const dots = slider.querySelectorAll('.dot');

    if (!unitSlideIndexes[unitId]) unitSlideIndexes[unitId] = 0;

    slides[unitSlideIndexes[unitId]].classList.remove('active');
    dots[unitSlideIndexes[unitId]].classList.remove('active');

    unitSlideIndexes[unitId] = (unitSlideIndexes[unitId] + direction + slides.length) % slides.length;

    slides[unitSlideIndexes[unitId]].classList.add('active');
    dots[unitSlideIndexes[unitId]].classList.add('active');
}

function goToUnitSlide(unitId, index) {
    const slider = document.querySelector(`.unit-slider[data-unit="${unitId}"]`);
    if (!slider) return;

    const slides = slider.querySelectorAll('.unit-slide');
    const dots = slider.querySelectorAll('.dot');

    if (!unitSlideIndexes[unitId]) unitSlideIndexes[unitId] = 0;

    slides[unitSlideIndexes[unitId]].classList.remove('active');
    dots[unitSlideIndexes[unitId]].classList.remove('active');

    unitSlideIndexes[unitId] = index;

    slides[index].classList.add('active');
    dots[index].classList.add('active');
}

function showError(message) {
    const container = document.getElementById('property-detail-container');
    container.innerHTML = `
        <div class="property-error">
            <div class="container">
                <h2>Error</h2>
                <p>${message}</p>
                <a href="index.php" class="btn btn-primary">Back to Properties</a>
            </div>
        </div>
    `;
}

// Make functions globally accessible
window.toggleUnitVideo = toggleUnitVideo;
window.navigateHeroSlider = navigateHeroSlider;
window.navigateUnitSlider = navigateUnitSlider;
window.goToUnitSlide = goToUnitSlide;
