<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Property Details | Mi Casa Rentals</title>
    <meta name="description" content="View detailed information about this furnished rental property in Pensacola, FL">
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

    <!-- Video Tour Modal -->
    <div id="video-tour-modal" class="video-modal" style="display: none;">
        <div class="video-modal-overlay" onclick="closeVideoTour()"></div>
        <div class="video-modal-content">
            <button class="video-modal-close" onclick="closeVideoTour()" aria-label="Close video">&times;</button>
            <h3 id="video-modal-title" class="video-modal-title"></h3>
            <div class="video-modal-wrapper">
                <iframe id="video-modal-iframe" src="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
    </div>

    <?php include 'components/footer.php'; ?>

    <script src="assets/scripts/navigation.js"></script>
    <script src="assets/scripts/logo-loader.js"></script>
    <script src="assets/scripts/property-data.js"></script>
    <script src="assets/scripts/property-detail.js"></script>
    <script src="assets/scripts/contact-form.js"></script>
</body>
</html>
