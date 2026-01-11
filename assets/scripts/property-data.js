// Property Data and Rendering System
const propertyData = {
    properties: [
        {
            id: "rebecca-street",
            slug: "rebecca-street",
            name: "1625 Rebecca Street",
            address: "1625 Rebecca Street, Pensacola, FL 32534",
            location: { city: "Pensacola", state: "FL" },
            description: "4 Apartments",
            fullDescription: "Charming 4-unit apartment complex featuring fully furnished 1-bedroom units in a quiet Pensacola neighborhood. Perfect for military personnel, travel nurses, and professionals seeking comfortable monthly rentals.",
            squareFootage: 550,
            image: "assets/slider/image1.jpeg",
            heroVideo: null, // Set to video URL when available
            listingUrl: "https://www.avail.co/l/61109049",
            bookingUrl: "https://www.avail.co/l/61109049",
            coordinates: { lat: 30.530505377105996, lng: -87.2915285663669 },
            mapInfo: { title: "1625 Rebecca St", type: "apartments" },
            petPolicy: "No pets",
            parking: "Street parking",
            utilityBundle: { price: 200, includes: ["Power", "Water", "Trash", "Sanitation", "Internet"] },
            amenities: ["Pergola", "Large peaceful yard", "Fully furnished", "All utilities included option"],
            units: [
                {
                    id: "rebecca-unit-a",
                    name: "Unit A",
                    bedrooms: 1,
                    bathrooms: 1,
                    rent: 1500,
                    sleeps: 2,
                    availableDate: "2026-09-01",
                    status: "available",
                    images: ["assets/slider/image1.jpeg", "assets/slider/image2.jpeg"],
                    videoTour: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Example - replace with actual video
                    bookingUrl: "https://www.avail.co/l/61109049"
                },
                {
                    id: "rebecca-unit-b",
                    name: "Unit B",
                    bedrooms: 1,
                    bathrooms: 1,
                    rent: 1500,
                    sleeps: 2,
                    availableDate: "2026-09-01",
                    status: "available",
                    images: ["assets/slider/image1.jpeg"],
                    videoTour: null,
                    bookingUrl: "https://www.avail.co/l/61109049"
                },
                {
                    id: "rebecca-unit-c",
                    name: "Unit C",
                    bedrooms: 1,
                    bathrooms: 1,
                    rent: 1500,
                    sleeps: 2,
                    availableDate: "2026-03-30",
                    status: "available",
                    images: ["assets/slider/image1.jpeg"],
                    videoTour: null,
                    bookingUrl: "https://www.avail.co/l/61109049"
                },
                {
                    id: "rebecca-unit-d",
                    name: "Unit D",
                    bedrooms: 1,
                    bathrooms: 1,
                    rent: 1500,
                    sleeps: 2,
                    availableDate: "2026-03-01",
                    status: "available",
                    images: ["assets/slider/image1.jpeg"],
                    videoTour: null,
                    bookingUrl: "https://www.avail.co/l/61109049"
                }
            ]
        },
        {
            id: "gadsden-community",
            slug: "gadsden-community",
            name: "1810 W Gadsden Community",
            address: "1810 W Gadsden Community, Pensacola, FL 32501",
            description: "Gated 4-Unit Complex",
            squareFootage: 1600,
            image: "assets/slider/image6.jpeg",
            listingUrl: "https://www.avail.co/l/60590948",
            coordinates: { lat: 30.419862779865245, lng: -87.23847799627355 },
            mapInfo: { title: "1810 W Gadsden Community", type: "gated" },
            utilityBundle: { price: 400, includes: ["Power", "Water", "Trash", "Sanitation", "Internet"] },
            amenities: ["Garage parking (1810, 1816, 1818)", "Private parking for residents only", "Large backyard with Pergola Gazebo", "Firepit", "Grill", "Palm trees"],
            units: [
                { id: "gadsden-1810", name: "1810 W Gadsden", bedrooms: 3, bathrooms: 2, rent: 2100, availableDate: "2026-04-06", status: "available" },
                { id: "gadsden-1812", name: "1812 W Gadsden", bedrooms: 3, bathrooms: 2, rent: 2100, availableDate: "2026-04-22", status: "available" },
                { id: "gadsden-1816", name: "1816 W Gadsden", bedrooms: 3, bathrooms: 2, rent: 2100, availableDate: "2026-04-23", status: "available" },
                { id: "gadsden-1818", name: "1818 W Gadsden", bedrooms: 3, bathrooms: 2, rent: 2100, availableDate: "2026-03-22", status: "available" }
            ]
        },
        {
            id: "gadsden-duplex",
            slug: "gadsden-duplex",
            name: "1918 W Gadsden Duplex",
            address: "1918 W Gadsden Duplex, Pensacola, FL 32501",
            description: "2 Units",
            squareFootage: 1200,
            image: "assets/slider/image7.jpeg",
            listingUrl: "https://www.avail.co/l/60493799",
            coordinates: { lat: 30.420321286721673, lng: -87.23991679528676 },
            mapInfo: { title: "1918 W Gadsden Duplex", type: "duplex" },
            utilityBundle: { price: 400, includes: ["Power", "Water", "Trash", "Sanitation", "Internet"] },
            amenities: ["Garage parking", "Fenced backyard"],
            units: [
                { id: "gadsden-duplex-a", name: "Unit A", bedrooms: 3, bathrooms: 2, rent: 2250, availableDate: "2026-08-01", status: "available" },
                { id: "gadsden-duplex-b", name: "Unit B", bedrooms: 3, bathrooms: 2, rent: 2250, availableDate: "2026-09-01", status: "available" }
            ]
        },
        {
            id: "yacht-harbor",
            slug: "yacht-harbor",
            name: "4969 Yacht Harbor Drive",
            address: "4969 Yacht Harbor Drive, Pensacola, FL 32514",
            description: "2 Units",
            squareFootage: 850,
            image: "assets/slider/image5.jpeg",
            coordinates: { lat: 30.514003753877137, lng: -87.17162733479648 },
            mapInfo: { title: "4969 Yacht Harbor Dr", type: "single" },
            utilityBundle: { price: 250, includes: ["Power", "Water", "Trash", "Sanitation", "Internet"] },
            amenities: ["Large fenced backyard"],
            units: [
                { id: "yacht-harbor-a", name: "Unit A", bedrooms: 2, bathrooms: 1, rent: 1750, availableDate: "2026-09-01", status: "available" },
                { id: "yacht-harbor-b", name: "Unit B", bedrooms: 2, bathrooms: 1, rent: 1750, availableDate: "2026-05-01", status: "available" }
            ]
        }
    ],
    universalAmenities: [
        "High-Speed Internet Available (not included)",
        "55+ Inch Smart TV",
        "Landscaping",
        "Pest Control"
    ],
    contact: {
        phone: "(850) 912-9225",
        email: "rentalspcola@gmail.com",
        shortTermBookings: "https://micasa.directstays.com/",
        longTermRentals: "https://www.avail.co/companies/micasa",
        socialMedia: {
            facebook: "https://www.facebook.com/micasa.pcola",
            instagram: "https://www.instagram.com/micasa.rentals/"
        }
    }
};

// Utility functions
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

// Render property HTML
function renderProperty(property) {
    const unitsTableHTML = property.units.map(unit => `
        <tr>
            <td>${unit.name}</td>
            <td>${unit.bedrooms} bed / ${unit.bathrooms} bath</td>
            <td>${formatCurrency(unit.rent)}/month</td>
            <td>${formatAvailabilityDate(unit.availableDate)}</td>
            <td class="status-available">${unit.status.charAt(0).toUpperCase() + unit.status.slice(1)}</td>
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
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${unitsTableHTML}
                    </tbody>
                </table>
            </div>
            <div class="utility-bundle">
                <strong>Utility Bundle Available:</strong> ${formatCurrency(property.utilityBundle.price)}/month (${property.utilityBundle.includes.join(', ')})
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

// Map functionality
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

// Filter properties by bedroom count
function filterPropertiesByBedrooms(bedroomCount) {
    if (bedroomCount === 'all') {
        return propertyData.properties;
    }

    const count = parseInt(bedroomCount);
    return propertyData.properties.filter(property => {
        return property.units.some(unit => unit.bedrooms === count);
    });
}

// Render filtered properties
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

// Initialize everything when DOM is loaded
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

    console.log('Property data loaded and rendered successfully');
});

// Map initialization - will be called by Google Maps API when ready
window.initMap = initMap;

// Get property by slug (for property detail pages)
function getPropertyBySlug(slug) {
    return propertyData.properties.find(p => p.slug === slug || p.id === slug);
}

// Make property data globally accessible
window.propertyData = propertyData;
window.getPropertyBySlug = getPropertyBySlug;
