document.addEventListener('DOMContentLoaded', async function() {
    const propertiesContainer = document.getElementById('properties-container');
    const universalAmenitiesContainer = document.getElementById('universal-amenities-container');

    if (!propertiesContainer || !universalAmenitiesContainer) {
        console.error('Required containers not found in DOM');
        return;
    }

    try {
        await unitsDataManager.loadData();

        if (unitsDataManager.isLoaded) {
            renderAllContent();

            // Reinitialize map with new data if Google Maps is available
            if (window.google && window.google.maps && typeof window.initMap === 'function') {
                window.initMap();
            }
        } else {
            console.warn('Units data not loaded, using fallback content');
        }
    } catch (error) {
        console.error('Failed to load units data:', error);
    }
});

function renderAllContent() {
    renderProperties();
    renderUniversalAmenities();
    renderSocialMedia();
}

function renderProperties() {
    const propertiesContainer = document.getElementById('properties-container');
    const properties = unitsDataManager.getProperties();

    propertiesContainer.innerHTML = '';

    properties.forEach(property => {
        const propertyElement = propertyRenderer.renderProperty(property);
        propertiesContainer.appendChild(propertyElement);
    });
}

function renderUniversalAmenities() {
    const universalAmenitiesContainer = document.getElementById('universal-amenities-container');
    const amenities = unitsDataManager.getUniversalAmenities();

    const amenitiesHTML = propertyRenderer.renderUniversalAmenities(amenities);
    universalAmenitiesContainer.innerHTML = amenitiesHTML;
}

function renderSocialMedia() {
    const socialMediaContainer = document.getElementById('social-media-container');
    if (!socialMediaContainer) return;

    const contact = unitsDataManager.getContact();
    const socialMedia = contact.socialMedia;

    if (!socialMedia) return;

    const socialHTML = `
        <h3 style="text-align: center; margin-bottom: 20px; color: #1a5490;">Follow Us</h3>
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

    socialMediaContainer.innerHTML = socialHTML;
}

function updatePropertyAvailability(propertyId, unitId, newStatus, newAvailableDate = null) {
    if (!unitsDataManager.isLoaded) {
        console.error('Units data not loaded');
        return false;
    }

    const property = unitsDataManager.getPropertyById(propertyId);
    if (!property) {
        console.error(`Property ${propertyId} not found`);
        return false;
    }

    const unit = property.units.find(u => u.id === unitId);
    if (!unit) {
        console.error(`Unit ${unitId} not found in property ${propertyId}`);
        return false;
    }

    unit.status = newStatus;
    if (newAvailableDate) {
        unit.availableDate = newAvailableDate;
    }

    renderProperties();

    return true;
}

function updateUnitRent(propertyId, unitId, newRent) {
    if (!unitsDataManager.isLoaded) {
        console.error('Units data not loaded');
        return false;
    }

    const property = unitsDataManager.getPropertyById(propertyId);
    if (!property) {
        console.error(`Property ${propertyId} not found`);
        return false;
    }

    const unit = property.units.find(u => u.id === unitId);
    if (!unit) {
        console.error(`Unit ${unitId} not found in property ${propertyId}`);
        return false;
    }

    unit.rent = newRent;
    renderProperties();

    return true;
}

function getAvailableUnits() {
    if (!unitsDataManager.isLoaded) {
        console.error('Units data not loaded');
        return [];
    }

    const properties = unitsDataManager.getProperties();
    const availableUnits = [];

    properties.forEach(property => {
        property.units.forEach(unit => {
            if (unit.status.toLowerCase() === 'available') {
                availableUnits.push({
                    propertyName: property.name,
                    propertyId: property.id,
                    unitName: unit.name,
                    unitId: unit.id,
                    bedrooms: unit.bedrooms,
                    bathrooms: unit.bathrooms,
                    rent: unit.rent,
                    availableDate: unit.availableDate,
                    squareFootage: property.squareFootage
                });
            }
        });
    });

    return availableUnits;
}

function searchUnits(criteria = {}) {
    if (!unitsDataManager.isLoaded) {
        console.error('Units data not loaded');
        return [];
    }

    const properties = unitsDataManager.getProperties();
    const results = [];

    properties.forEach(property => {
        property.units.forEach(unit => {
            let matches = true;

            if (criteria.minBedrooms && unit.bedrooms < criteria.minBedrooms) matches = false;
            if (criteria.maxBedrooms && unit.bedrooms > criteria.maxBedrooms) matches = false;
            if (criteria.minBathrooms && unit.bathrooms < criteria.minBathrooms) matches = false;
            if (criteria.maxBathrooms && unit.bathrooms > criteria.maxBathrooms) matches = false;
            if (criteria.maxRent && unit.rent > criteria.maxRent) matches = false;
            if (criteria.minRent && unit.rent < criteria.minRent) matches = false;
            if (criteria.status && unit.status.toLowerCase() !== criteria.status.toLowerCase()) matches = false;
            if (criteria.availableBefore) {
                const unitDate = new Date(unit.availableDate);
                const criteriaDate = new Date(criteria.availableBefore);
                if (unitDate > criteriaDate) matches = false;
            }

            if (matches) {
                results.push({
                    propertyName: property.name,
                    propertyId: property.id,
                    propertyAddress: property.address,
                    unitName: unit.name,
                    unitId: unit.id,
                    bedrooms: unit.bedrooms,
                    bathrooms: unit.bathrooms,
                    rent: unit.rent,
                    availableDate: unit.availableDate,
                    status: unit.status,
                    squareFootage: property.squareFootage,
                    amenities: property.amenities,
                    utilityBundle: property.utilityBundle
                });
            }
        });
    });

    return results;
}

window.updatePropertyAvailability = updatePropertyAvailability;
window.updateUnitRent = updateUnitRent;
window.getAvailableUnits = getAvailableUnits;
window.searchUnits = searchUnits;
window.renderAllContent = renderAllContent;