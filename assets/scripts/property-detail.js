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

    // CTA Section
    const ctaHTML = renderCTASection(property);

    // Units Section
    const unitsHTML = renderUnitsSection(property);

    container.innerHTML = `
        ${heroHTML}
        ${overviewHTML}
        ${ctaHTML}
        ${unitsHTML}
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
                        ${property.bookingUrl ? `<a href="${property.bookingUrl}" target="_blank" class="btn btn-primary">Book Now</a>` : ''}
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
        <div class="swiper-slide">
            <img src="${img}" alt="${property.name}" loading="${index === 0 ? 'eager' : 'lazy'}">
        </div>
    `).join('');

    const thumbsHTML = allImages.map((img, index) => `
        <div class="swiper-slide">
            <img src="${img}" alt="${property.name} thumbnail ${index + 1}" loading="lazy">
        </div>
    `).join('');

    return `
        <section class="property-hero hero-slider">
            <div class="swiper property-hero-swiper">
                <div class="swiper-wrapper">
                    ${slidesHTML}
                </div>
            </div>

            ${allImages.length > 1 ? `
                <div class="swiper property-hero-thumbs-swiper">
                    <div class="swiper-wrapper">
                        ${thumbsHTML}
                    </div>
                </div>
            ` : ''}

            <div class="hero-overlay">
                <div class="container hero-content">
                    <h1 class="property-hero-title">${property.name}</h1>
                    <p class="property-hero-location">${property.location.city}, ${property.location.state}</p>
                    <div class="hero-cta-buttons">
                        ${property.bookingUrl ? `<a href="${property.bookingUrl}" target="_blank" class="btn btn-primary">Book Now</a>` : ''}
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
                    ${property.propertyVideoTour ? `
                        <button class="video-tour-btn property-video-btn" onclick="openVideoTour('${property.propertyVideoTour}', '${property.name} - Property Tour')">
                            <span class="video-icon">🎥</span>
                            Watch Property Video Tour
                        </button>
                    ` : ''}
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
    const gridUnitsHTML = property.units.map((unit, index) => renderUnitCard(unit, index, property)).join('');
    const flowUnitsHTML = property.units.map((unit, index) => renderUnitFlow(unit, index, property)).join('');

    return `
        <section id="units-section" class="units-section">
            <div class="container">
                <div class="units-header">
                    <h2>Choose Your Unit</h2>
                    <div class="layout-toggle">
                        <button class="layout-btn active" data-layout="grid" onclick="switchLayout('grid')">
                            <span class="layout-icon">⊞</span> Grid
                        </button>
                        <button class="layout-btn" data-layout="flow" onclick="switchLayout('flow')">
                            <span class="layout-icon">☰</span> Flow
                        </button>
                    </div>
                </div>

                <div id="units-grid-view" class="units-grid">
                    ${gridUnitsHTML}
                </div>

                <div id="units-flow-view" class="units-flow" style="display: none;">
                    ${flowUnitsHTML}
                </div>
            </div>
        </section>
    `;
}

function renderUnitFlow(unit, index, property) {
    const images = unit.images || [property.image];

    const imageGridHTML = images.slice(0, 6).map((img, i) => `
        <div class="flow-image-item">
            <img src="${img}" alt="${unit.name} - Photo ${i + 1}" loading="lazy">
        </div>
    `).join('');

    const videoUrl = unit.videoTour || property.propertyVideoTour;
    const hasVideo = !!videoUrl;

    return `
        <div class="unit-flow-item">
            <div class="flow-content">
                <div class="flow-header">
                    <h3 class="flow-unit-name">${unit.name}</h3>
                    <div class="flow-unit-meta">
                        <span class="meta-item"><strong>${unit.bedrooms}</strong> bed</span>
                        <span class="meta-separator">•</span>
                        <span class="meta-item"><strong>${unit.bathrooms}</strong> bath</span>
                        ${unit.sleeps ? `<span class="meta-separator">•</span><span class="meta-item">Sleeps <strong>${unit.sleeps}</strong></span>` : ''}
                        <span class="meta-separator">•</span>
                        <span class="meta-price">${formatCurrency(unit.rent)}/month</span>
                    </div>
                </div>

                ${hasVideo ? `
                    <div class="flow-video-section">
                        <h4>Video Tour</h4>
                        <div class="flow-video-wrapper">
                            <iframe
                                src="${getYouTubeEmbedUrl(videoUrl)}"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen
                                loading="lazy"
                            ></iframe>
                        </div>
                    </div>
                ` : ''}

                <div class="flow-images-section">
                    <h4>Photos</h4>
                    <div class="flow-images-grid">
                        ${imageGridHTML}
                    </div>
                </div>

                <div class="flow-description">
                    <p>Fully furnished ${unit.bedrooms}-bedroom, ${unit.bathrooms}-bathroom unit. Includes all furniture, kitchenware, linens, and utilities options. Perfect for ${unit.sleeps ? `up to ${unit.sleeps} guests` : 'comfortable living'}.</p>
                </div>

                <div class="flow-actions">
                    ${unit.bookingUrl || property.bookingUrl ? `
                        <a href="${unit.bookingUrl || property.bookingUrl}" target="_blank" class="btn btn-primary btn-flow-book">
                            Book This Unit
                        </a>
                    ` : ''}
                    <div class="flow-availability">
                        <span class="availability-label">Available:</span>
                        <span class="availability-date">${formatAvailabilityDate(unit.availableDate)}</span>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function renderUnitCard(unit, index, property) {
    const images = unit.images || [property.image];
    const hasMultipleImages = images.length > 1;

    const imagesHTML = hasMultipleImages ? `
        <div class="swiper unit-swiper" data-unit="${unit.id}">
            <div class="swiper-wrapper">
                ${images.map((img, i) => `
                    <div class="swiper-slide">
                        <img src="${img}" alt="${unit.name}" loading="lazy">
                    </div>
                `).join('')}
            </div>
            <div class="swiper-pagination"></div>
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

                ${unit.videoTour || property.propertyVideoTour ? `
                    <button class="video-tour-btn" onclick="openVideoTour('${unit.videoTour || property.propertyVideoTour}', '${unit.name} - Virtual Tour')">
                        <span class="video-icon">🎥</span>
                        Watch Video Tour
                    </button>
                ` : ''}

                ${unit.bookingUrl || property.bookingUrl ? `
                    <a href="${unit.bookingUrl || property.bookingUrl}" target="_blank" class="btn btn-unit-book">
                        Book This Unit
                    </a>
                ` : ''}
            </div>
        </div>
    `;
}

function renderCTASection(property) {
    return `
        <section class="property-cta-section">
            <div class="container">
                <h2>Questions or Ready to Book?</h2>
                <p>Contact us for details, questions, and availability</p>
                <div class="cta-contact-info">
                    <a href="tel:+1-850-912-9225" class="cta-contact-link">
                        <span class="cta-icon">📞</span>
                        <span>(850) 912-9225</span>
                    </a>
                    <a href="mailto:rentalspcola@gmail.com" class="cta-contact-link">
                        <span class="cta-icon">✉️</span>
                        <span>rentalspcola@gmail.com</span>
                    </a>
                </div>
            </div>
        </section>
    `;
}

// Interactive Functions
// Note: Video modal functions (openVideoTour, closeVideoTour) are in video-modal.js

function initializeVideoToggles() {
    // Video modal is handled by openVideoTour and closeVideoTour functions in video-modal.js
}

function initializeUnitSliders() {
    // Initialize property hero swiper with thumbnails
    const propertyHeroSwiper = document.querySelector('.property-hero-swiper');
    const propertyHeroThumbsSwiper = document.querySelector('.property-hero-thumbs-swiper');

    if (propertyHeroSwiper) {
        let heroSwiperInstance;

        // Initialize thumbnail swiper first if it exists
        if (propertyHeroThumbsSwiper) {
            const thumbsSwiper = new Swiper('.property-hero-thumbs-swiper', {
                loop: true,
                spaceBetween: 10,
                slidesPerView: 4,
                freeMode: true,
                watchSlidesProgress: true,
            });

            // Initialize main swiper with thumbnails
            heroSwiperInstance = new Swiper('.property-hero-swiper', {
                loop: true,
                autoplay: {
                    delay: 5000,
                    disableOnInteraction: false,
                },
                speed: 800,
                spaceBetween: 10,
                thumbs: {
                    swiper: thumbsSwiper,
                },
            });
        } else {
            // Initialize without thumbnails (fallback)
            heroSwiperInstance = new Swiper('.property-hero-swiper', {
                loop: true,
                autoplay: {
                    delay: 5000,
                    disableOnInteraction: false,
                },
                speed: 800,
                pagination: {
                    el: '.property-hero-swiper .swiper-pagination',
                    clickable: true,
                },
            });
        }
    }

    // Initialize unit swipers
    const unitSwipers = document.querySelectorAll('.unit-swiper');
    unitSwipers.forEach(swiperEl => {
        new Swiper(swiperEl, {
            loop: true,
            speed: 600,
            pagination: {
                el: swiperEl.querySelector('.swiper-pagination'),
                clickable: true,
            },
        });
    });
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

function switchLayout(layout) {
    const gridView = document.getElementById('units-grid-view');
    const flowView = document.getElementById('units-flow-view');
    const gridBtn = document.querySelector('.layout-btn[data-layout="grid"]');
    const flowBtn = document.querySelector('.layout-btn[data-layout="flow"]');

    if (layout === 'grid') {
        gridView.style.display = 'grid';
        flowView.style.display = 'none';
        gridBtn.classList.add('active');
        flowBtn.classList.remove('active');
    } else {
        gridView.style.display = 'none';
        flowView.style.display = 'block';
        gridBtn.classList.remove('active');
        flowBtn.classList.add('active');
    }
}

// Make functions globally accessible
// Note: openVideoTour and closeVideoTour are in video-modal.js
window.switchLayout = switchLayout;
