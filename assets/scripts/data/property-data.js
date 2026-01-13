// Property Data - Single Source of Truth
// This file contains only the property data structure, no rendering logic

const propertyData = {
    properties: [
        {
            id: "rebecca-street",
            slug: "rebecca-street",
            name: "1625 Rebecca Street",
            address: "1625 Rebecca Street, Pensacola, FL 32534",
            location: { city: "Pensacola", state: "FL" },
            description: "4 Apartments",
            fullDescription: "Charming 4-unit apartment complex featuring fully furnished 1-bedroom units in a quiet Pensacola neighborhood. Perfect for military personnel, travel nurses, and professionals seeking comfortable monthly rentals. Price includes all utilities (Power, Water, Trash, Sanitation, Internet, and Monthly Cleaning) - a $280/month value.",
            squareFootage: 550,
            image: "assets/slider/image1.jpeg",
            heroVideo: null,
            propertyVideoTour: "https://youtu.be/oVqamApe-j0",
            listingUrl: "https://www.avail.co/l/61452985",
            bookingUrl: "https://www.avail.co/l/61452985",
            coordinates: { lat: 30.530505377105996, lng: -87.2915285663669 },
            mapInfo: { title: "1625 Rebecca St", type: "apartments" },
            petPolicy: "Pets approved case by case",
            parking: "Street parking",
            utilityBundle: { price: 280, includes: ["Power", "Water", "Trash", "Sanitation", "Internet", "Monthly Cleaning"] },
            amenities: ["Pergola", "Large peaceful yard", "Fully furnished", "All utilities included in rent"],
            units: [
                {
                    id: "rebecca-unit-a",
                    name: "Unit A",
                    bedrooms: 1,
                    bathrooms: 1,
                    rent: 1680,
                    sleeps: 2,
                    availableDate: "2026-09-01",
                    status: "available",
                    images: ["assets/slider/image1.jpeg", "assets/slider/image2.jpeg"],
                    videoTour: "https://youtu.be/8x_hrrqkpfs", // Example - replace with actual video
                    bookingUrl: "https://www.avail.co/l/61452985"
                },
                {
                    id: "rebecca-unit-b",
                    name: "Unit B",
                    bedrooms: 1,
                    bathrooms: 1,
                    rent: 1680,
                    sleeps: 2,
                    availableDate: "2026-09-01",
                    status: "available",
                    images: ["assets/slider/image3.jpeg"],
                    videoTour: "https://youtu.be/1Mcm02yAoEs",
                    bookingUrl: "https://www.avail.co/l/61452985"
                },
                {
                    id: "rebecca-unit-c",
                    name: "Unit C",
                    bedrooms: 1,
                    bathrooms: 1,
                    rent: 1680,
                    sleeps: 2,
                    availableDate: "2026-03-30",
                    status: "available",
                    images: ["assets/slider/image15.jpeg"],
                    videoTour: "https://youtu.be/Rd2HIVCPjTo",
                    bookingUrl: "https://www.avail.co/l/61452985"
                },
                {
                    id: "rebecca-unit-d",
                    name: "Unit D",
                    bedrooms: 1,
                    bathrooms: 1,
                    rent: 1680,
                    sleeps: 2,
                    availableDate: "2026-03-01",
                    status: "available",
                    images: ["assets/slider/image16.jpeg"],
                    videoTour: "https://youtu.be/r1nkbInTI8k",
                    bookingUrl: "https://www.avail.co/l/61452985"
                }
            ]
        },
        {
            id: "gadsden-community",
            slug: "gadsden-community",
            name: "1810 W Gadsden Community",
            address: "1810 W Gadsden Community, Pensacola, FL 32501",
            location: { city: "Pensacola", state: "FL" },
            description: "Gated 4-Unit Complex",
            fullDescription: "Exclusive gated community featuring four spacious 3-bedroom units with garage parking (selected units) and beautiful outdoor amenities. Advertised price does not include utilities. Utility bundle available for $400/month (Power, Water, Trash, Sanitation, Internet).",
            squareFootage: 1600,
            image: "assets/slider/image6.jpeg",
            heroVideo: null,
            propertyVideoTour: "https://www.youtube.com/watch?v=CV8CIkuKBWA", // Sample - replace with actual tour
            listingUrl: "https://www.zillow.com/homedetails/44723225_zpid/?view=public",
            bookingUrl: "https://www.zillow.com/homedetails/44723225_zpid/?view=public",
            petPolicy: "Contact for details",
            parking: "Garage parking",
            coordinates: { lat: 30.419862779865245, lng: -87.23847799627355 },
            mapInfo: { title: "1810 W Gadsden Community", type: "gated" },
            utilityBundle: { price: 400, includes: ["Power", "Water", "Trash", "Sanitation", "Internet"] },
            amenities: ["Garage parking (1810, 1816, 1818)", "Private parking for residents only", "Large backyard with Pergola Gazebo", "Firepit", "Grill", "Palm trees"],
            units: [
                { id: "gadsden-1810", name: "1810 W Gadsden", bedrooms: 3, bathrooms: 2, rent: 1950, availableDate: "2026-04-06", status: "available", bookingUrl: "https://www.zillow.com/homedetails/44723225_zpid/?view=public" },
                { id: "gadsden-1812", name: "1812 W Gadsden", bedrooms: 3, bathrooms: 2, rent: 1900, availableDate: "2026-04-22", status: "available", bookingUrl: "https://www.zillow.com/homedetails/44723225_zpid/?view=public" },
                { id: "gadsden-1816", name: "1816 W Gadsden", bedrooms: 3, bathrooms: 2, rent: 1950, availableDate: "2026-04-23", status: "available", bookingUrl: "https://www.zillow.com/homedetails/44723225_zpid/?view=public" },
                { id: "gadsden-1818", name: "1818 W Gadsden", bedrooms: 3, bathrooms: 2, rent: 1950, availableDate: "2026-03-22", status: "available", bookingUrl: "https://www.zillow.com/homedetails/44723225_zpid/?view=public" }
            ]
        },
        {
            id: "gadsden-duplex",
            slug: "gadsden-duplex",
            name: "1918 W Gadsden Duplex",
            address: "1918 W Gadsden Duplex, Pensacola, FL 32501",
            location: { city: "Pensacola", state: "FL" },
            description: "2 Units",
            fullDescription: "Spacious 3-bedroom duplex units with garage parking and private fenced backyard for each unit. Advertised price does not include utilities. Utility bundle available for $400/month (Power, Water, Trash, Sanitation, Internet).",
            squareFootage: 1200,
            image: "assets/slider/image7.jpeg",
            heroVideo: null,
            propertyVideoTour: null, // No video tour available
            listingUrl: "https://www.avail.co/l/60493799",
            bookingUrl: "https://www.avail.co/l/60493799",
            petPolicy: "Contact for details",
            parking: "Garage parking",
            coordinates: { lat: 30.420321286721673, lng: -87.23991679528676 },
            mapInfo: { title: "1918 W Gadsden Duplex", type: "duplex" },
            utilityBundle: { price: 400, includes: ["Power", "Water", "Trash", "Sanitation", "Internet"] },
            amenities: ["Garage parking", "Fenced backyard"],
            units: [
                { id: "gadsden-duplex-a", name: "Unit A", bedrooms: 3, bathrooms: 2, rent: 1950, availableDate: "2026-08-01", status: "available", bookingUrl: "https://www.avail.co/l/60493799" },
                { id: "gadsden-duplex-b", name: "Unit B", bedrooms: 3, bathrooms: 2, rent: 1950, availableDate: "2026-09-01", status: "available", bookingUrl: "https://www.avail.co/l/60493799" }
            ]
        },
        {
            id: "yacht-harbor",
            slug: "yacht-harbor",
            name: "4969 Yacht Harbor Drive",
            address: "4969 Yacht Harbor Drive, Pensacola, FL 32514",
            location: { city: "Pensacola", state: "FL" },
            description: "2 Units",
            fullDescription: "Comfortable 2-bedroom duplex units with large fenced backyard, perfect for families or professionals. Advertised price does not include utilities. Utility bundle available for $250/month (Power, Water, Trash, Sanitation, Internet).",
            squareFootage: 850,
            image: "assets/slider/image5.jpeg",
            heroVideo: null,
            propertyVideoTour: null, // Sample - replace with actual tour
            listingUrl: "https://www.avail.co/companies/micasa",
            bookingUrl: "https://www.avail.co/companies/micasa",
            petPolicy: "Contact for details",
            parking: "Driveway parking",
            coordinates: { lat: 30.514003753877137, lng: -87.17162733479648 },
            mapInfo: { title: "4969 Yacht Harbor Dr", type: "single" },
            utilityBundle: { price: 250, includes: ["Power", "Water", "Trash", "Sanitation", "Internet"] },
            amenities: ["Large fenced backyard"],
            units: [
                { id: "yacht-harbor-a", name: "Unit A", bedrooms: 2, bathrooms: 1, rent: 1700, availableDate: "2026-09-01", status: "available", bookingUrl: "https://www.avail.co/companies/micasa" },
                { id: "yacht-harbor-b", name: "Unit B", bedrooms: 2, bathrooms: 1, rent: 1700, availableDate: "2026-05-01", status: "available", bookingUrl: "https://www.avail.co/companies/micasa" }
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

// Helper function to get property by slug
function getPropertyBySlug(slug) {
    return propertyData.properties.find(p => p.slug === slug || p.id === slug);
}

// Make data globally accessible
window.propertyData = propertyData;
window.getPropertyBySlug = getPropertyBySlug;
