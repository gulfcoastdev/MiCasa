// Google Maps Integration for Mi Casa Rentals
let map;

// Property locations with details - 5 consolidated markers
const properties = [
    // 1810 W Gadsden - 4 Units (Gated Community) - PRIMARY PROPERTY
    {
        address: "1810-1818 W Gadsden St, Pensacola, FL 32501",
        lat: 30.419862779865245,
        lng: -87.23847799627355,
        title: "1810 W Gadsden Community",
        info: "3 bed / 2 bath - $2,350/month<br>Gated 4-Unit Community",
        price: "$2,350",
        unitCount: "4 units",
        type: "gated",
        zillowUrl: "https://www.avail.co/l/60590948",
        sectionId: "gadsden-community-details"
    },
    // Rebecca Street - 4 Apartments
    {
        address: "1625 Rebecca St, Pensacola, FL 32534",
        lat: 30.530505377105996,
        lng: -87.2915285663669,
        title: "1625 Rebecca St",
        info: "1 bed / 1 bath - $1,500/month<br>4 Apartments Available",
        price: "$1,500",
        unitCount: "4 units",
        type: "apartments",
        zillowUrl: "https://www.avail.co/l/61109049",
        sectionId: "rebecca-details"
    },
    // 1918 W Gadsden - 2 Units (Duplex)
    {
        address: "1918 W Gadsden St, Pensacola, FL 32501",
        lat: 30.420321286721673,
        lng: -87.23991679528676,
        title: "1918 W Gadsden Duplex",
        info: "3 bed / 2 bath - $2,250/month<br>2-Unit Duplex",
        price: "$2,250",
        unitCount: "2 units",
        type: "duplex",
        zillowUrl: "https://www.avail.co/l/60493799",
        sectionId: "gadsden-duplex-details"
    },
    // Yacht Harbor Dr - 2 Units
    {
        address: "4969 Yacht Harbor Dr, Pensacola, FL 32514",
        lat: 30.514003753877137,
        lng: -87.17162733479648,
        title: "4969 Yacht Harbor Dr",
        info: "2 bed / 1 bath - $1,750/month<br>2 Units Available",
        price: "$1,750",
        unitCount: "2 units",
        type: "single",
        zillowUrl: null,
        sectionId: "yacht-harbor-details"
    }
];

// Initialize the map
function initMap() {
    try {
        // Center map to better show 1810 W Gadsden area
        const centerPoint = { lat: 30.450, lng: -87.230 };
        
        map = new google.maps.Map(document.getElementById("map"), {
            zoom: 12,
            center: centerPoint,
            mapId: "DEMO_MAP_ID",
            styles: [
                {
                    featureType: "water",
                    elementType: "geometry",
                    stylers: [{ color: "#e3f2fd" }]
                },
                {
                    featureType: "landscape",
                    elementType: "geometry",
                    stylers: [{ color: "#f7f9fc" }]
                },
                {
                    featureType: "road",
                    elementType: "geometry",
                    stylers: [{ color: "#ffffff" }]
                },
                {
                    featureType: "poi",
                    elementType: "labels",
                    stylers: [{ visibility: "off" }]
                }
            ]
        });

        // Add markers for each property
        properties.forEach((property, index) => {
            const marker = new google.maps.marker.AdvancedMarkerElement({
                position: { lat: property.lat, lng: property.lng },
                map: map,
                title: property.title,
                content: createMarkerContent(property.type, property.price)
            });

            // Create info window
            const zillowLink = property.zillowUrl ? 
                `<a href="${property.zillowUrl}" target="_blank" style="display: inline-block; background: #006aff; color: white; padding: 6px 12px; text-decoration: none; border-radius: 4px; font-size: 12px; font-weight: 500; margin-right: 6px;">
                    Zillow
                </a>` : '';
            
            const infoWindow = new google.maps.InfoWindow({
                content: `
                    <div style="padding: 10px; max-width: 280px;">
                        <h3 style="color: #1a5490; margin: 0 0 8px 0; font-size: 16px;">
                            ${property.title}
                        </h3>
                        <p style="margin: 0 0 6px 0; color: #2c3e50; font-size: 14px; font-weight: 500;">
                            ${property.unitCount}
                        </p>
                        <p style="margin: 0 0 8px 0; color: #2c3e50; font-size: 14px;">
                            ${property.info}
                        </p>
                        <p style="margin: 0 0 12px 0; color: #666; font-size: 12px;">
                            ${property.address}
                        </p>
                        <div style="display: flex; gap: 6px; flex-wrap: wrap;">
                            <a href="#${property.sectionId}" style="display: inline-block; background: #1a5490; color: white; padding: 8px 12px; text-decoration: none; border-radius: 4px; font-size: 12px; font-weight: 500;" onclick="document.getElementById('${property.sectionId}').scrollIntoView({behavior: 'smooth'}); return false;">
                                View Details
                            </a>
                            ${zillowLink}
                            <a href="tel:8506912685" style="display: inline-block; background: #28a745; color: white; padding: 6px 12px; text-decoration: none; border-radius: 4px; font-size: 12px; font-weight: 500;">
                                Call
                            </a>
                        </div>
                    </div>
                `
            });

            // Add click listener
            marker.addListener("click", () => {
                infoWindow.open({
                    anchor: marker,
                    map
                });
            });
        });

        // Hide fallback message
        document.getElementById('map-fallback').style.display = 'none';
        
    } catch (error) {
        console.error('Error initializing map:', error);
        showMapFallback();
    }
}

// Create custom marker content based on property type with price
function createMarkerContent(type, price) {
    const markerContainer = document.createElement('div');
    markerContainer.style.display = 'flex';
    markerContainer.style.flexDirection = 'column';
    markerContainer.style.alignItems = 'center';
    markerContainer.style.cursor = 'pointer';
    
    // Price label
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
    
    // Pin element
    const pin = document.createElement('div');
    pin.style.width = '24px';
    pin.style.height = '24px';
    pin.style.borderRadius = '50%';
    pin.style.border = '3px solid white';
    pin.style.boxShadow = '0 2px 6px rgba(0,0,0,0.3)';
    
    switch (type) {
        case 'gated':
            pin.style.backgroundColor = '#1e88e5';
            break;
        case 'duplex':
            pin.style.backgroundColor = '#43a047';
            break;
        case 'apartments':
            pin.style.backgroundColor = '#ffa726';
            break;
        case 'single':
            pin.style.backgroundColor = '#e53935';
            break;
        default:
            pin.style.backgroundColor = '#757575';
    }
    
    markerContainer.appendChild(priceLabel);
    markerContainer.appendChild(pin);
    
    return markerContainer;
}

// Show fallback if map fails to load
function showMapFallback() {
    document.getElementById('map').style.display = 'none';
    document.getElementById('map-fallback').style.display = 'flex';
}

// Handle map loading errors
window.addEventListener('load', function() {
    // Check if Google Maps loaded after 5 seconds
    setTimeout(function() {
        if (!window.google || !window.google.maps) {
            showMapFallback();
        }
    }, 5000);
});