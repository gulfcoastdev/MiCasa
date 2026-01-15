# Property Data

This directory contains the single source of truth for all property data.

## Files

### property-data.json
The master data file containing all property information including:
- Property details (name, address, descriptions)
- SEO metadata (titles, descriptions)
- Unit information (bedrooms, rent, availability)
- Amenities and features
- Contact information
- Universal amenities

## Usage

### PHP (Server-side)
PHP files can read the JSON directly:
```php
$jsonFile = __DIR__ . '/data/property-data.json';
$propertyData = json_decode(file_get_contents($jsonFile), true);
```

### JavaScript (Client-side)
JavaScript files access the data via `assets/scripts/data/property-data.php`, which reads the JSON and outputs it as a JavaScript variable:
```html
<script src="assets/scripts/data/property-data.php"></script>
```

This makes the data available as:
- `window.propertyData` - The full property data object
- `window.getPropertyBySlug(slug)` - Helper function to find properties by slug

## Benefits
- **Single source of truth**: All property data is maintained in one JSON file
- **No duplication**: PHP and JavaScript share the same data
- **Easy updates**: Modify property-data.json to update data site-wide
- **SEO optimized**: PHP can read meta tags server-side for better SEO
- **Dynamic**: JavaScript can use the same data for client-side rendering
