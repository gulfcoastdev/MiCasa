<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Furnished Rentals Pensacola FL | Mi Casa Rentals - Short & Long-Term</title>
    <meta name="description" content="Fully furnished apartments in Pensacola FL for short-term stays and long-term leases. Move-in ready corporate housing with WiFi. Book online or apply today!">
    <link rel="canonical" href="https://www.micasa.rentals/">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css">
    <link rel="stylesheet" href="assets/styles/styles.css">

    <?php include 'components/analytics.php'; ?>
</head>
<body>
    <?php include 'components/header.php'; ?>

    <main>
        <!-- Hero Section -->
        <section id="hero" class="hero">
            <!-- Image Slider - Swiper -->
            <div class="swiper hero-swiper">
                <div class="swiper-wrapper" id="hero-swiper-wrapper">
                    <!-- Slides will be generated automatically by JavaScript -->
                </div>
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
            </div>

            <!-- Thumbnail Slider -->
            <div class="swiper hero-thumbs-swiper">
                <div class="swiper-wrapper" id="hero-thumbs-wrapper">
                    <!-- Thumbs will be generated automatically by JavaScript -->
                </div>
            </div>

            <div class="container hero-content">
                <h1 class="hero-title">Furnished Rentals in Pensacola, Florida</h1>
                <p class="hero-subtitle">Move-in ready apartments for short-term stays and long-term leases in beautiful Pensacola</p>

                <!-- Contact Info in Hero -->
                <div class="hero-contact">
                    <p class="contact-text">Questions or inquiries?</p>
                    <div class="hero-contact-links">
                        <a href="tel:+1-850-912-9225" class="hero-contact-link">
                            📞 (850) 912-9225
                        </a>
                        <a href="mailto:rentalspcola@gmail.com" class="hero-contact-link">
                            ✉️ rentalspcola@gmail.com
                        </a>
                    </div>
                </div>
            </div>
        </section>

        <!-- Military Discount Banner Section -->
        <section class="military-banner-section">
            <div class="container">
                <div class="military-discount-banner">
                    <span class="military-text">🇺🇸 Proud to serve those who served! 🇺🇸 <strong>Special discounts for Military & Veterans</strong></span>
                </div>
            </div>
        </section>

        <!-- Description Section -->
        <section class="description">
            <div class="container">
                <h2>Premium Furnished Apartments in Pensacola</h2>
                <p>Discover our collection of beautifully furnished apartments in Pensacola, Florida, designed for comfort, convenience, and flexibility. Our move-in ready monthly rentals are ideal for military personnel, travel nurses, medical professionals, corporate housing, and extended stays. We proudly offer military discounts as a thank-you to those who serve.</p>
            </div>
        </section>

        <!-- Bedroom Filter Section -->
        <section id="filter" class="filter-section">
            <div class="container">
                <h2>Find Your Perfect Rental</h2>
                <p class="filter-intro">Filter properties by number of bedrooms</p>
                <div class="bedroom-filter">
                    <button class="filter-btn active" data-bedrooms="all">All Properties</button>
                    <button class="filter-btn" data-bedrooms="1">1 Bedroom</button>
                    <button class="filter-btn" data-bedrooms="2">2 Bedrooms</button>
                    <button class="filter-btn" data-bedrooms="3">3 Bedrooms</button>
                </div>
                <div id="filter-results" class="filter-results-info"></div>
            </div>
        </section>

        <!-- Property Details, Amenities & Availability Section -->
        <section id="properties" class="property-details-section">
            <div class="container">
                <h2>Property Details, Amenities & Availability</h2>

                <!-- Lease Terms & Pricing -->
                <div class="pricing-info-inline">
                    <h4>Lease Terms & Pricing</h4>
                    <p><strong>Listed prices are for 6+ month leases.</strong> Shorter-term rentals (month-to-month) are 20% higher than listed rates.</p>
                </div>

                <!-- Dynamic Properties Content -->
                <div id="properties-container">
                    <!-- Properties will be loaded here dynamically -->
                </div>

                <!-- Universal Amenities (dynamic) -->
                <div id="universal-amenities-container">
                    <!-- Universal amenities will be loaded here dynamically -->
                </div>

            </div>
        </section>

        <!-- Map Section -->
        <section class="map-section">
            <div class="container">
                <h2>Property Locations</h2>
            </div>
            <div class="map-container">
                <div id="map" class="google-map"></div>
                <div id="map-fallback" class="map-placeholder" style="display: none;">
                    <p>Interactive map showing our property locations in Pensacola, FL</p>
                    <p><small>Please add your Google Maps API key to view the interactive map</small></p>
                </div>
            </div>
        </section>

        <?php include 'components/marketing.php'; ?>
    </main>

    <?php include 'components/video-modal.php'; ?>
    <?php include 'components/footer.php'; ?>

    <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
    <script src="assets/scripts/navigation.js"></script>
    <script src="assets/scripts/hero-slider.js"></script>
    <script src="assets/scripts/logo-loader.js"></script>
    <script src="assets/scripts/video-modal.js"></script>
    <script src="assets/scripts/testimonials.js"></script>
    <script src="assets/scripts/data/property-data.php"></script>
    <script src="assets/scripts/utils/formatters.js"></script>
    <script src="assets/scripts/pages/main-page.js"></script>
    <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB5zmwFcxCvFrMChrVpA3AcoBRXDgEb8b8&loading=async&libraries=marker&callback=initMap"></script>
</body>
</html>
