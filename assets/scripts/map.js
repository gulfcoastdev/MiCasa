// Google Maps Integration for Mi Casa Rentals
let map;

// Property locations with details
const properties = [
    // Gated 4-Unit Community - 1810 W Gadsden St
    {
        address: "1810 W Gadsden St, Pensacola, FL 32501",
        lat: 30.419862779865245,
        lng: -87.23847799627355,
        title: "1810 W Gadsden",
        info: "3 bed / 2 bath - $2,350/month<br>Gated Community",
        type: "gated",
        url: "#listing-1810-gadsden"
    },
    {
        address: "1812 W Gadsden St, Pensacola, FL 32501",
        lat: 30.419862779865245,
        lng: -87.23837799627355,
        title: "1812 W Gadsden",
        info: "3 bed / 2 bath - $2,350/month<br>Gated Community",
        type: "gated",
        url: "#listing-1812-gadsden"
    },
    {
        address: "1816 W Gadsden St, Pensacola, FL 32501",
        lat: 30.419862779865245,
        lng: -87.23827799627355,
        title: "1816 W Gadsden",
        info: "3 bed / 2 bath - $2,350/month<br>Gated Community",
        type: "gated",
        url: "#listing-1816-gadsden"
    },
    {
        address: "1818 W Gadsden St, Pensacola, FL 32501",
        lat: 30.419862779865245,
        lng: -87.23817799627355,
        title: "1818 W Gadsden",
        info: "3 bed / 2 bath - $2,350/month<br>Gated Community",
        type: "gated",
        url: "#listing-1818-gadsden"
    },
    // 1918 W Gadsden Duplex
    {
        address: "1918 W Gadsden St, Pensacola, FL 32501",
        lat: 30.420321286721673,
        lng: -87.23991679528676,
        title: "1918 W Gadsden - Unit A",
        info: "3 bed / 2 bath - $2,250/month<br>Duplex Unit A",
        type: "duplex",
        url: "#listing-1918a-gadsden"
    },
    {
        address: "1918 W Gadsden St, Pensacola, FL 32501",
        lat: 30.420321286721673,
        lng: -87.23981679528676,
        title: "1918 W Gadsden - Unit B",
        info: "3 bed / 2 bath - $2,250/month<br>Duplex Unit B",
        type: "duplex",
        url: "#listing-1918b-gadsden"
    },
    // Yacht Harbor Dr
    {
        address: "4969 Yacht Harbor Dr, Pensacola, FL 32514",
        lat: 30.514003753877137,
        lng: -87.17162733479648,
        title: "4969 Yacht Harbor Dr",
        info: "2 bed / 1 bath - $1,750/month<br>Waterfront Area",
        type: "single",
        url: "#listing-yacht-harbor"
    },
    // Rebecca Street Apartments
    {
        address: "1625 Rebecca St, Pensacola, FL 32534",
        lat: 30.530505377105996,
        lng: -87.2915285663669,
        title: "1625 Rebecca St",
        info: "1 bed / 1 bath - $1,500/month<br>4 Apartments Available",
        type: "apartments",
        url: "#listing-rebecca"
    }
];

// Initialize the map
function initMap() {
    try {
        // Center map on Pensacola
        const pensacola = { lat: 30.4213, lng: -87.2169 };
        
        map = new google.maps.Map(document.getElementById("map"), {
            zoom: 11,
            center: pensacola,
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
                content: createMarkerContent(property.type)
            });

            // Create info window
            const infoWindow = new google.maps.InfoWindow({
                content: `
                    <div style="padding: 10px; max-width: 250px;">
                        <h3 style="color: #1a5490; margin: 0 0 8px 0; font-size: 16px;">
                            ${property.title}
                        </h3>
                        <p style="margin: 0 0 8px 0; color: #2c3e50; font-size: 14px;">
                            ${property.info}
                        </p>
                        <p style="margin: 0 0 12px 0; color: #666; font-size: 12px;">
                            ${property.address}
                        </p>
                        <a href="${property.url}" style="display: inline-block; background: #1a5490; color: white; padding: 8px 16px; text-decoration: none; border-radius: 4px; font-size: 14px; font-weight: 500;">
                            View Details
                        </a>
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

// Create custom marker content based on property type
function createMarkerContent(type) {
    const pin = document.createElement('div');
    pin.style.width = '20px';
    pin.style.height = '20px';
    pin.style.borderRadius = '50%';
    pin.style.border = '2px solid white';
    pin.style.boxShadow = '0 2px 4px rgba(0,0,0,0.3)';
    
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
    
    return pin;
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