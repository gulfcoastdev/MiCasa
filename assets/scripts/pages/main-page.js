// Main Page (index.php) Rendering and Functionality
// Requires: property-data.js, formatters.js

// Render property HTML for main page
function renderProperty(property) {
    const hasVideoTour = property.propertyVideoTour || property.units.some(u => u.videoTour);

    const unitsTableHTML = property.units.map(unit => `
        <tr>
            <td>${unit.name}</td>
            <td>${unit.bedrooms} bed / ${unit.bathrooms} bath</td>
            <td>${formatCurrency(unit.rent)}/month</td>
            <td>${formatAvailabilityDate(unit.availableDate)}</td>
            ${hasVideoTour ? `
                <td class="video-tour-cell">
                    ${property.propertyVideoTour || unit.videoTour ? `
                        <button class="video-tour-btn-table" onclick="openVideoTour('${property.propertyVideoTour || unit.videoTour}', '${property.name}')">
                            <span class="video-icon">🎥</span>
                            Watch Video Tour
                        </button>
                    ` : '<span class="no-video">—</span>'}
                </td>
            ` : ''}
        </tr>
    `).join('');

    const amenitiesHTML = property.amenities.map(amenity => `<li>🏡 ${amenity}</li>`).join('');

    return `
        <div id="${property.id}-details" class="property-detail-group">
            <div class="property-overview">
                <div class="property-image">
                    <img src="${property.image}" alt="${property.name} Property" loading="lazy">
                </div>
                <div class="property-info">
                    <h3>${property.name} - ${property.description}</h3>
                    <p class="property-address">${property.address}</p>
                    <div class="square-footage">${property.squareFootage} sq ft per unit</div>
                    <div class="property-links">
                        ${property.slug ? `
                            <a href="property.php?slug=${property.slug}" class="listing-link view-details-link">
                                View Full Details →
                            </a>
                        ` : ''}
                        ${property.listingUrl ? `
                            <a href="${property.listingUrl}" target="_blank" class="listing-link">
                                Book Now →
                            </a>
                        ` : ''}
                    </div>
                </div>
            </div>
            <div class="availability-table">
                <table>
                    <thead>
                        <tr>
                            <th>Unit</th>
                            <th>Bed/Bath</th>
                            <th>Rent</th>
                            <th>Available</th>
                            ${hasVideoTour ? '<th>Video Tour</th>' : ''}
                        </tr>
                    </thead>
                    <tbody>
                        ${unitsTableHTML}
                    </tbody>
                </table>
            </div>
            <div class="utility-bundle">
                ${property.id === 'rebecca-street'
                    ? `<strong>✨ All utilities included in rent!</strong> Includes: ${property.utilityBundle.includes.join(', ')} (${formatCurrency(property.utilityBundle.price)}/month value)`
                    : `<strong>Utility Bundle Available:</strong> ${formatCurrency(property.utilityBundle.price)}/month (${property.utilityBundle.includes.join(', ')})`
                }
            </div>
            <div class="property-amenities">
                <h5>Property Features:</h5>
                <ul class="amenities-list">
                    ${amenitiesHTML}
                </ul>
            </div>
        </div>
    `;
}

// Render universal amenities
function renderUniversalAmenities() {
    const amenitiesHTML = propertyData.universalAmenities.map(amenity => `
        <div class="amenity-item">
            <span class="amenity-icon">${getAmenityIcon(amenity)}</span>
            <span>${amenity}</span>
        </div>
    `).join('');

    return `
        <div class="universal-amenities">
            <h3>All Properties Include</h3>
            <div class="amenity-highlights">
                ${amenitiesHTML}
            </div>
        </div>
    `;
}

// Render social media
function renderSocialMedia() {
    const socialMedia = propertyData.contact.socialMedia;
    if (!socialMedia) return '';

    return `
        <h3 style="text-align: center; margin-bottom: 20px; color: white;">Follow Us</h3>
        <div style="display: flex; justify-content: center; gap: 20px; flex-wrap: wrap;">
            ${socialMedia.facebook ? `
                <a href="${socialMedia.facebook}" target="_blank" class="social-media-button facebook">
                    <span class="social-icon">📘</span>
                    <span>Facebook</span>
                </a>
            ` : ''}
            ${socialMedia.instagram ? `
                <a href="${socialMedia.instagram}" target="_blank" class="social-media-button instagram">
                    <span class="social-icon">📷</span>
                    <span>Instagram</span>
                </a>
            ` : ''}
        </div>
    `;
}

// Google Maps functionality
let map;

function initMap() {
    try {
        // Check if Google Maps is available
        if (!window.google || !window.google.maps) {
            console.error('Google Maps not loaded');
            showMapFallback();
            return;
        }

        const centerPoint = { lat: 30.475, lng: -87.235 };

        map = new google.maps.Map(document.getElementById("map"), {
            zoom: 11,
            center: centerPoint,
            mapId: "DEMO_MAP_ID",
            styles: [
                { featureType: "water", elementType: "geometry", stylers: [{ color: "#e3f2fd" }] },
                { featureType: "landscape", elementType: "geometry", stylers: [{ color: "#f7f9fc" }] },
                { featureType: "road", elementType: "geometry", stylers: [{ color: "#ffffff" }] },
                { featureType: "poi", elementType: "labels", stylers: [{ visibility: "off" }] }
            ]
        });

        // Add markers for each property
        propertyData.properties.forEach((property) => {
            const lowestRent = Math.min(...property.units.map(u => u.rent));

            const marker = new google.maps.marker.AdvancedMarkerElement({
                position: { lat: property.coordinates.lat, lng: property.coordinates.lng },
                map: map,
                title: property.mapInfo.title,
                content: createMarkerContent(property.mapInfo.type, formatCurrency(lowestRent))
            });

            const listingLink = property.listingUrl ?
                `<a href="${property.listingUrl}" target="_blank" style="display: inline-block; background: #006aff; color: white; padding: 6px 12px; text-decoration: none; border-radius: 4px; font-size: 12px; font-weight: 500; margin-right: 6px;">
                    More Info
                </a>` : '';

            const infoWindow = new google.maps.InfoWindow({
                content: `
                    <div style="padding: 10px; max-width: 280px;">
                        <h3 style="color: #1a5490; margin: 0 0 8px 0; font-size: 16px;">
                            ${property.mapInfo.title}
                        </h3>
                        <p style="margin: 0 0 6px 0; color: #2c3e50; font-size: 14px; font-weight: 500;">
                            ${property.units.length} unit${property.units.length > 1 ? 's' : ''}
                        </p>
                        <p style="margin: 0 0 8px 0; color: #2c3e50; font-size: 14px;">
                            ${property.units[0].bedrooms} bed / ${property.units[0].bathrooms} bath - ${formatCurrency(lowestRent)}/month<br>${property.description}
                        </p>
                        <p style="margin: 0 0 12px 0; color: #666; font-size: 12px;">
                            ${property.address}
                        </p>
                        <div style="display: flex; gap: 6px; flex-wrap: wrap;">
                            <a href="#${property.id}-details" style="display: inline-block; background: #1a5490; color: white; padding: 8px 12px; text-decoration: none; border-radius: 4px; font-size: 12px; font-weight: 500;" onclick="document.getElementById('${property.id}-details').scrollIntoView({behavior: 'smooth'}); return false;">
                                View Details
                            </a>
                            ${listingLink}
                            <a href="tel:${propertyData.contact.phone.replace(/[^\d]/g, '')}" style="display: inline-block; background: #28a745; color: white; padding: 6px 12px; text-decoration: none; border-radius: 4px; font-size: 12px; font-weight: 500;">
                                Call
                            </a>
                        </div>
                    </div>
                `
            });

            marker.addListener("click", () => {
                infoWindow.open({ anchor: marker, map });
            });
        });

        // Hide fallback message
        const fallback = document.getElementById('map-fallback');
        if (fallback) fallback.style.display = 'none';

    } catch (error) {
        console.error('Error initializing map:', error);
        showMapFallback();
    }
}

function createMarkerContent(type, price) {
    const markerContainer = document.createElement('div');
    markerContainer.style.display = 'flex';
    markerContainer.style.flexDirection = 'column';
    markerContainer.style.alignItems = 'center';
    markerContainer.style.cursor = 'pointer';

    const priceLabel = document.createElement('div');
    priceLabel.textContent = price;
    priceLabel.style.backgroundColor = 'white';
    priceLabel.style.color = '#1a5490';
    priceLabel.style.padding = '4px 8px';
    priceLabel.style.borderRadius = '12px';
    priceLabel.style.fontSize = '12px';
    priceLabel.style.fontWeight = 'bold';
    priceLabel.style.border = '1px solid #1a5490';
    priceLabel.style.boxShadow = '0 2px 4px rgba(0,0,0,0.2)';
    priceLabel.style.marginBottom = '4px';
    priceLabel.style.whiteSpace = 'nowrap';

    const pin = document.createElement('div');
    pin.style.width = '24px';
    pin.style.height = '24px';
    pin.style.borderRadius = '50%';
    pin.style.border = '3px solid white';
    pin.style.boxShadow = '0 2px 6px rgba(0,0,0,0.3)';

    switch (type) {
        case 'gated': pin.style.backgroundColor = '#1e88e5'; break;
        case 'duplex': pin.style.backgroundColor = '#43a047'; break;
        case 'apartments': pin.style.backgroundColor = '#ffa726'; break;
        case 'single': pin.style.backgroundColor = '#e53935'; break;
        default: pin.style.backgroundColor = '#757575';
    }

    markerContainer.appendChild(priceLabel);
    markerContainer.appendChild(pin);

    return markerContainer;
}

function showMapFallback() {
    const mapElement = document.getElementById('map');
    const fallbackElement = document.getElementById('map-fallback');
    if (mapElement) mapElement.style.display = 'none';
    if (fallbackElement) fallbackElement.style.display = 'flex';
}

// Bedroom Filter functionality
function filterPropertiesByBedrooms(bedroomCount) {
    if (bedroomCount === 'all') {
        return propertyData.properties;
    }

    const count = parseInt(bedroomCount);
    return propertyData.properties.filter(property => {
        return property.units.some(unit => unit.bedrooms === count);
    });
}

function renderFilteredProperties(bedroomCount) {
    const propertiesContainer = document.getElementById('properties-container');
    const filterResultsInfo = document.getElementById('filter-results');

    if (!propertiesContainer) return;

    const filteredProperties = filterPropertiesByBedrooms(bedroomCount);

    if (filteredProperties.length === 0) {
        propertiesContainer.innerHTML = '<p style="text-align: center; padding: 40px; color: #5a7a95; font-size: 1.1rem;">No properties found with the selected criteria.</p>';
        if (filterResultsInfo) {
            filterResultsInfo.textContent = 'No properties match your search';
        }
    } else {
        const propertiesHTML = filteredProperties.map(property => renderProperty(property)).join('');
        propertiesContainer.innerHTML = propertiesHTML;

        if (filterResultsInfo) {
            const totalUnits = filteredProperties.reduce((sum, prop) => {
                if (bedroomCount === 'all') {
                    return sum + prop.units.length;
                } else {
                    const count = parseInt(bedroomCount);
                    return sum + prop.units.filter(unit => unit.bedrooms === count).length;
                }
            }, 0);

            if (bedroomCount === 'all') {
                filterResultsInfo.textContent = `Showing all ${filteredProperties.length} properties with ${totalUnits} total units`;
            } else {
                filterResultsInfo.textContent = `Found ${filteredProperties.length} ${filteredProperties.length === 1 ? 'property' : 'properties'} with ${totalUnits} ${bedroomCount}-bedroom ${totalUnits === 1 ? 'unit' : 'units'}`;
            }
        }
    }

    // Scroll to properties section
    const propertyDetailsSection = document.querySelector('.property-details-section');
    if (propertyDetailsSection) {
        propertyDetailsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// Initialize main page when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Render properties
    const propertiesContainer = document.getElementById('properties-container');
    if (propertiesContainer) {
        const propertiesHTML = propertyData.properties.map(property => renderProperty(property)).join('');
        propertiesContainer.innerHTML = propertiesHTML;
    }

    // Render universal amenities
    const universalAmenitiesContainer = document.getElementById('universal-amenities-container');
    if (universalAmenitiesContainer) {
        universalAmenitiesContainer.innerHTML = renderUniversalAmenities();
    }

    // Render social media
    const socialMediaContainer = document.getElementById('social-media-container');
    if (socialMediaContainer) {
        socialMediaContainer.innerHTML = renderSocialMedia();
    }

    // Set up bedroom filter buttons
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));

            // Add active class to clicked button
            this.classList.add('active');

            // Get bedroom count and filter
            const bedroomCount = this.getAttribute('data-bedrooms');
            renderFilteredProperties(bedroomCount);
        });
    });

    // Initialize filter results info
    const filterResultsInfo = document.getElementById('filter-results');
    if (filterResultsInfo) {
        const totalUnits = propertyData.properties.reduce((sum, prop) => sum + prop.units.length, 0);
        filterResultsInfo.textContent = `Showing all ${propertyData.properties.length} properties with ${totalUnits} total units`;
    }

    console.log('Main page loaded and rendered successfully');
});

// Map initialization - will be called by Google Maps API when ready
window.initMap = initMap;
