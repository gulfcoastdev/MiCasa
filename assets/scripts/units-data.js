class UnitsDataManager {
    constructor() {
        this.data = null;
        this.isLoaded = false;
    }

    async loadData() {
        try {
            const response = await fetch('./data/units.json');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            this.data = await response.json();
            this.isLoaded = true;
            return this.data;
        } catch (error) {
            console.error('Error loading units data:', error);
            this.handleLoadError();
            throw error;
        }
    }

    handleLoadError() {
        console.warn('Failed to load units data, falling back to existing HTML content');
    }

    getProperties() {
        return this.data?.properties || [];
    }

    getPropertyById(id) {
        return this.data?.properties?.find(property => property.id === id);
    }

    getUniversalAmenities() {
        return this.data?.universalAmenities || [];
    }

    getLeaseTerms() {
        return this.data?.leaseTerms || {};
    }

    getContact() {
        return this.data?.contact || {};
    }

    getMapProperties() {
        if (!this.data?.properties) return [];

        return this.data.properties.map(property => {
            const firstAvailableUnit = property.units.find(unit => unit.status.toLowerCase() === 'available') || property.units[0];
            const lowestRent = Math.min(...property.units.map(u => u.rent));

            return {
                id: property.id,
                address: property.address,
                lat: property.coordinates.lat,
                lng: property.coordinates.lng,
                title: property.mapInfo.title,
                info: `${firstAvailableUnit.bedrooms} bed / ${firstAvailableUnit.bathrooms} bath - ${this.formatCurrency(lowestRent)}/month<br>${property.description}`,
                price: this.formatCurrency(lowestRent),
                unitCount: `${property.units.length} unit${property.units.length > 1 ? 's' : ''}`,
                type: property.mapInfo.type,
                zillowUrl: property.listingUrl || null,
                sectionId: `${property.id}-details`
            };
        });
    }

    formatCurrency(amount) {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        }).format(amount);
    }

    formatDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    }

    getStatusClass(status) {
        switch(status.toLowerCase()) {
            case 'available':
                return 'status-available';
            case 'occupied':
                return 'status-occupied';
            case 'maintenance':
                return 'status-maintenance';
            default:
                return 'status-unknown';
        }
    }
}

class PropertyRenderer {
    constructor(dataManager) {
        this.dataManager = dataManager;
    }

    renderProperty(property) {
        const propertyDiv = document.createElement('div');
        propertyDiv.id = `${property.id}-details`;
        propertyDiv.className = 'property-detail-group';

        propertyDiv.innerHTML = `
            <div class="property-overview">
                <div class="property-image">
                    <img src="${property.image}" alt="${property.name} Property" loading="lazy">
                </div>
                <div class="property-info">
                    <h3>${property.name} - ${property.description}</h3>
                    <p class="property-address">${property.address}</p>
                    <div class="square-footage">${property.squareFootage} sq ft per unit</div>
                    ${property.listingUrl ? `
                        <div class="property-listing-link">
                            <a href="${property.listingUrl}" target="_blank" class="listing-link">
                                More Info & Photos →
                            </a>
                        </div>
                    ` : ''}
                </div>
            </div>
            <div class="availability-table">
                ${this.renderUnitsTable(property.units)}
            </div>
            <div class="utility-bundle">
                <strong>Utility Bundle Available:</strong> ${this.dataManager.formatCurrency(property.utilityBundle.price)}/month (${property.utilityBundle.includes.join(', ')})
            </div>
            <div class="property-amenities">
                <h5>Property Features:</h5>
                <ul class="amenities-list">
                    ${property.amenities.map(amenity => `<li>🏡 ${amenity}</li>`).join('')}
                </ul>
            </div>
        `;

        return propertyDiv;
    }

    renderUnitsTable(units) {
        return `
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
                    ${units.map(unit => `
                        <tr>
                            <td>${unit.name}</td>
                            <td>${unit.bedrooms} bed / ${unit.bathrooms} bath</td>
                            <td>${this.dataManager.formatCurrency(unit.rent)}/month</td>
                            <td>${this.formatAvailabilityDate(unit.availableDate)}</td>
                            <td class="${this.dataManager.getStatusClass(unit.status)}">${this.capitalizeFirst(unit.status)}</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        `;
    }

    formatAvailabilityDate(dateString) {
        const date = new Date(dateString);
        const now = new Date();

        if (date.getDate() === 1) {
            return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long' });
        } else {
            return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
        }
    }

    capitalizeFirst(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    renderUniversalAmenities(amenities) {
        return `
            <div class="universal-amenities">
                <h3>All Properties Include</h3>
                <div class="amenity-highlights">
                    ${amenities.map(amenity => `
                        <div class="amenity-item">
                            <span class="amenity-icon">${this.getAmenityIcon(amenity)}</span>
                            <span>${amenity}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }

    getAmenityIcon(amenity) {
        if (amenity.toLowerCase().includes('internet') || amenity.toLowerCase().includes('wifi')) return '📶';
        if (amenity.toLowerCase().includes('tv')) return '📺';
        if (amenity.toLowerCase().includes('landscap')) return '🌿';
        if (amenity.toLowerCase().includes('pest')) return '🐛';
        return '🏡';
    }
}

const unitsDataManager = new UnitsDataManager();
const propertyRenderer = new PropertyRenderer(unitsDataManager);

window.UnitsDataManager = UnitsDataManager;
window.PropertyRenderer = PropertyRenderer;
window.unitsDataManager = unitsDataManager;
window.propertyRenderer = propertyRenderer;