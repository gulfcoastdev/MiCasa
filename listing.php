<?php
// Get slug from URL parameter
$slug = isset($_GET['slug']) ? htmlspecialchars($_GET['slug']) : '';
$canonical_url = $slug ? "https://www.micasa.rentals/listing.php?slug=" . urlencode($slug) : "https://www.micasa.rentals/";

// Load property data from JSON
$jsonFile = __DIR__ . '/assets/data/property-data.json';
$propertyData = json_decode(file_get_contents($jsonFile), true);

// Get property-specific SEO data
$pageTitle = 'Property Details | Mi Casa Rentals';
$pageDescription = 'View detailed information about this furnished rental property in Pensacola, FL';

if ($slug && $propertyData) {
    foreach ($propertyData['properties'] as $property) {
        if ($property['slug'] === $slug) {
            $pageTitle = $property['seoTitle'] ?? $pageTitle;
            $pageDescription = $property['seoDescription'] ?? $pageDescription;
            break;
        }
    }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo htmlspecialchars($pageTitle); ?></title>
    <meta name="description" content="<?php echo htmlspecialchars($pageDescription); ?>">
    <link rel="canonical" href="<?php echo $canonical_url; ?>">
    <link rel="stylesheet" href="assets/styles/styles.css">
    <link rel="stylesheet" href="assets/styles/property-detail.css">

    <?php include 'components/analytics.php'; ?>
</head>
<body>
    <?php include 'components/header.php'; ?>

    <main>
        <!-- Property detail content will be loaded by JavaScript -->
        <div id="property-detail-container">
            <!-- Loading state -->
            <div class="property-loading">
                <p>Loading property details...</p>
            </div>
        </div>

        <!-- Marketing Component -->
        <?php include 'components/marketing.php'; ?>
    </main>

    <?php include 'components/video-modal.php'; ?>
    <?php include 'components/footer.php'; ?>

    <script src="assets/scripts/navigation.js"></script>
    <script src="assets/scripts/logo-loader.js"></script>
    <script src="assets/scripts/video-modal.js"></script>
    <script src="assets/scripts/testimonials.js"></script>
    <script src="assets/scripts/data/property-data.php"></script>
    <script src="assets/scripts/utils/formatters.js"></script>
    <script src="assets/scripts/property-detail.js"></script>
</body>
</html>
