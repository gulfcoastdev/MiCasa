class UnitsDataManager {
    constructor() {
        this.data = null;
        this.isLoaded = false;
    }

    async loadData() {
        const possiblePaths = [
            './data/units.json',
            '/data/units.json',
            'data/units.json'
        ];

        for (const path of possiblePaths) {
            try {
                const response = await fetch(path);
                if (response.ok) {
                    this.data = await response.json();
                    this.isLoaded = true;
                    console.log(`Successfully loaded units data from ${path}`);
                    return this.data;
                }
            } catch (error) {
                console.warn(`Failed to load from ${path}:`, error.message);
            }
        }

        // If all paths fail, fall back to hardcoded data
        console.warn('All JSON loading attempts failed, using fallback data');
        this.loadFallbackData();
        return this.data;
    }

    handleLoadError() {
        console.warn('Failed to load units data, falling back to existing HTML content');
    }

    loadFallbackData() {
        // Fallback data when JSON file is not accessible
        this.data = {
            "properties": [
                {
                    "id": "rebecca-street",
                    "name": "1625 Rebecca Street",
                    "address": "1625 Rebecca Street, Pensacola, FL 32534",
                    "description": "4 Apartments",
                    "squareFootage": 550,
                    "image": "assets/slider/image1.jpeg",
                    "listingUrl": "https://www.avail.co/l/61109049",
                    "coordinates": {
                        "lat": 30.530505377105996,
                        "lng": -87.2915285663669
                    },
                    "mapInfo": {
                        "title": "1625 Rebecca St",
                        "type": "apartments"
                    },
                    "utilityBundle": {
                        "price": 200,
                        "includes": ["Power", "Water", "Trash", "Sanitation", "Internet"]
                    },
                    "amenities": [
                        "Pergola",
                        "Large peaceful yard"
                    ],
                    "units": [
                        {
                            "id": "rebecca-unit-a",
                            "name": "Unit A",
                            "bedrooms": 1,
                            "bathrooms": 1,
                            "rent": 1500,
                            "availableDate": "2025-09-01",
                            "status": "available"
                        },
                        {
                            "id": "rebecca-unit-b",
                            "name": "Unit B",
                            "bedrooms": 1,
                            "bathrooms": 1,
                            "rent": 1500,
                            "availableDate": "2025-09-01",
                            "status": "available"
                        },
                        {
                            "id": "rebecca-unit-c",
                            "name": "Unit C",
                            "bedrooms": 1,
                            "bathrooms": 1,
                            "rent": 1500,
                            "availableDate": "2025-09-01",
                            "status": "available"
                        },
                        {
                            "id": "rebecca-unit-d",
                            "name": "Unit D",
                            "bedrooms": 1,
                            "bathrooms": 1,
                            "rent": 1500,
                            "availableDate": "2025-09-01",
                            "status": "available"
                        }
                    ]
                },
                {
                    "id": "gadsden-community",
                    "name": "1810 W Gadsden Community",
                    "address": "1810 W Gadsden Community, Pensacola, FL 32501",
                    "description": "Gated 4-Unit Complex",
                    "squareFootage": 1600,
                    "image": "assets/slider/image6.jpeg",
                    "listingUrl": "https://www.avail.co/l/60590948",
                    "coordinates": {
                        "lat": 30.419862779865245,
                        "lng": -87.23847799627355
                    },
                    "mapInfo": {
                        "title": "1810 W Gadsden Community",
                        "type": "gated"
                    },
                    "utilityBundle": {
                        "price": 400,
                        "includes": ["Power", "Water", "Trash", "Sanitation", "Internet"]
                    },
                    "amenities": [
                        "Garage parking (1810, 1816, 1818)",
                        "Private parking for residents only",
                        "Large backyard with Pergola Gazebo",
                        "Firepit",
                        "Grill",
                        "Palm trees"
                    ],
                    "units": [
                        {
                            "id": "gadsden-1810",
                            "name": "1810 W Gadsden",
                            "bedrooms": 3,
                            "bathrooms": 2,
                            "rent": 2100,
                            "availableDate": "2026-02-01",
                            "status": "available"
                        },
                        {
                            "id": "gadsden-1812",
                            "name": "1812 W Gadsden",
                            "bedrooms": 3,
                            "bathrooms": 2,
                            "rent": 2100,
                            "availableDate": "2026-02-01",
                            "status": "available"
                        },
                        {
                            "id": "gadsden-1816",
                            "name": "1816 W Gadsden",
                            "bedrooms": 3,
                            "bathrooms": 2,
                            "rent": 2100,
                            "availableDate": "2025-09-23",
                            "status": "available"
                        },
                        {
                            "id": "gadsden-1818",
                            "name": "1818 W Gadsden",
                            "bedrooms": 3,
                            "bathrooms": 2,
                            "rent": 2100,
                            "availableDate": "2025-11-08",
                            "status": "available"
                        }
                    ]
                },
                {
                    "id": "gadsden-duplex",
                    "name": "1918 W Gadsden Duplex",
                    "address": "1918 W Gadsden Duplex, Pensacola, FL 32501",
                    "description": "2 Units",
                    "squareFootage": 1200,
                    "image": "assets/slider/image7.jpeg",
                    "listingUrl": "https://www.avail.co/l/60493799",
                    "coordinates": {
                        "lat": 30.420321286721673,
                        "lng": -87.23991679528676
                    },
                    "mapInfo": {
                        "title": "1918 W Gadsden Duplex",
                        "type": "duplex"
                    },
                    "utilityBundle": {
                        "price": 400,
                        "includes": ["Power", "Water", "Trash", "Sanitation", "Internet"]
                    },
                    "amenities": [
                        "Garage parking",
                        "Fenced backyard"
                    ],
                    "units": [
                        {
                            "id": "gadsden-duplex-a",
                            "name": "Unit A",
                            "bedrooms": 3,
                            "bathrooms": 2,
                            "rent": 2250,
                            "availableDate": "2026-08-01",
                            "status": "available"
                        },
                        {
                            "id": "gadsden-duplex-b",
                            "name": "Unit B",
                            "bedrooms": 3,
                            "bathrooms": 2,
                            "rent": 2250,
                            "availableDate": "2026-01-01",
                            "status": "available"
                        }
                    ]
                },
                {
                    "id": "yacht-harbor",
                    "name": "4969 Yacht Harbor Drive",
                    "address": "4969 Yacht Harbor Drive, Pensacola, FL 32514",
                    "description": "2 Units",
                    "squareFootage": 850,
                    "image": "assets/slider/image5.jpeg",
                    "coordinates": {
                        "lat": 30.514003753877137,
                        "lng": -87.17162733479648
                    },
                    "mapInfo": {
                        "title": "4969 Yacht Harbor Dr",
                        "type": "single"
                    },
                    "utilityBundle": {
                        "price": 250,
                        "includes": ["Power", "Water", "Trash", "Sanitation", "Internet"]
                    },
                    "amenities": [
                        "Large fenced backyard"
                    ],
                    "units": [
                        {
                            "id": "yacht-harbor-a",
                            "name": "Unit A",
                            "bedrooms": 2,
                            "bathrooms": 1,
                            "rent": 1750,
                            "availableDate": "2026-02-01",
                            "status": "available"
                        },
                        {
                            "id": "yacht-harbor-b",
                            "name": "Unit B",
                            "bedrooms": 2,
                            "bathrooms": 1,
                            "rent": 1750,
                            "availableDate": "2026-02-01",
                            "status": "available"
                        }
                    ]
                }
            ],
            "universalAmenities": [
                "High-Speed Internet Available (not included)",
                "55+ Inch Smart TV",
                "Landscaping",
                "Pest Control"
            ],
            "leaseTerms": {
                "baseTerms": "6+ month leases",
                "shortTermPremium": 0.20,
                "description": "Listed prices are for 6+ month leases. Shorter-term rentals (month-to-month) are 20% higher than listed rates."
            },
            "contact": {
                "phone": "(850) 912-9225",
                "email": "rentalspcola@gmail.com",
                "shortTermBookings": "https://micasa.directstays.com/",
                "longTermRentals": "https://www.avail.co/companies/micasa",
                "socialMedia": {
                    "facebook": "https://www.facebook.com/micasa.pcola",
                    "instagram": "https://www.instagram.com/micasa.rentals/"
                }
            }
        };
        this.isLoaded = true;
        console.log('Fallback data loaded successfully');
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