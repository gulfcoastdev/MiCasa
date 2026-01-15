<?php
header('Content-Type: application/javascript');

// Read the JSON file
$jsonFile = __DIR__ . '/../../data/property-data.json';
$jsonData = file_get_contents($jsonFile);

// Output as JavaScript variable
echo "// Property Data - Generated from JSON\n";
echo "// Source: assets/data/property-data.json\n\n";
echo "const propertyData = " . $jsonData . ";\n\n";
?>

// Helper function to get property by slug
function getPropertyBySlug(slug) {
    return propertyData.properties.find(p => p.slug === slug || p.id === slug);
}

// Make data globally accessible
window.propertyData = propertyData;
window.getPropertyBySlug = getPropertyBySlug;
